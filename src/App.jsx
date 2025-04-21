import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppRoutes from "@/components/AppRoutes";
import ScrollTop from "./components/ScrollTop";
import UserProvider from "./components/UserProvider";
import { LoadingProvider } from "./context/LoadingContext";

function App() {
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
