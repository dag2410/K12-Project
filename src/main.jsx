import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LoadingProvider } from "./context/LoadingContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <LoadingProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </LoadingProvider>
);
