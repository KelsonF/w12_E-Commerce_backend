import { PropsWithChildren, useEffect, useState } from "react";
import {
  AuthContext,
  AuthData,
  LoginParams,
  RegisterParams,
} from "../contexts/authContext";
import { axiosService } from "@/domain/services/AxiosService";
import { LocalStorage } from "@/domain/services/LocalStorageService";

function AuthProvider({ children }: PropsWithChildren) {
  const [authData, setAuthData] = useState<AuthData>({
    user: undefined,
    accessToken: undefined,
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuth = LocalStorage.instance.read<AuthData>("auth");

    if (storedAuth && storedAuth.accessToken) {
      setAuthData(storedAuth);
      setIsAuthenticated(true);

      axiosService.getInstance().defaults.headers.common[
        "Authorization"
      ] = `Bearer ${storedAuth.accessToken}`;
    }
  }, []);

  const register = async (params: RegisterParams) => {
    try {
      const response = await axiosService
        .getInstance()
        .post("/auth/register", params);
      const { accessToken, user } = response.data;

      setAuthData({ accessToken, user });
      setIsAuthenticated(true);

      LocalStorage.instance.save("auth", { accessToken, user });

      axiosService.getInstance().defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const login = async (params: LoginParams) => {
    try {
      const response = await axiosService
        .getInstance()
        .post("/login", { email: params.email, password: params.password });
      const { accessToken, user } = response.data;

      setAuthData({ accessToken, user });
      setIsAuthenticated(true);

      LocalStorage.instance.save("auth", { accessToken, user });

      axiosService.getInstance().defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    setAuthData({ user: undefined, accessToken: undefined });
    setIsAuthenticated(false);

    LocalStorage.instance.delete("auth");

    delete axiosService.getInstance().defaults.headers.common["Authorization"];
  };

  const values = {
    authData,
    isAuthenticated,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export { AuthProvider };
