import styles from "./Accordion.module.scss";
const AccordionItem = ({
  header,
  children,
  isOpen,
  onToggle,
  onKeyDown,
  className = " ",
  buttonRef,
}) => {
  return (
    <div className={`${styles.accordionItem} ${className}`}>
      <button
        ref={buttonRef}
        className={`${styles.accordionHeader}`}
        onClick={onToggle}
        onKeyDown={onKeyDown}
        style={{ color: isOpen ? "red" : "", fontWeight: isOpen ? "bold" : "" }}
      >
        <div className="d-flex justify-content-between align-item-center">
          {header}
          <span>
            {isOpen ? (
              <i className="fa-solid fa-arrow-up"></i>
            ) : (
              <i className="fa-solid fa-arrow-down"></i>
            )}
          </span>
        </div>
      </button>
      {isOpen && <div className={`${styles.accordionBody}`}>{children}</div>}
    </div>
  );
};

export default AccordionItem;
