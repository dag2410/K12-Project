import React from "react";
import styles from "../Footer.module.scss";

const FooterBottom = () => {
  return (
    <div className={styles.footerBottom}>
      <div className="flex items-center space-x-4">
        <span>Tiếng Việt (VN)</span>
        <span>₫ VND</span>
        <div className={`${styles.socialIcons} d-flex`}>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
