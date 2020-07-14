export interface EmployeeForm {
  departmentID: number;
  designationID: number;
  profile: EmployeeProfileForm;
}

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
