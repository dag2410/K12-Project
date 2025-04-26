import { useEffect } from "react";
import config from "@/config";
import useUser from "@/hooks/useUser";
import { useLocation, useNavigate } from "react-router-dom";
import useLoading from "@/hooks/useLoading";
import Loading from "../Loading";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const user = useUser();
  const { isLoading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    if (localStorage.getItem("token") || user) {
      return;
    }

    if (!localStorage.getItem("token") || !user) {
      const path = encodeURIComponent(location.pathname);
      navigate(`${config.routes.login}?continue=${path}`);
    }
  }, [isLoading, user, location.pathname, navigate]);

  if (isLoading) return <Loading />;

  if (!localStorage.getItem("token") || !user) return null;

  return children;
}

export default ProtectedRoute;
