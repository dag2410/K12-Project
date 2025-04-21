import CategoryItem from "../CategoryItem/CategoryItem";

import styles from "../CategoryBar.module.scss";

const categories = [
  { icon: "fa-house", label: "Phòng" },
  { icon: "fa-star", label: "Biểu tượng" },
  { icon: "fa-umbrella-beach", label: "Nông thôn" },
  { icon: "fa-tree", label: "Khung cảnh tuyệt vời" },
  { icon: "fa-water", label: "Ven hồ" },
  { icon: "fa-tractor", label: "Thật ấn tượng!" },
  { icon: "fa-bed", label: "Hanok" },
  { icon: "fa-mountain", label: "Không gian sáng tạo" },
  { icon: "fa-landmark", label: "Nhà nhỏ" },
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
