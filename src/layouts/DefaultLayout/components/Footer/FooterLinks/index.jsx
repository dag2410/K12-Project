import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Footer.module.scss";

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.column}>
        <h3>Hỗ trợ</h3>
        <ul>
          <li>
            <NavLink to="/">Trung tâm trợ giúp</NavLink>
          </li>
          <li>
            <NavLink to="/">AirCover</NavLink>
          </li>
          <li>
            <NavLink to="/">Chống phân biệt đối xử</NavLink>
          </li>
          <li>
            <NavLink to="/">Hỗ trợ người khuyết tật</NavLink>
          </li>
          <li>
            <NavLink to="/">Các tùy chọn hủy</NavLink>
          </li>
          <li>
            <NavLink to="/">Báo cáo lo ngại của khu dân cư</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>Đón tiếp khách</h3>
        <ul>
          <li>
            <NavLink to="/">Cho thuê nhà trên Airbnb</NavLink>
          </li>
          <li>
            <NavLink to="/">AirCover cho Chủ nhà</NavLink>
          </li>
          <li>
            <NavLink to="/">Tài nguyên về đón tiếp khách</NavLink>
          </li>
          <li>
            <NavLink to="/">Diễn đàn cộng đồng</NavLink>
          </li>
          <li>
            <NavLink to="/">Đón tiếp khách có trách nhiệm</NavLink>
          </li>
          <li>
            <NavLink to="/">Khóa học miễn phí về công việc Đón tiếp khách</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.column}>
        <h3>Airbnb</h3>
        <ul>
          <li>
            <NavLink to="/">Trang tin tức</NavLink>
          </li>
          <li>
            <NavLink to="/">Tính năng mới</NavLink>
          </li>
          <li>
            <NavLink to="/">Cơ hội nghề nghiệp</NavLink>
          </li>
          <li>
            <NavLink to="/">Nhà đầu tư</NavLink>
          </li>
          <li>
            <NavLink to="/">Chỗ ở khẩn cấp Airbnb.org</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;
