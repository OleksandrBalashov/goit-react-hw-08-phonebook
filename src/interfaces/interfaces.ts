export interface RegisterType {
  name: string;
  email: string;
  password: string;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface AuthTypes {
  token: string;
  user: LoginTypes;
}

export interface ContactType {
  name: string;
  number: string;
  id?: string;
}
