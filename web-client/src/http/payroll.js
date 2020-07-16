import ApiService from "../common/apiService";

const PayrollHTTP = {
  process: async (payrollForm) => ApiService.post("/payroll", payrollForm),
  generatePaySlips: async (startPeriodDate, endPeriodDate) =>
    ApiService.get(`/payroll/${startPeriodDate}/${endPeriodDate}`),
};

export default PayrollHTTP;
