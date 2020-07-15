import Database from "../../database";
import { PayrollForm } from "./type";

const PayrollModel = {
  process: async (payrollForm: PayrollForm) => {
    const query = `insert into payroll (employee_id, start_period_date, end_period_date, basic_salary, other_pay,
                                            sss_loan_deduction, pag_ibig_loan_deduction, other_loan_deduction,
                                            total_days_absent, sss_deduction, pag_ibig_deduction, philhealth_deduction,
                                            tax_deduction, total_salary, total_deduction, net_pay)
                       values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);`;
    const {
      employeeID,
      periodDate,
      customDeduction,
      defaultDeduction,
      salaryDetails,
      summary,
    } = payrollForm;
    const parameters = [
      employeeID,
      periodDate.start,
      periodDate.end,
      salaryDetails.basicSalary,
      salaryDetails.otherPay,
      customDeduction.sssLoan,
      customDeduction.pagIbigLoan,
      customDeduction.otherLoan,
      customDeduction.totalDaysAbsent,
      defaultDeduction.sss,
      defaultDeduction.pagIbig,
      defaultDeduction.philhealth,
      defaultDeduction.tax,
      summary.totalSalary,
      summary.totalDeduction,
      summary.netPay,
    ];
    await Database.execute(query, parameters);
  },
};

export default PayrollModel;
