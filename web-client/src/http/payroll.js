import ApiService from "../common/apiService";

const PayrollHTTP = {
  process: async (payrollForm) => ApiService.post("/payroll", payrollForm),
};

export default PayrollHTTP;
