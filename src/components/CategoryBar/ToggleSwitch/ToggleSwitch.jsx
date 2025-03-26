import React from "react";
import styles from "../CategoryBar.module.scss";

const ToggleSwitch = () => {
  return (
    <label className={`${styles.toggleSwitch} d-flex align-items-center cursor-pointer`}>
      <span>Hiển thị tổng trước thuế</span>
      <input type="checkbox" />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ToggleSwitch;
