export interface EmployeeProfileForm {
  firstName: string;
  middleName: string;
  lastName: string;
  extensionName: string;
  birthDate: Date;
  birthPlace: string;
  sex: string;
  citizenship: string;
  civilStatus: string;
  address: string;
  contactNumber: string;
  height: string;
  weight: string;
  bloodType: string;
}

export interface EmployeeBenefitForm {
  gsisNumber: string;
  pagIbigIDNumber: string;
  philhealthNumber: string;
  sssNumber: string;
  tinNumber: string;
  agencyEmployeeNumber: string;
}

export interface EmployeeForm {
  departmentID: number;
  designationID: number;
  profile: EmployeeProfileForm;
  benefit: EmployeeBenefitForm;
}
