import Express from "express";
import AccountRouter from "./components/account/router";
import DepartmentRouter from "./components/department/router";
import DesignationRouter from "./components/designation/router";

const Api = Express();

Api.use("/account", AccountRouter);
Api.use("/department", DepartmentRouter);
Api.use("/designation", DesignationRouter);

export default Api;
