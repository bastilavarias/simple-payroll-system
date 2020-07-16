import { PAYROLL_GENERATE_PAYSLIPS, PROCESS_PAYROLL } from "../types/payroll";
import PayrollHTTP from "../../http/payroll";

const PayrollStoreModule = {
  actions: {
    [PROCESS_PAYROLL]: async (context, payrollForm) => {
      try {
        const result = await PayrollHTTP.process(payrollForm);
        const { message } = result.data;
        return message;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },

    [PAYROLL_GENERATE_PAYSLIPS]: async (
      context,
      { startPeriodDate, endPeriodDate }
    ) => {
      try {
        const result = await PayrollHTTP.generatePayslips(
          startPeriodDate,
          endPeriodDate
        );
        const { payslips } = result.data;
        return payslips;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },
  },
};

export default PayrollStoreModule;
