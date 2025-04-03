import { BrowserRouter as Router } from "react-router-dom";

import ScrollTop from "./components/ScrollTop";
import AppRoutes from "@/components/AppRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <ScrollTop />
        <AppRoutes />
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
