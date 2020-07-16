import Express from "express";
import AccountController from "./controller";
import Passport from "passport";

const AccountRouter = Express.Router();

AccountRouter.post(
  "/",
  Passport.authenticate("jwt", { session: false }),
  AccountController.save
);
AccountRouter.get(
  "/",
  Passport.authenticate("jwt", { session: false }),
  AccountController.fetch
);
AccountRouter.get(
  "/:accountID",
  Passport.authenticate("jwt", { session: false }),
  AccountController.getInformation
);
AccountRouter.put(
  "/",
  Passport.authenticate("jwt", { session: false }),
  AccountController.update
);
AccountRouter.delete(
  "/:accountID",
  Passport.authenticate("jwt", { session: false }),
  AccountController.remove
);

export default AccountRouter;
