import Express from "express";
import UserRouter from "./components/user/router";

const Api = Express();

Api.use("/user", UserRouter)

export default Api;