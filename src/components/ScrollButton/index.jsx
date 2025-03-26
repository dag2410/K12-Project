import styles from "./ScrollButton.module.scss";

const ScrollButton = ({ direction, onClick }) => {
  return (
    <button className={`${styles.button} ${styles[direction]}`} onClick={onClick}>
      {direction === "left" ? "⬅️" : "➡️"}
    </button>
  );
};

export default ScrollButton;
