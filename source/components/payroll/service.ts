import { PayrollForm } from "./type";
import PayrollModel from "./model";

const PayrollService = {
  process: async (accountID: number, payrollForm: PayrollForm) => {
    let message = "";
    const error = {};
    await PayrollModel.process(accountID, payrollForm);
    message = "Payroll was successfully processed.";
    return {
      message,
      error,
    };
  },

  generatePayslips: async (startPeriodDate: Date, endPeriodDate: Date) => {
    const error = {};
    const payslips = await PayrollModel.generatePayslips(
      startPeriodDate,
      endPeriodDate
    );
    return {
      error,
      payslips,
    };
  },
};

export default PayrollService;
