import React from "react";
import styles from "../CategoryBar.module.scss";

const FilterButton = () => {
  return (
    <button className={`${styles.filterButton} d-flex align-items-center`}>
      <i className="fa fa-sliders"></i> Bộ lọc
    </button>
  );
};

export default FilterButton;
