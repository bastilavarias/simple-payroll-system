import { EmployeeBenefitForm, EmployeeProfileForm } from "./type";
import Database from "../../database";

const EmployeeModel = {
  saveProfile: async (
    employeeProfileForm: EmployeeProfileForm
  ): Promise<number> => {
    const query = `insert into employee_profile (first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex, citizenship, civil_status, address, contact_number, height, weight, blood_type) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning id;`;
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

  saveBenefit: async (employeeBenefitForm: EmployeeBenefitForm) => {
    const query = `insert into employee_benefit (gsis_number, pag_ibig_id_number, philhealth_number, sss_number, tin_number, agency_employee_number) values ($1, $2, $3, $4, $5, $6) returning id;`;
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
};

export default EmployeeModel;
