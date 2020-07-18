"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const passport_1 = __importDefault(require("passport"));
const DepartmentRouter = express_1.default.Router();
DepartmentRouter.post("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.save);
DepartmentRouter.get("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.fetch);
DepartmentRouter.get("/:departmentID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.getInformation);
DepartmentRouter.put("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.update);
DepartmentRouter.delete("/:departmentID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.remove);
exports.default = DepartmentRouter;
//# sourceMappingURL=router.js.map