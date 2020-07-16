export interface LoginForm {
  username: string;
  password: string;
}

export interface Token {
  account: {
    id: number;
    username: string;
    name: string;
  };
}
