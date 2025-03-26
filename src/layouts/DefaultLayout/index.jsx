import Header from "@/layouts/DefaultLayout/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function DefaultLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
