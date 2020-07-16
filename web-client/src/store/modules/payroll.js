import { PAYROLL_GENERATE_PAY_SLIPS, PROCESS_PAYROLL } from "../types/payroll";
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

    [PAYROLL_GENERATE_PAY_SLIPS]: async (
      context,
      { startPeriodDate, endPeriodDate }
    ) => {
      try {
        const result = await PayrollHTTP.generatePaySlips(
          startPeriodDate,
          endPeriodDate
        );
        const { paySlips } = result.data;
        return paySlips;
      } catch (error) {
        throw new Error(`[RWV] ApiService ${error}`);
      }
    },
  },
};

export default PayrollStoreModule;
