import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "@/components/AppRoutes";
import ScrollTop from "./components/ScrollTop";
import UserProvider from "./components/UserProvider";

import { getCurrentUser } from "./features/auth/authAsync";
import { LoadingProvider } from "./context/LoadingContext";
import useUser from "./hooks/useUser";
import { logout } from "./features/auth/authSlice";
import { persistor } from "./store";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await dispatch(getCurrentUser().unwrap());
      } catch (error) {
        dispatch(logout());
        persistor.purge();
      }
    };
    fetchUser();
  }, [dispatch]);

  return (
    <LoadingProvider>
      <Router>
        <ScrollTop />
        <UserProvider />
        <AppRoutes />
        <ToastContainer />
      </Router>
    </LoadingProvider>
  );
}

export default App;
