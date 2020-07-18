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
const model_1 = __importDefault(require("./model"));
const DepartmentService = {
    save: (departmentForm) => __awaiter(void 0, void 0, void 0, function* () {
        let message = "";
        const error = {};
        yield model_1.default.save(departmentForm);
        message = "Department was successfully saved.";
        return {
            error,
            message,
        };
    }),
    fetch: () => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        const departments = yield model_1.default.fetch();
        return {
            departments,
            error,
        };
    }),
    getInformation: (departmentID) => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        const gotDepartmentInformation = yield model_1.default.getInformation(departmentID);
        return {
            information: gotDepartmentInformation,
            error,
        };
    }),
    update: (departmentID, departmentForm) => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        let message = "";
        yield model_1.default.update(departmentID, departmentForm);
        message = "Department was successfully updated.";
        return {
            error,
            message,
        };
    }),
    remove: (departmentID) => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        let message = "Department was successfully removed.";
        yield model_1.default.remove(departmentID);
        return {
            error,
            message,
        };
    }),
};
exports.default = DepartmentService;
//# sourceMappingURL=service.js.map