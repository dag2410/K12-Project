import logo from "@/assets/images/logo.png";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBar from "./SearchBar/index";
import UserNavigation from "./UserNavigation/index";
import LogoutButton from "@/auth/LogoutButton";

const Header = () => {
  return (
    <header className={`${styles.headerMain} bg-white shadow-sm p-4 ps-5 pe-5 `}>
      <div className={` d-flex justify-content-between align-items-center`}>
        <NavLink to="/">
          <img src={logo} alt="Logo" width="100" />
        </NavLink>
        <SearchBar />
        <UserNavigation />
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
