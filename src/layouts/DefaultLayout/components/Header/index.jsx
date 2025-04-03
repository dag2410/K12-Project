import logo from "@/assets/images/logo.png";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBar from "./SearchBar/index";
import UserNavigation from "./UserNavigation/index";
import LogoutButton from "@/auth/LogoutButton";
import { UserContext } from "@/context/UserContext";
import { useState } from "react";
import useUser from "@/hooks/useUser";

const Header = () => {
  const user = useUser();
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
      {/* {user && <p>Hi {user.firstName}</p>} */}
    </header>
  );
};

export default Header;
