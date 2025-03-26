import { Outlet } from "react-router-dom";
import Footer from "../DefaultLayout/components/Footer";

const NoHeaderLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
export default NoHeaderLayout;
