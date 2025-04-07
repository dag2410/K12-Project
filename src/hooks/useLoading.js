import { useContext } from "react";
import { LoadingContext } from "@/context/LoadingContext";

const useLoading = () => {
  const loadingContext = useContext(LoadingContext);
  return loadingContext;
};
export default useLoading;
