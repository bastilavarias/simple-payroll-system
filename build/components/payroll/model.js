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
const database_1 = __importDefault(require("../../database"));
const PayrollModel = {
    process: (accountID, payrollForm) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `insert into payroll (employee_id, account_id, start_period_date, end_period_date, basic_salary,
                                            other_pay,
                                            sss_loan_deduction, pag_ibig_loan_deduction, other_loan_deduction,
                                            absent_deduction, sss_deduction, pag_ibig_deduction, philhealth_deduction,
                                            tax_deduction, basic_salary_without_absent, total_salary, total_deduction,
                                            net_pay)
                       values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18);`;
        const { employeeID, periodDate, customDeduction, defaultDeduction, salaryDetails, summary, } = payrollForm;
        const parameters = [
            employeeID,
            accountID,
            periodDate.start,
            periodDate.end,
            salaryDetails.basicSalary,
            salaryDetails.otherPay,
            customDeduction.sssLoan,
            customDeduction.pagIbigLoan,
            customDeduction.otherLoan,
            customDeduction.absent,
            defaultDeduction.sss,
            defaultDeduction.pagIbig,
            defaultDeduction.philhealth,
            defaultDeduction.tax,
            summary.basicSalaryWithoutAbsent,
            summary.totalSalary,
            summary.totalDeduction,
            summary.netPay,
        ];
        yield database_1.default.execute(query, parameters);
    }),
    generatePayslips: (startPeriodDate, endPeriodDate) => __awaiter(void 0, void 0, void 0, function* () {
        const query = `select json_agg(reports)
                       from (select p.id,
                                    (
                                        select row_to_json(employee)
                                        from (select e.id,
                                                     e.custom_id                                       "customID",
                                                     (select row_to_json(department)
                                                      from (select id, name, description
                                                            from department
                                                            where id = e.department_id) department)    department,
                                                     (select row_to_json(designation)
                                                      from (select id, name, description, daily_salary "dailySalary"
                                                            from designation
                                                            where id = e.designation_id) designation)  designation,
                                                     (select row_to_json(profile)
                                                      from (select id,
                                                                   first_name     "firstName",
                                                                   middle_name    "middleName",
                                                                   last_name      "lastName",
                                                                   extension_name "extensionName"
                                                            from employee_profile
                                                            where id = e.employee_profile_id) profile) profile
                                              from employee e
                                              where e.id = p.employee_id
                                                and e.is_deleted = false
                                              order by e.id asc
                                             ) employee
                                    )                                                      employee,
                                    (select row_to_json(period)
                                     from (
                                              select p.start_period_date "start", p.end_period_date "end"
                                          ) period)                                        period,
                                    (select row_to_json(salaryDetails)
                                     from (
                                              select p.basic_salary "basicSalary", p.other_pay "otherPay"
                                          ) salaryDetails)                                 "salaryDetails",
                                    (select row_to_json(customDeduction)
                                     from (
                                              select p.sss_loan_deduction      "sssLoan",
                                                     p.pag_ibig_loan_deduction "pagIbigLoan",
                                                     p.other_loan_deduction    "otherLoan",
                                                     p.absent_deduction        "absent"
                                          ) customDeduction)                               "customDeduction",
                                    (select row_to_json(defaultDeduction)
                                     from (
                                              select p.sss_deduction        sss,
                                                     p.pag_ibig_deduction   "pagIbig",
                                                     p.philhealth_deduction philhealth,
                                                     p.tax_deduction        tax
                                          ) defaultDeduction)                              "defaultDeduction",
                                    (select row_to_json(summary)
                                     from (select p.basic_salary_without_absent "basicSalaryWithoutAbsent",
                                                  p.total_salary                "totalSalary",
                                                  p.total_deduction             "totalDeduction",
                                                  p.net_pay                     "netPay"
                                          ) summary)                                       summary,
                                    (select row_to_json(administraitorDetails)
                                     from (select name, p.created_at "processedDate"
                                           from account
                                           where id = p.account_id) administraitorDetails) "administraitorDetails"
                             from payroll p
                             where p.start_period_date = $1
                               and p.end_period_date = $2) reports;`;
        const parameters = [startPeriodDate, endPeriodDate];
        const { rows } = yield database_1.default.execute(query, parameters);
        return rows[0].json_agg ? rows[0].json_agg : [];
    }),
};
exports.default = PayrollModel;
//# sourceMappingURL=model.js.map