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
const EmployeeController = {
    generateCustomID: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield service_1.default.generateCustomID();
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
    save: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const employeeForm = {
                departmentID: request.body.departmentID
                    ? parseInt(request.body.departmentID)
                    : 0,
                designationID: request.body.designationID
                    ? parseInt(request.body.designationID)
                    : 0,
                profile: {
                    firstName: request.body.profile.firstName
                        ? request.body.profile.firstName
                        : "",
                    middleName: request.body.profile.middleName
                        ? request.body.profile.middleName
                        : "",
                    lastName: request.body.profile.lastName
                        ? request.body.profile.lastName
                        : "",
                    extensionName: request.body.profile.extensionName
                        ? request.body.profile.extensionName
                        : "",
                    birthDate: request.body.profile.birthDate
                        ? request.body.profile.birthDate
                        : "",
                    birthPlace: request.body.profile.birthPlace
                        ? request.body.profile.birthPlace
                        : "",
                    sex: request.body.profile.sex ? request.body.profile.sex : "",
                    citizenship: request.body.profile.citizenship
                        ? request.body.profile.citizenship
                        : "",
                    civilStatus: request.body.profile.civilStatus
                        ? request.body.profile.civilStatus
                        : "",
                    address: request.body.profile.address
                        ? request.body.profile.address
                        : "",
                    contactNumber: request.body.profile.contactNumber
                        ? request.body.profile.contactNumber
                        : "",
                    height: request.body.profile.height
                        ? request.body.profile.height
                        : "",
                    weight: request.body.profile.weight
                        ? request.body.profile.weight
                        : "",
                    bloodType: request.body.profile.bloodType
                        ? request.body.profile.bloodType
                        : "",
                },
                benefit: {
                    gsisNumber: request.body.benefit.gsisNumber
                        ? request.body.benefit.gsisNumber
                        : "",
                    pagIbigIDNumber: request.body.benefit.pagIbigIDNumber
                        ? request.body.benefit.pagIbigIDNumber
                        : "",
                    philhealthNumber: request.body.benefit.philhealthNumber
                        ? request.body.benefit.philhealthNumber
                        : "",
                    sssNumber: request.body.benefit.sssNumber
                        ? request.body.benefit.sssNumber
                        : "",
                    tinNumber: request.body.benefit.tinNumber
                        ? request.body.benefit.tinNumber
                        : "",
                    agencyEmployeeNumber: request.body.benefit.agencyEmployeeNumber
                        ? request.body.benefit.agencyEmployeeNumber
                        : "",
                },
            };
            const result = yield service_1.default.save(employeeForm);
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
            const employeeID = request.params.employeeID
                ? parseInt(request.params.employeeID)
                : 0;
            const result = yield service_1.default.getInformation(employeeID);
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
            const employeeID = request.body.employeeID
                ? parseInt(request.body.employeeID)
                : 0;
            const employeeProfileID = request.body.employeeProfileID
                ? parseInt(request.body.employeeProfileID)
                : 0;
            const employeeBenefitID = request.body.employeeBenefitID
                ? parseInt(request.body.employeeBenefitID)
                : 0;
            const employeeForm = {
                departmentID: request.body.departmentID
                    ? parseInt(request.body.departmentID)
                    : 0,
                designationID: request.body.designationID
                    ? parseInt(request.body.designationID)
                    : 0,
                profile: {
                    firstName: request.body.profile.firstName
                        ? request.body.profile.firstName
                        : "",
                    middleName: request.body.profile.middleName
                        ? request.body.profile.middleName
                        : "",
                    lastName: request.body.profile.lastName
                        ? request.body.profile.lastName
                        : "",
                    extensionName: request.body.profile.extensionName
                        ? request.body.profile.extensionName
                        : "",
                    birthDate: request.body.profile.birthDate
                        ? request.body.profile.birthDate
                        : "",
                    birthPlace: request.body.profile.birthPlace
                        ? request.body.profile.birthPlace
                        : "",
                    sex: request.body.profile.sex ? request.body.profile.sex : "",
                    citizenship: request.body.profile.citizenship
                        ? request.body.profile.citizenship
                        : "",
                    civilStatus: request.body.profile.civilStatus
                        ? request.body.profile.civilStatus
                        : "",
                    address: request.body.profile.address
                        ? request.body.profile.address
                        : "",
                    contactNumber: request.body.profile.contactNumber
                        ? request.body.profile.contactNumber
                        : "",
                    height: request.body.profile.height
                        ? request.body.profile.height
                        : "",
                    weight: request.body.profile.weight
                        ? request.body.profile.weight
                        : "",
                    bloodType: request.body.profile.bloodType
                        ? request.body.profile.bloodType
                        : "",
                },
                benefit: {
                    gsisNumber: request.body.benefit.gsisNumber
                        ? request.body.benefit.gsisNumber
                        : "",
                    pagIbigIDNumber: request.body.benefit.pagIbigIDNumber
                        ? request.body.benefit.pagIbigIDNumber
                        : "",
                    philhealthNumber: request.body.benefit.philhealthNumber
                        ? request.body.benefit.philhealthNumber
                        : "",
                    sssNumber: request.body.benefit.sssNumber
                        ? request.body.benefit.sssNumber
                        : "",
                    tinNumber: request.body.benefit.tinNumber
                        ? request.body.benefit.tinNumber
                        : "",
                    agencyEmployeeNumber: request.body.benefit.agencyEmployeeNumber
                        ? request.body.benefit.agencyEmployeeNumber
                        : "",
                },
            };
            const result = yield service_1.default.update(employeeID, employeeProfileID, employeeBenefitID, employeeForm);
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
            const employeeID = request.params.employeeID
                ? parseInt(request.params.employeeID)
                : 0;
            const result = yield service_1.default.remove(employeeID);
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
exports.default = EmployeeController;
//# sourceMappingURL=controller.js.map