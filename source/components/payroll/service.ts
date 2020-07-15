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
};

export default PayrollService;
