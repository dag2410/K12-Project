import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "@/components/AppRoutes";
import ScrollTop from "./components/ScrollTop";
import UserProvider from "./components/UserProvider";
import { LoadingProvider } from "./context/LoadingContext";
import { getCurrentUser } from "./features/auth/authAsync";

function App() {
  const dispatch = useDispatch();
  dispatch(getCurrentUser());
  dispatch(getCurrentUser());
  dispatch(getCurrentUser());
  dispatch(getCurrentUser());
  dispatch(getCurrentUser());

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
