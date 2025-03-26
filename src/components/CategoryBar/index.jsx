import React from "react";
import "./CategoryBar.module.scss";
import CategoryList from "./CategoryList/CategoryList";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import FilterButton from "./FilterButton/FilterButton";
import ScrollButton from "./ScrollButton/ScrollButton";
import styles from "./CategoryBar.module.scss";
const CategoryBar = () => {
  return (
    <>
      <div className={`${styles.categoryContainer} d-flex align-items-center gap-3`}>
        <ScrollButton direction="left" />
        <CategoryList />
        <ScrollButton direction="right" />
        <FilterButton />
        <ToggleSwitch />
      </div>
    </>
  );
};

export default CategoryBar;
