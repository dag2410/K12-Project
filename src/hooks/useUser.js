import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { useSelector } from "react-redux";

const useUser = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  return currentUser;
};
export default useUser;
