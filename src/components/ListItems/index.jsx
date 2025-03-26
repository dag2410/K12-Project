import ScrollButton from "../ScrollButton";
import styles from "./ListItems.module.scss";

const ListItems = ({ data }) => {
  return (
    <div className={styles.item}>
      <img src={data.image} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.location}</p>
      <p>{data.price} / đêm</p>
    </div>
  );
};
export default ListItems;
