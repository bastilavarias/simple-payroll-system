import { DepartmentInformation } from "../department/type";
import { DesignationInformation } from "../designation/type";

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

export interface EmployeeInformation {
  id: number;
  customID: number;
  department: DepartmentInformation;
  designation: DesignationInformation;
  profile: {
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
  };
  benefit: {
    gsisNumber: string;
    pagIbigIDNumber: string;
    philhealthNumber: string;
    sssNumber: string;
    tinNumber: string;
    agencyEmployeeNumber: string;
  };
}
