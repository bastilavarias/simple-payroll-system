import Express from "express";
import PayrollController from "./controller";

const PayrollRouter = Express.Router();

PayrollRouter.post("/", PayrollController.process);

export default PayrollRouter;
