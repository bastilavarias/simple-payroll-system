import Database from "../index";
import AccountTableQuery from "./modules/account";
import DepartmentTableQuery from "./modules/department";
import DesignationTableQuery from "./modules/designation";
import EmployeeProfileTableQuery from "./modules/employeeProfile";
import EmployeeProfileBenefitTableQuery from "./modules/employeeBenefit";
import EmployeeTableQuery from "./modules/employee";
import PayrollTableQuery from "./modules/payroll";

const executeTables = async () => {
  await Database.execute(AccountTableQuery);
  await Database.execute(DepartmentTableQuery);
  await Database.execute(DesignationTableQuery);
  await Database.execute(EmployeeProfileTableQuery);
  await Database.execute(EmployeeProfileTableQuery);
  await Database.execute(EmployeeProfileBenefitTableQuery);
  await Database.execute(EmployeeTableQuery);
  await Database.execute(EmployeeTableQuery);
  await Database.execute(PayrollTableQuery);
};

executeTables().then(() => console.log("Database tables created."));
