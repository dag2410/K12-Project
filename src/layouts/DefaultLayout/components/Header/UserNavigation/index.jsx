import React from "react";
import styles from "../Header.module.scss";
import { Link } from "react-router-dom";
const UserNavigation = () => {
  return (
    <div>
      <div className={`${styles.navbar} d-flex align-items-center`}>
        <Link className={styles.hostBtn}> Cho thuê chỗ ở qua Airbnb</Link>
        <button className={`${styles.btnLanguage}`}>
          <i className="fa-solid fa-globe"></i>
        </button>
        <button className={`${styles.btnUser} d-flex align-items-center border rounded-pill px-3 py-2 shadow-sm p-5 gap-2`}>
          <i className="fa-solid fa-bars me-2"></i>

          <div
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: "#717171",
            }}
          >
            <i className="fa-solid fa-user text-white"></i>
          </div>
        </button>
      </div>
    </div>
  );
};

export default UserNavigation;
