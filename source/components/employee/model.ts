import { EmployeeProfileForm } from "./type";
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

  saveBenefit: async () => {},
};

export default EmployeeModel;
