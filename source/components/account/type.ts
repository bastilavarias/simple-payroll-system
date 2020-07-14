export interface AccountForm {
  name: string;
  username: string;
  password: string;
}

export interface AccountInformation {
  id: number;
  name: string;
  username: string;
  hashedPassword: string;
}
