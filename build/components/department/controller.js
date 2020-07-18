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
const service_1 = __importDefault(require("./service"));
const DepartmentController = {
    save: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const departmentForm = {
                name: request.body.name ? request.body.name : "",
                description: request.body.description ? request.body.description : "",
            };
            const result = yield service_1.default.save(departmentForm);
            if (Object.keys(result.error).length > 0)
                throw result.error;
            delete result.error;
            response.status(200).json(result);
        }
        catch (error) {
            console.log(error);
            response.status(400).json(error);
        }
    }),
    fetch: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield service_1.default.fetch();
            if (Object.keys(result.error).length > 0)
                throw result.error;
            delete result.error;
            response.status(200).json(result);
        }
        catch (error) {
            console.log(error);
            response.status(400).json(error);
        }
    }),
    getInformation: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const departmentID = request.params.departmentID
                ? parseInt(request.params.departmentID)
                : 0;
            const result = yield service_1.default.getInformation(departmentID);
            if (Object.keys(result.error).length > 0)
                throw result.error;
            delete result.error;
            response.status(200).json(result);
        }
        catch (error) {
            console.log(error);
            response.status(400).json(error);
        }
    }),
    update: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const departmentID = request.body.departmentID
                ? parseInt(request.body.departmentID)
                : 0;
            const departmentForm = {
                name: request.body.name ? request.body.name : "",
                description: request.body.description ? request.body.description : "",
            };
            const result = yield service_1.default.update(departmentID, departmentForm);
            if (Object.keys(result.error).length > 0)
                throw result.error;
            delete result.error;
            response.status(200).json(result);
        }
        catch (error) {
            console.log(error);
            response.status(400).json(error);
        }
    }),
    remove: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const departmentID = request.params.departmentID
                ? parseInt(request.params.departmentID)
                : 0;
            const result = yield service_1.default.remove(departmentID);
            if (Object.keys(result.error).length > 0)
                throw result.error;
            delete result.error;
            response.status(200).json(result);
        }
        catch (error) {
            console.log(error);
            response.status(400).json(error);
        }
    }),
};
exports.default = DepartmentController;
//# sourceMappingURL=controller.js.map