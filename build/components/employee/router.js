"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const passport_1 = __importDefault(require("passport"));
const EmployeeRouter = express_1.default.Router();
EmployeeRouter.post("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.save);
EmployeeRouter.get("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.fetch);
EmployeeRouter.get("/:employeeID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.getInformation);
EmployeeRouter.get("/custom/employee-id", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.generateCustomID);
EmployeeRouter.put("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.update);
EmployeeRouter.delete("/:employeeID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.remove);
exports.default = EmployeeRouter;
//# sourceMappingURL=router.js.map