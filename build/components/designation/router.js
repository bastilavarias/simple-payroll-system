"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const passport_1 = __importDefault(require("passport"));
const DesignationRouter = express_1.default.Router();
DesignationRouter.post("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.save);
DesignationRouter.get("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.fetch);
DesignationRouter.get("/:designationID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.getInformation);
DesignationRouter.put("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.update);
DesignationRouter.delete("/:designationID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.remove);
exports.default = DesignationRouter;
//# sourceMappingURL=router.js.map