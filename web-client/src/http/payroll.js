import ApiService from "../common/apiService";

const PayrollHTTP = {
  process: async (payrollForm) => ApiService.post("/payroll", payrollForm),
  generatePayslips: async (startPeriodDate, endPeriodDate) =>
    ApiService.get(`/payroll/${startPeriodDate}/${endPeriodDate}`),
};

export default PayrollHTTP;
