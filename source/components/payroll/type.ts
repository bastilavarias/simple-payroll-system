export interface PayrollForm {
  employeeID: number;
  periodDate: {
    start: Date;
    end: Date;
  };
  salaryDetails: {
    basicSalary: number;
    otherPay: number;
  };
  customDeduction: {
    sssLoan: number;
    pagIbigLoan: number;
    otherLoan: number;
    absent: number;
  };
  defaultDeduction: {
    sss: number;
    pagIbig: number;
    philhealth: number;
    tax: number;
  };
  summary: {
    basicSalaryWithoutAbsent: number;
    totalSalary: number;
    totalDeduction: number;
    netPay: number;
  };
}
