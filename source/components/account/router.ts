import Express from "express";
import AccountController from "./controller";

const AccountRouter = Express.Router();

AccountRouter.post("/", AccountController.save);
AccountRouter.get("/", AccountController.fetch);

export default AccountRouter;
