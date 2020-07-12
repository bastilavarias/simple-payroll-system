import Express from "express";
import AccountController from "./controller";

const AccountRouter = Express.Router();

AccountRouter.post("/", AccountController.save);
AccountRouter.get("/", AccountController.fetch);
AccountRouter.get("/:accountID", AccountController.getInformation);
AccountRouter.put("/", AccountController.update);

export default AccountRouter;
