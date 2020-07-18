"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./components/account/router"));
const router_2 = __importDefault(require("./components/department/router"));
const router_3 = __importDefault(require("./components/designation/router"));
const router_4 = __importDefault(require("./components/employee/router"));
const router_5 = __importDefault(require("./components/payroll/router"));
const router_6 = __importDefault(require("./components/authentication/router"));
const Api = express_1.default();
Api.use("/account", router_1.default);
Api.use("/department", router_2.default);
Api.use("/designation", router_3.default);
Api.use("/employee", router_4.default);
Api.use("/payroll", router_5.default);
Api.use("/authentication", router_6.default);
exports.default = Api;
//# sourceMappingURL=api.js.map