import Express from "express";
import AccountRouter from "./components/account/router";

const Api = Express();

Api.use("/account", AccountRouter);

export default Api;
