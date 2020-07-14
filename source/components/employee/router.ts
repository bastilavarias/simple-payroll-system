import Express from "express";
import EmployeeController from "./controller";

const EmployeeRouter = Express.Router();

EmployeeRouter.get("/custom/employee-id", EmployeeController.generateCustomID);

export default EmployeeRouter;
