import logo from "@/assets/images/logo.png";
import LoginButton from "@/auth/LoginButton";
import LogoutButton from "@/auth/LogoutButton";
import RegisterButton from "@/auth/RegisterButton";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import SearchBar from "./SearchBar/index";
import UserNavigation from "./UserNavigation/index";
// import { Tabs, Tab } from "@/components/Tabs";

const Header = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const token = localStorage.getItem("token");
  const [isLogged, setIsLogged] = useState(true);
  useEffect(() => {
    if (token) {
      setIsLogged(false);
    }
  }, [token]);
  const ul = React.createElement(
    "ul",
    { className: "course-item" },
    React.createElement(
      "li",
      {
        className: "course-item",
      },
      React.createElement("a", { href: "/courses/1" }, "HTML,Css")
    ),
    React.createElement(
      "li",
      {
        className: "course-item",
      },
      React.createElement("a", { href: "/courses/2" }, "Js")
    ),
    React.createElement(
      "li",
      {
        className: "course-item",
      },
      React.createElement("a", { href: "/courses/3" }, "Nodejs")
    )
  );
  // console.log(ul);

  // const courses = [
  //   { id: 1, name: "Html,css" },
  //   { id: 2, name: "Html,css" },
  //   { id: 3, name: "Html,css" },
  // ];

  // courses.map((c) => {
  //   React.createElement("li", { className: "course-item" }, React.createElement("a", { href: `/courses/${c.id}` }, `${c.name}`));
  // });
  // console.log(courses);

  // const cou = createElement(
  //   "ul",
  //   { className: "courses" },
  //   courses.map((c) => {
  //     React.createElement("li", { key: c.id, className: "course-item" }, React.createElement("a", { href: `/courses/${c.id}` }, `${c.name}`));
  //   })
  // );
  return (
    <header className={`${styles.headerMain} bg-white shadow-sm p-4 ps-5 pe-5`}>
      <div className="d-flex justify-content-between align-items-center">
        <NavLink to="/">
          <img src={logo} alt="Logo" width="100" />
        </NavLink>
        <SearchBar />

        {isLogged ? (
          <div className="d-flex gap-3">
            <LoginButton />
            <RegisterButton />
          </div>
        ) : (
          <div className="d-flex align-items-center gap-3">
            <UserNavigation />
            <LogoutButton />
          </div>
        )}
      </div>
      {currentUser && <p>hi {currentUser?.lastName}</p>}
    </header>
  );
};

export default Header;
