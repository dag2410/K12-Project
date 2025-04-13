import useLoading from "@/hooks/useLoading";
import authService from "@/service/authService";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { isLoading, startLoading, stopLoading } = useLoading();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await authService.getCurrentUser();
        setUser(data?.data);
      } catch (error) {
        console.log(error);
      } finally {
        stopLoading();
      }
    };
    fetchUser();
  }, []);
  const value = {
    user,
    isLoading,
    setUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
