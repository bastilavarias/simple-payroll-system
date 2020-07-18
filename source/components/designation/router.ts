import Express from "express";
import DesignationController from "./controller";
import Passport from "passport";

const DesignationRouter = Express.Router();

DesignationRouter.post(
  "/",
  Passport.authenticate("jwt", { session: false }),
  DesignationController.save
);
DesignationRouter.get(
  "/",
  Passport.authenticate("jwt", { session: false }),
  DesignationController.fetch
);
DesignationRouter.get(
  "/:designationID",
  Passport.authenticate("jwt", { session: false }),
  DesignationController.getInformation
);
DesignationRouter.put(
  "/",
  Passport.authenticate("jwt", { session: false }),
  DesignationController.update
);
DesignationRouter.delete(
  "/:designationID",
  Passport.authenticate("jwt", { session: false }),
  DesignationController.remove
);

export default DesignationRouter;
