import Express from "express";
import PayrollController from "./controller";

const PayrollRouter = Express.Router();

PayrollRouter.post("/", PayrollController.process);
PayrollRouter.get(
  "/:startPeriodDate/:endPeriodDate",
  PayrollController.generatePaySlips
);

export default PayrollRouter;
