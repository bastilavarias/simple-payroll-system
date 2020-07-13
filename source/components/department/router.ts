import Express from "express";
import DepartmentController from "./controller";

const DepartmentRouter = Express.Router();

DepartmentRouter.post("/", DepartmentController.save);
DepartmentRouter.get("/", DepartmentController.fetch);
DepartmentRouter.get("/:departmentID", DepartmentController.getInformation);
DepartmentRouter.put("/", DepartmentController.update);
DepartmentRouter.delete("/:departmentID", DepartmentController.remove);

export default DepartmentRouter;
