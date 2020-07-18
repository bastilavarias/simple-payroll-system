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
const DesignationService = {
    save: (designationForm) => __awaiter(void 0, void 0, void 0, function* () {
        let message = "";
        const error = {};
        yield model_1.default.save(designationForm);
        message = "Designation was successfully saved.";
        return {
            error,
            message,
        };
    }),
    fetch: () => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        const designations = yield model_1.default.fetch();
        return {
            designations,
            error,
        };
    }),
    getInformation: (designationID) => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        const gotDesignationInformation = yield model_1.default.getInformation(designationID);
        return {
            information: gotDesignationInformation,
            error,
        };
    }),
    update: (designationID, designationForm) => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        let message = "";
        yield model_1.default.update(designationID, designationForm);
        message = "Designation was successfully updated.";
        return {
            error,
            message,
        };
    }),
    remove: (designationID) => __awaiter(void 0, void 0, void 0, function* () {
        const error = {};
        let message = "Designation was successfully removed.";
        yield model_1.default.remove(designationID);
        return {
            error,
            message,
        };
    }),
};
exports.default = DesignationService;
//# sourceMappingURL=service.js.map