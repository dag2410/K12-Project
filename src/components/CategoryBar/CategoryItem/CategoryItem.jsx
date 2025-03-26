import React from "react";
import styles from "../CategoryBar.module.scss";

const CategoryItem = ({ icon, label }) => {
  return (
    <div className={`${styles.categoryItem} d-flex flex-column align-items-center justify-content-center cursor-pointer `}>
      <i className={`fa ${icon}`}></i>
      <span>{label}</span>
    </div>
  );
};

export default CategoryItem;
