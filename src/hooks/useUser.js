import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const useUser = () => {
  const userContext = useContext(UserContext);
  return userContext.user;
};
export default useUser;
