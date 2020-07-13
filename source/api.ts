import Express from "express";
import AccountRouter from "./components/account/router";
import DepartmentRouter from "./components/department/router";

const Api = Express();

Api.use("/account", AccountRouter);
Api.use("/department", DepartmentRouter);

export default Api;
