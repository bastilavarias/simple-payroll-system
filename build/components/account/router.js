"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const passport_1 = __importDefault(require("passport"));
const AccountRouter = express_1.default.Router();
AccountRouter.post("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.save);
AccountRouter.get("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.fetch);
AccountRouter.get("/:accountID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.getInformation);
AccountRouter.put("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.update);
AccountRouter.delete("/:accountID", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.remove);
exports.default = AccountRouter;
//# sourceMappingURL=router.js.map