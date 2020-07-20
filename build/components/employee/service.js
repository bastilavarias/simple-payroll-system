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
const model_1 = __importDefault(require("../helper/model"));
const model_2 = __importDefault(require("./model"));
const EmployeeService = {
    generateCustomID: () => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        const gotAccountTableRowsCount = yield model_1.default.countTableRows(`employee`);
        const formattedCustomID = EmployeeService.formatCustomID(gotAccountTableRowsCount + 1);
        const generatedCustomID = formattedCustomID
            ? formattedCustomID
            : "ACCOUNT-00000";
        return {
            customID: generatedCustomID,
            error,
        };
    }),
    save: (employeeForm) => __awaiter(void 0, void 0, void 0, function* () {
        let message = "";
        const error = {};
        const savedEmployeeProfileID = yield model_2.default.saveProfile(employeeForm.profile);
        const savedEmployeeBenefitID = yield model_2.default.saveBenefit(employeeForm.benefit);
        const { customID } = yield EmployeeService.generateCustomID();
        yield model_2.default.save(employeeForm, customID, savedEmployeeProfileID, savedEmployeeBenefitID);
        message = "Employee was successfully saved.";
        return {
            message,
            error,
        };
    }),
    fetch: () => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        const employees = yield model_2.default.fetch();
        return {
            error,
            employees,
        };
    }),
    getInformation: (employeeID) => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        const information = yield model_2.default.getInformation(employeeID);
        return {
            error,
            information,
        };
    }),
    update: (employeeID, employeeProfileID, employeeBenefitID, employeeForm) => __awaiter(void 0, void 0, void 0, function* () {
        let message = "";
        const error = {};
        yield model_2.default.updateProfile(employeeProfileID, employeeForm.profile);
        yield model_2.default.updateBenefit(employeeBenefitID, employeeForm.benefit);
        yield model_2.default.update(employeeID, employeeForm);
        message = "Employee was successfully updated.";
        return {
            message,
            error,
        };
    }),
    remove: (employeeID) => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        let message = "";
        yield model_2.default.remove(employeeID);
        message = "Employee was successfully removed.";
        return {
            error,
            message,
        };
    }),
    formatCustomID: (tableRowsCount) => {
        let lastPart = "";
        if (tableRowsCount >= 0 && tableRowsCount <= 9)
            lastPart = `0000${tableRowsCount}`;
        if (tableRowsCount >= 10 && tableRowsCount <= 99)
            lastPart = `000${tableRowsCount}`;
        if (tableRowsCount >= 100 && tableRowsCount <= 999)
            lastPart = `00${tableRowsCount}`;
        if (tableRowsCount >= 1000 && tableRowsCount <= 9999)
            lastPart = `0${tableRowsCount}`;
        if (tableRowsCount >= 10000)
            lastPart = `${tableRowsCount}`;
        return `ACCOUNT-${lastPart}`;
    },
};
exports.default = EmployeeService;
//# sourceMappingURL=service.js.map