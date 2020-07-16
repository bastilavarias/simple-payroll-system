import { PayrollForm } from "./type";
import PayrollModel from "./model";

const PayrollService = {
  process: async (payrollForm: PayrollForm) => {
    let message = "";
    const error = {};
    await PayrollModel.process(payrollForm);
    message = "Payroll was successfully processed.";
    return {
      message,
      error,
    };
  },

  generatePaySlips: async (startPeriodDate: Date, endPeriodDate: Date) => {
    const error = {};
    const reports = await PayrollModel.generatePaySlips(
      startPeriodDate,
      endPeriodDate
    );
    return {
      error,
      reports,
    };
  },
};

export default PayrollService;
