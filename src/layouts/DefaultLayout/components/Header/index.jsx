import logo from "@/assets/images/logo.png";
import LoginButton from "@/auth/LoginButton";
import LogoutButton from "@/auth/LogoutButton";
import RegisterButton from "@/auth/RegisterButton";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBar from "./SearchBar/index";
import UserNavigation from "./UserNavigation/index";

const Header = () => {
  const token = localStorage.getItem("token");
  const [isLogged, setIsLogged] = useState(true);
  useEffect(() => {
    if (token) {
      setIsLogged(false);
    }
  }, [token]);

  return (
    <header className={`${styles.headerMain} bg-white shadow-sm p-4 ps-5 pe-5`}>
      <div className="d-flex justify-content-between align-items-center">
        <NavLink to="/">
          <img src={logo} alt="Logo" width="100" />
        </NavLink>
        <SearchBar />

        {!isLogged ? (
          <div className="d-flex align-items-center gap-3">
            <UserNavigation />
            <LogoutButton />
          </div>
        ) : (
          <div className="d-flex gap-3">
            <LoginButton />
            <RegisterButton />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
