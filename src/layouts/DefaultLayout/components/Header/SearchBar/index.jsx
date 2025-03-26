import { Link } from "react-router-dom";
import styles from "../Header.module.scss";

const SearchBar = () => {
  return (
    <div className={`${styles.searchBar} d-flex align-items-center shadow-sm`}>
      <div className={"d-flex flex-grow-1"}>
        <div className={`${styles.option} border-end`}>
          <Link>
            <b>Địa điểm bất kỳ</b>
          </Link>
        </div>
        <div className={`${styles.option} border-end`}>
          <Link>
            <b>tuần bất kỳ</b>
          </Link>
        </div>
        <div className={`${styles.option} text-secondary`}>
          <Link>
            <span>Thêm khách</span>
          </Link>
        </div>
      </div>

      <button className={`${styles.btnSearch} btn btn-danger rounded-circle  p-2 `}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchBar;
