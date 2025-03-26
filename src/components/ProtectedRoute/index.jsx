import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import config from "@/config";
import authService from "@/service/authService";

function ProtectedRoute({ children }) {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const data = await authService.getCurrentUser();
        setCurrentUser(data.user);
      } catch (error) {
        localStorage.removeItem("token");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (!localStorage.getItem("token") || !currentUser) {
    const path = encodeURIComponent(location.pathname);
    return <Navigate to={`${config.routes.login}?continue=${path}`} />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProtectedRoute;
