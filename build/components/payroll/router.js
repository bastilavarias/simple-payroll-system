"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const passport_1 = __importDefault(require("passport"));
const PayrollRouter = express_1.default.Router();
PayrollRouter.post("/", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.process);
PayrollRouter.get("/:startPeriodDate/:endPeriodDate", passport_1.default.authenticate("jwt", { session: false }), controller_1.default.generatePayslips);
exports.default = PayrollRouter;
//# sourceMappingURL=router.js.map