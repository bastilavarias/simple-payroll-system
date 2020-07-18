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
const PayrollController = {
    process: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // @ts-ignore
            const accountID = request.user.account.id
                ? // @ts-ignore
                    parseInt(request.user.account.id)
                : 0;
            const payrollForm = {
                employeeID: request.body.employeeID
                    ? parseInt(request.body.employeeID)
                    : 0,
                periodDate: {
                    start: request.body.periodDate.start
                        ? request.body.periodDate.start
                        : "",
                    end: request.body.periodDate.end ? request.body.periodDate.end : "",
                },
                salaryDetails: {
                    basicSalary: request.body.salaryDetails.basicSalary
                        ? parseFloat(request.body.salaryDetails.basicSalary)
                        : 0.0,
                    otherPay: request.body.salaryDetails.otherPay
                        ? parseFloat(request.body.salaryDetails.otherPay)
                        : 0.0,
                },
                customDeduction: {
                    sssLoan: request.body.customDeduction.sssLoan
                        ? parseFloat(request.body.customDeduction.sssLoan)
                        : 0.0,
                    pagIbigLoan: request.body.customDeduction.pagIbigLoan
                        ? parseFloat(request.body.customDeduction.pagIbigLoan)
                        : 0.0,
                    otherLoan: request.body.customDeduction.otherLoan
                        ? parseFloat(request.body.customDeduction.otherLoan)
                        : 0.0,
                    absent: request.body.customDeduction.absent
                        ? parseFloat(request.body.customDeduction.absent)
                        : 0.0,
                },
                defaultDeduction: {
                    sss: request.body.defaultDeduction.sss
                        ? parseFloat(request.body.defaultDeduction.sss)
                        : 0.0,
                    pagIbig: request.body.defaultDeduction.pagIbig
                        ? parseFloat(request.body.defaultDeduction.pagIbig)
                        : 0.0,
                    philhealth: request.body.defaultDeduction.philhealth
                        ? parseFloat(request.body.defaultDeduction.philhealth)
                        : 0.0,
                    tax: request.body.defaultDeduction.tax
                        ? parseFloat(request.body.defaultDeduction.tax)
                        : 0.0,
                },
                summary: {
                    basicSalaryWithoutAbsent: request.body.summary
                        .basicSalaryWithoutAbsent
                        ? parseFloat(request.body.summary.basicSalaryWithoutAbsent)
                        : 0.0,
                    totalSalary: request.body.summary.totalSalary
                        ? parseFloat(request.body.summary.totalSalary)
                        : 0.0,
                    totalDeduction: request.body.summary.totalDeduction
                        ? parseFloat(request.body.summary.totalDeduction)
                        : 0.0,
                    netPay: request.body.summary.netPay
                        ? parseFloat(request.body.summary.netPay)
                        : 0.0,
                },
            };
            const result = yield service_1.default.process(accountID, payrollForm);
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
    generatePayslips: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const startPeriodDate = request.params.startPeriodDate
                ? request.params.startPeriodDate
                : "";
            const endPeriodDate = request.params.endPeriodDate
                ? request.params.endPeriodDate
                : "";
            const result = yield service_1.default.generatePayslips(
            // @ts-ignore
            startPeriodDate, endPeriodDate);
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
exports.default = PayrollController;
//# sourceMappingURL=controller.js.map