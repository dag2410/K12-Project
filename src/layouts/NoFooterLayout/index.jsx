import { Outlet } from "react-router-dom";
import Header from "../DefaultLayout/components/Header";

const NoFooterLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default NoFooterLayout;
