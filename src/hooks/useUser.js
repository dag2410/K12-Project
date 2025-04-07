import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const useUser = () => {
  const userContext = useContext(UserContext);
  return {
    user: userContext.user,
    setUser: userContext.setUser,
  };
};
export default useUser;
