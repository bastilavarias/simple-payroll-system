import Express from "express";
import EmployeeController from "./controller";
import Passport from "passport";

const EmployeeRouter = Express.Router();

EmployeeRouter.post(
  "/",
  Passport.authenticate("jwt", { session: false }),
  EmployeeController.save
);
EmployeeRouter.get(
  "/",
  Passport.authenticate("jwt", { session: false }),
  EmployeeController.fetch
);
EmployeeRouter.get(
  "/:employeeID",
  Passport.authenticate("jwt", { session: false }),
  EmployeeController.getInformation
);
EmployeeRouter.get(
  "/custom/employee-id",
  Passport.authenticate("jwt", { session: false }),
  EmployeeController.generateCustomID
);
EmployeeRouter.put(
  "/",
  Passport.authenticate("jwt", { session: false }),
  EmployeeController.update
);
EmployeeRouter.delete(
  "/:employeeID",
  Passport.authenticate("jwt", { session: false }),
  EmployeeController.remove
);

export default EmployeeRouter;
