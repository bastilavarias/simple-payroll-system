import Express from "express";
import DesignationController from "./controller";

const DesignationRouter = Express.Router();

DesignationRouter.post("/", DesignationController.save);
DesignationRouter.get("/", DesignationController.fetch);
DesignationRouter.get("/:designationID", DesignationController.getInformation);
DesignationRouter.put("/", DesignationController.update);
DesignationRouter.delete("/:designationID", DesignationController.remove);

export default DesignationRouter;
