import Database from "../index";
import AccountSeedQuery from "./modules/account";
import DepartmentSeedQuery from "./modules/department";
import DesignationSeedQuery from "./modules/designation";
import EmployeeProfileSeedQuery from "./modules/employeeProfile";
import EmployeeBenefitSeedQuery from "./modules/employeeBenefit";
import EmployeeSeedQuery from "./modules/employee";

const setAccountTableIDValueQuery = `select setval('account_id_seq', max(id)) FROM account;`;
const setDepartmentTableIDValueQuery = `select setval('department_id_seq', max(id)) FROM department;`;
const setDesignationTableIDValueQuery = `select setval('designation_id_seq', max(id)) FROM designation;`;
const setEmployeeProfileTableIDValueQuery = `select setval('employee_profile_id_seq', max(id)) FROM employee_profile;`;
const setEmployeeBenefitTableIDValueQuery = `select setval('employee_benefit_id_seq', max(id)) FROM employee_benefit;`;
const setEmployeeTableIDValueQuery = `select setval('employee_id_seq', max(id)) FROM employee;`;

const executeSeeds = async () => {
  await Database.execute(AccountSeedQuery);
  await Database.execute(DepartmentSeedQuery);
  await Database.execute(DesignationSeedQuery);
  await Database.execute(EmployeeProfileSeedQuery);
  await Database.execute(EmployeeBenefitSeedQuery);
  await Database.execute(EmployeeSeedQuery);
  await Database.execute(setAccountTableIDValueQuery);
  await Database.execute(setDepartmentTableIDValueQuery);
  await Database.execute(setDesignationTableIDValueQuery);
  await Database.execute(setEmployeeProfileTableIDValueQuery);
  await Database.execute(setEmployeeBenefitTableIDValueQuery);
  await Database.execute(setEmployeeTableIDValueQuery);
};

executeSeeds().then(() => console.log("Database seeds created."));
