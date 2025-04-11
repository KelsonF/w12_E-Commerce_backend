import { User } from "@/domain/models/User";
import { createContext } from "react";

type AuthData = {
  user?: User;
  accessToken?: string;
};

type RegisterParams = {
  name: string;
  email: string;
  password: string;
};

type LoginParams = {
  email: string;
  password: string;
};

type AuthContextData = {
  authData: AuthData;
  isAuthenticated: boolean;
  login: (params: LoginParams) => Promise<void>;
  register: (params: RegisterParams) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export type { AuthData, RegisterParams, LoginParams, AuthContextData };
