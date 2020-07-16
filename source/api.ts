import Express from "express";
import AccountRouter from "./components/account/router";
import DepartmentRouter from "./components/department/router";
import DesignationRouter from "./components/designation/router";
import EmployeeRouter from "./components/employee/router";
import PayrollRouter from "./components/payroll/router";
import Router from "./components/authentication/router";

const Api = Express();

Api.use("/account", AccountRouter);
Api.use("/department", DepartmentRouter);
Api.use("/designation", DesignationRouter);
Api.use("/employee", EmployeeRouter);
Api.use("/payroll", PayrollRouter);
Api.use("/authentication", Router);

export default Api;
