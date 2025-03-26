import CategoryItem from "../CategoryItem/CategoryItem";

import styles from "../CategoryBar.module.scss";

const categories = [
  { icon: "fa-house", label: "Nhà nhỏ" },
  { icon: "fa-star", label: "Biểu tượng" },
  { icon: "fa-umbrella-beach", label: "Hướng biển" },
  { icon: "fa-tree", label: "Công viên quốc gia" },
  { icon: "fa-water", label: "Lướt sóng" },
  { icon: "fa-tractor", label: "Nông thôn" },
  { icon: "fa-bed", label: "Phòng" },
  { icon: "fa-mountain", label: "Khung cảnh tuyệt vời" },
  { icon: "fa-landmark", label: "Hanok" },
];

const CategoryList = () => {
  return (
    <div>
      <div className={`${styles.categoryList} d-flex`}>
        {categories.map((item) => (
          <CategoryItem key={item.label} icon={item.icon} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
