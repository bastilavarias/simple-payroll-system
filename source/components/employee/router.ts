import Express from "express";
import EmployeeController from "./controller";

const EmployeeRouter = Express.Router();

EmployeeRouter.get("/custom/employee-id", EmployeeController.generateCustomID);
EmployeeRouter.post("/", EmployeeController.save);
EmployeeRouter.get("/", EmployeeController.fetch);

export default EmployeeRouter;
