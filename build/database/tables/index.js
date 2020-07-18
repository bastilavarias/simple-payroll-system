"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const account_1 = __importDefault(require("./modules/account"));
const department_1 = __importDefault(require("./modules/department"));
const designation_1 = __importDefault(require("./modules/designation"));
const employeeProfile_1 = __importDefault(require("./modules/employeeProfile"));
const employeeBenefit_1 = __importDefault(require("./modules/employeeBenefit"));
const employee_1 = __importDefault(require("./modules/employee"));
const payroll_1 = __importDefault(require("./modules/payroll"));
const executeTables = () => __awaiter(void 0, void 0, void 0, function* () {
    yield index_1.default.execute(account_1.default);
    yield index_1.default.execute(department_1.default);
    yield index_1.default.execute(designation_1.default);
    yield index_1.default.execute(employeeProfile_1.default);
    yield index_1.default.execute(employeeProfile_1.default);
    yield index_1.default.execute(employeeBenefit_1.default);
    yield index_1.default.execute(employee_1.default);
    yield index_1.default.execute(employee_1.default);
    yield index_1.default.execute(payroll_1.default);
});
executeTables().then(() => console.log("Database tables created."));
//# sourceMappingURL=index.js.map