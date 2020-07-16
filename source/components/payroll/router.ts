import Express from "express";
import PayrollController from "./controller";
import Passport from "passport";

const PayrollRouter = Express.Router();

PayrollRouter.post(
  "/",
  Passport.authenticate("jwt", { session: false }),
  PayrollController.process
);
PayrollRouter.get(
  "/:startPeriodDate/:endPeriodDate",
  Passport.authenticate("jwt", { session: false }),
  PayrollController.generatePayslips
);

export default PayrollRouter;
