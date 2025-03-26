import React from "react";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <FooterLinks />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
