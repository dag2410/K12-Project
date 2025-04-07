import { BrowserRouter as Router } from "react-router-dom";

import ScrollTop from "./components/ScrollTop";
import AppRoutes from "@/components/AppRoutes";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/UserContext";
import { LoadingProvider } from "./context/LoadingContext";

function App() {
  return (
    <LoadingProvider>
      <UserProvider>
        <Router>
          <ScrollTop />
          <AppRoutes />
          <ToastContainer />
        </Router>
      </UserProvider>
    </LoadingProvider>
  );
}

export default App;
