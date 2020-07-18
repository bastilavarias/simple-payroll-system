import Express from "express";
import DepartmentController from "./controller";
import Passport from "passport";

const DepartmentRouter = Express.Router();

DepartmentRouter.post(
  "/",
  Passport.authenticate("jwt", { session: false }),
  DepartmentController.save
);
DepartmentRouter.get(
  "/",
  Passport.authenticate("jwt", { session: false }),
  DepartmentController.fetch
);
DepartmentRouter.get(
  "/:departmentID",
  Passport.authenticate("jwt", { session: false }),
  DepartmentController.getInformation
);
DepartmentRouter.put(
  "/",
  Passport.authenticate("jwt", { session: false }),
  DepartmentController.update
);
DepartmentRouter.delete(
  "/:departmentID",
  Passport.authenticate("jwt", { session: false }),
  DepartmentController.remove
);

export default DepartmentRouter;
