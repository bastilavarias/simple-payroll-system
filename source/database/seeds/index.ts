import Database from "../index";
import AccountSeedQuery from "./modules/account";
import DepartmentSeedQuery from "./modules/department";
import DesignationSeedQuery from "./modules/designation";
import EmployeeProfileSeedQuery from "./modules/employeeProfile";
import EmployeeBenefitSeedQuery from "./modules/employeeBenefit";
import EmployeeSeedQuery from "./modules/employee";

const executeSeeds = async () => {
  await Database.execute(AccountSeedQuery);
  await Database.execute(DepartmentSeedQuery);
  await Database.execute(DesignationSeedQuery);
  await Database.execute(EmployeeProfileSeedQuery);
  await Database.execute(EmployeeBenefitSeedQuery);
  await Database.execute(EmployeeSeedQuery);
};

executeSeeds().then(() => console.log("Database seeds created."));
