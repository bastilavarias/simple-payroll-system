import Express from "express";
import EmployeeController from "./controller";

const EmployeeRouter = Express.Router();

EmployeeRouter.post("/", EmployeeController.save);
EmployeeRouter.get("/", EmployeeController.fetch);
EmployeeRouter.get("/:employeeID", EmployeeController.getInformation);
EmployeeRouter.get("/custom/employee-id", EmployeeController.generateCustomID);

export default EmployeeRouter;
