import {
  EmployeeBenefitForm,
  EmployeeForm,
  EmployeeInformation,
  EmployeeProfileForm,
} from "./type";
import Database from "../../database";

const EmployeeModel = {
  saveProfile: async (
    employeeProfileForm: EmployeeProfileForm
  ): Promise<number> => {
    const query = `insert into employee_profile (first_name, middle_name, last_name, extension_name, birth_date,
                                                     birth_place, sex, citizenship, civil_status, address,
                                                     contact_number, height, weight, blood_type)
                       values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
                       returning id;`;
    const {
      firstName,
      middleName,
      lastName,
      extensionName,
      birthDate,
      birthPlace,
      sex,
      citizenship,
      civilStatus,
      address,
      contactNumber,
      height,
      weight,
      bloodType,
    } = employeeProfileForm;
    const parameters = [
      firstName,
      middleName,
      lastName,
      extensionName,
      birthDate,
      birthPlace,
      sex,
      citizenship,
      civilStatus,
      address,
      contactNumber,
      height,
      weight,
      bloodType,
    ];
    const { rows } = await Database.execute(query, parameters);
    const result = rows[0].id;
    return result ? parseInt(result) : 0;
  },

  saveBenefit: async (
    employeeBenefitForm: EmployeeBenefitForm
  ): Promise<number> => {
    const query = `insert into employee_benefit (gsis_number, pag_ibig_id_number, philhealth_number, sss_number,
                                                     tin_number, agency_employee_number)
                       values ($1, $2, $3, $4, $5, $6)
                       returning id;`;
    const {
      gsisNumber,
      pagIbigIDNumber,
      philhealthNumber,
      sssNumber,
      tinNumber,
      agencyEmployeeNumber,
    } = employeeBenefitForm;
    const parameters = [
      gsisNumber,
      pagIbigIDNumber,
      philhealthNumber,
      sssNumber,
      tinNumber,
      agencyEmployeeNumber,
    ];
    const { rows } = await Database.execute(query, parameters);
    const result = rows[0].id;
    return result ? parseInt(result) : 0;
  },

  save: async (
    employeeForm: EmployeeForm,
    customID: string,
    employeeProfileID: number,
    employeeBenefitID: number
  ) => {
    const query = `insert into employee (custom_id, department_id, designation_id, employee_profile_id,
                                             employee_benefit_id)
                       values ($1, $2, $3, $4, $5);`;
    const { departmentID, designationID } = employeeForm;
    const parameters = [
      customID,
      departmentID,
      designationID,
      employeeProfileID,
      employeeBenefitID,
    ];
    await Database.execute(query, parameters);
  },

  fetch: async (): Promise<EmployeeInformation[]> => {
    const query = `select json_agg(employees)
                       from (
                                select e.id,
                                       e.custom_id                                       "customID",
                                       (select row_to_json(department)
                                        from (select id, name, description
                                              from department
                                              where id = e.department_id) department)    department,
                                       (select row_to_json(designation)
                                        from (select id, name, description, daily_salary "dailySalary"
                                              from designation
                                              where id = e.designation_id) designation)  designation,
                                       (select row_to_json(profile)
                                        from (select id,
                                                     first_name     "firstName",
                                                     middle_name    "middleName",
                                                     last_name      "lastName",
                                                     extension_name "extensionName",
                                                     birth_date     "birthDate",
                                                     birth_place    "birthPlace",
                                                     sex,
                                                     citizenship,
                                                     civil_status   "civilStatus",
                                                     address,
                                                     contact_number "contactNumber",
                                                     height,
                                                     weight,
                                                     blood_type     "bloodType"
                                              from employee_profile
                                              where id = e.employee_profile_id) profile) profile,
                                       (select row_to_json(benefit)
                                        from (select id,
                                                    gsis_number "gsisNumber",
                                                     pag_ibig_id_number "pagIbigIDNumber",
                                                     philhealth_number "philhealthNumber",
                                                     sss_number "sssNumber",
                                                     tin_number "tinNumber",
                                                     agency_employee_number "agencyEmployeeNumber"
                                              from employee_benefit
                                              where id = e.employee_benefit_id) benefit) benefit
                                from employee e
                                where e.is_deleted = false
                                order by e.id asc
                            ) employees;`;
    const { rows } = await Database.execute(query);
    return rows.length > 0 ? rows[0].json_agg : [];
  },

  getInformation: async (employeeID: number): Promise<EmployeeInformation> => {
    const query = `select row_to_json(employee)
                       from (
                                select e.id,
                                       e.custom_id                                       "customID",
                                       (select row_to_json(department)
                                        from (select id, name, description
                                              from department
                                              where id = e.department_id) department)    department,
                                       (select row_to_json(designation)
                                        from (select id, name, description, daily_salary "dailySalary"
                                              from designation
                                              where id = e.designation_id) designation)  designation,
                                       (select row_to_json(profile)
                                        from (select id,
                                                     first_name     "firstName",
                                                     middle_name    "middleName",
                                                     last_name      "lastName",
                                                     extension_name "extensionName",
                                                     birth_date     "birthDate",
                                                     birth_place    "birthPlace",
                                                     sex,
                                                     citizenship,
                                                     civil_status   "civilStatus",
                                                     address,
                                                     contact_number "contactNumber",
                                                     height,
                                                     weight,
                                                     blood_type     "bloodType"
                                              from employee_profile
                                              where id = e.employee_profile_id) profile) profile,
                                       (select row_to_json(benefit)
                                        from (select id,
                                                    gsis_number "gsisNumber",
                                                     pag_ibig_id_number "pagIbigIDNumber",
                                                     philhealth_number "philhealthNumber",
                                                     sss_number "sssNumber",
                                                     tin_number "tinNumber",
                                                     agency_employee_number "agencyEmployeeNumber"
                                              from employee_benefit
                                              where id = e.employee_benefit_id) benefit) benefit
                                from employee e
                                where e.is_deleted = false and e.id = $1
                                order by e.id asc
                            ) employee;`;
    const parameters = [employeeID];
    const { rows } = await Database.execute(query, parameters);
    return rows.length > 0 ? rows[0].row_to_json : {};
  },
};

export default EmployeeModel;
