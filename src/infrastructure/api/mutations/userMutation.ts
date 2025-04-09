import { axiosService } from "@/domain/services/AxiosService";
import { useMutation } from "@tanstack/react-query";

type RegisterUserData = {
  name: string;
  email: string;
  password: string;
};

function useRegisterUser() {
  return useMutation<void, Error, RegisterUserData>({
    mutationKey: ["registerUser"],
    mutationFn: async (userData: RegisterUserData) => {
      await axiosService
        .getInstance()
        .post("/users", {
          name: userData.name,
          email: userData.email,
          password: userData.password,
        });
    },
  });
}

export { useRegisterUser };
