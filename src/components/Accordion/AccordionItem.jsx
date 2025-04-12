import React from "react";
import styles from "./Accordion.module.scss";
export function AccordionItem({
  header,
  children,
  isOpen,
  onToggle,
  onKeyDown,
  className = "",
}) {
  return (
    <div className={`${styles.accordionItem} ${className}`}>
      <button
        className={`${styles.accordionHeader}`}
        onClick={onToggle}
        onKeyDown={onKeyDown}
        style={{ color: isOpen ? "red" : "", fontWeight: isOpen ? "bold" : "" }}
      >
        {header}
      </button>
      {isOpen && <div className={`${styles.accordionBody}`}>{children}</div>}
    </div>
  );
}
