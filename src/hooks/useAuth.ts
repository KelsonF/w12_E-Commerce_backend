import { AuthContext } from "@/application/contexts/authContext";
import { useContext } from "react";

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth };
