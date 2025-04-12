import React, { useEffect, useRef, useState } from "react";
import styles from "./Tabs.module.scss";

const defaultFn = () => {};

function Tabs({
  defaultIndex = 0,
  children,
  onChange = defaultFn,
  className = "",
}) {
  
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const prevIndex = useRef(defaultIndex);
  const tabs = React.Children.toArray(children);
  console.log(tabs);
  useEffect(() => {
    if (prevIndex.current !== currentIndex) {
      onChange(currentIndex);
    }
    prevIndex.current = currentIndex;
  }, [currentIndex, onChange]);

  return (
    <div className={`${styles.tabsContainer} ${className}`}>
      <div className={`${styles.tabsList}`}>
        {tabs.map((tab, index) => {
          const active = currentIndex === index;
          return (
            <button
              key={index}
              className={`${styles.tabButton} ${active ? "active" : ""} `}
              style={{
                color: active ? "red" : "currentColor",
                fontWeight: active ? "bold" : "",
              }}
              onClick={() => {
                setCurrentIndex(index);
              }}
            >
              {tab.props.title}
            </button>
          );
        })}
      </div>
      <div className={`${styles.tabsContent}`}>{tabs[currentIndex]}</div>
    </div>
  );
}

export default Tabs;
