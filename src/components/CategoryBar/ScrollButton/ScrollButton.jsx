import React from "react";
import styles from "../CategoryBar.module.scss";
import PropTypes from "prop-types";
const ScrollButton = ({ direction }) => {
  return (
    <button className={`${styles.scrollButton} ${direction}`}>
      <i className={`fa fa-chevron-${direction === "left" ? "left" : "right"}`}></i>
    </button>
  );
};

export default ScrollButton;
