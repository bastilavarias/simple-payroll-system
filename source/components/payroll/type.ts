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

export interface PayrollPayslipInformation {
  employee: {
    id: number;
    customID: string;
    profile: {
      firstName: string;
      middleName: string;
      lastName: string;
      extensionName: string;
    };
    department: {
      name: string;
      description: string;
    };
    designation: {
      name: string;
      description: string;
      dailySalary: number;
    };
  };
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
    administrator: {
      name: string;
    };
    dateProcessed: Date;
    basicSalaryWithoutAbsent: number;
    totalSalary: number;
    totalDeduction: number;
    netPay: number;
  };
}
