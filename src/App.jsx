import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "@/components/AppRoutes";
import React from "react";
import { ToastContainer } from "react-toastify";
import ScrollTop from "./components/ScrollTop";
import { LoadingProvider } from "./context/LoadingContext";
import { UserProvider } from "./context/UserContext";

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
