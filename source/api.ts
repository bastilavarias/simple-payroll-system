import Express from "express";
import AccountRouter from "./components/account/router";
import DepartmentRouter from "./components/department/router";
import DesignationRouter from "./components/designation/router";
import EmployeeRouter from "./components/employee/router";

const Api = Express();

Api.use("/account", AccountRouter);
Api.use("/department", DepartmentRouter);
Api.use("/designation", DesignationRouter);
Api.use("/employee", EmployeeRouter);

export default Api;
