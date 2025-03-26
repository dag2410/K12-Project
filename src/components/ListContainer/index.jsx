import ScrollButton from "../CategoryBar/ScrollButton/ScrollButton";
import ListItems from "../ListItems";
import styles from "./ListContainer.module.scss";

const ListContainer = () => {
  const items = [
    {
      id: 1,
      image: "https://picsum.photos/250/150?random=1",
      title: "Khách sạn Biển Xanh",
      location: "Nha Trang, Việt Nam",
      price: "1.500.000đ",
    },
    {
      id: 2,
      image: "https://picsum.photos/250/150?random=2",
      title: "Resort Cao Cấp",
      location: "Đà Nẵng, Việt Nam",
      price: "2.000.000đ",
    },
    {
      id: 3,
      image: "https://picsum.photos/250/150?random=3",
      title: "Villa Nghỉ Dưỡng",
      location: "Phú Quốc, Việt Nam",
      price: "3.500.000đ",
    },
    {
      id: 4,
      image: "https://picsum.photos/250/150?random=4",
      title: "Căn hộ Hạng Sang",
      location: "Hà Nội, Việt Nam",
      price: "1.200.000đ",
    },
    {
      id: 5,
      image: "https://picsum.photos/250/150?random=5",
      title: "Bungalow View Biển",
      location: "Vũng Tàu, Việt Nam",
      price: "1.800.000đ",
    },
    {
      id: 6,
      image: "https://picsum.photos/250/150?random=6",
      title: "Khách sạn Luxury",
      location: "Hội An, Việt Nam",
      price: "2.500.000đ",
    },
    {
      id: 7,
      image: "https://picsum.photos/250/150?random=7",
      title: "Nhà nghỉ Thoải Mái",
      location: "Đà Lạt, Việt Nam",
      price: "900.000đ",
    },
    {
      id: 8,
      image: "https://picsum.photos/250/150?random=8",
      title: "Homestay Nhà Vườn",
      location: "Huế, Việt Nam",
      price: "750.000đ",
    },
    {
      id: 9,
      image: "https://picsum.photos/250/150?random=9",
      title: "Resort Bãi Biển",
      location: "Quảng Ninh, Việt Nam",
      price: "4.000.000đ",
    },
    {
      id: 10,
      image: "https://picsum.photos/250/150?random=10",
      title: "Biệt thự nghỉ dưỡng",
      location: "Cần Thơ, Việt Nam",
      price: "3.200.000đ",
    },
    {
      id: 11,
      image: "https://picsum.photos/250/150?random=11",
      title: "Khách sạn The Light",
      location: "Hà Nội, Việt Nam",
      price: "2.700.000đ",
    },
    {
      id: 12,
      image: "https://picsum.photos/250/150?random=12",
      title: "Căn hộ chung cư cao cấp",
      location: "TP. Hồ Chí Minh, Việt Nam",
      price: "1.600.000đ",
    },
    {
      id: 13,
      image: "https://picsum.photos/250/150?random=13",
      title: "Bungalow Gỗ",
      location: "Vũng Tàu, Việt Nam",
      price: "1.300.000đ",
    },
    {
      id: 14,
      image: "https://picsum.photos/250/150?random=14",
      title: "Khách sạn Golden Lotus",
      location: "Hà Nội, Việt Nam",
      price: "2.200.000đ",
    },
    {
      id: 15,
      image: "https://picsum.photos/250/150?random=15",
      title: "Villa Biển",
      location: "Phú Quốc, Việt Nam",
      price: "5.500.000đ",
    },
    {
      id: 16,
      image: "https://picsum.photos/250/150?random=16",
      title: "Resort view rừng",
      location: "Lâm Đồng, Việt Nam",
      price: "2.800.000đ",
    },
    {
      id: 17,
      image: "https://picsum.photos/250/150?random=17",
      title: "Homestay Vintage",
      location: "Sa Pa, Việt Nam",
      price: "1.000.000đ",
    },
    {
      id: 18,
      image: "https://picsum.photos/250/150?random=18",
      title: "Khách sạn 5 Sao",
      location: "Hạ Long, Việt Nam",
      price: "6.000.000đ",
    },
    {
      id: 19,
      image: "https://picsum.photos/250/150?random=19",
      title: "Nhà nghỉ bình dân",
      location: "Bình Thuận, Việt Nam",
      price: "600.000đ",
    },
    {
      id: 20,
      image: "https://picsum.photos/250/150?random=20",
      title: "Resort Gia Đình",
      location: "Đồng Nai, Việt Nam",
      price: "3.700.000đ",
    },
    {
      id: 21,
      image: "https://picsum.photos/250/150?random=21",
      title: "Khách sạn Green Leaf",
      location: "Huế, Việt Nam",
      price: "1.800.000đ",
    },
    {
      id: 22,
      image: "https://picsum.photos/250/150?random=22",
      title: "Căn hộ cao cấp",
      location: "Đà Nẵng, Việt Nam",
      price: "2.500.000đ",
    },
    {
      id: 23,
      image: "https://picsum.photos/250/150?random=23",
      title: "Bungalow Garden",
      location: "Cà Mau, Việt Nam",
      price: "1.200.000đ",
    },
    {
      id: 24,
      image: "https://picsum.photos/250/150?random=24",
      title: "Villa Sea View",
      location: "Nha Trang, Việt Nam",
      price: "4.200.000đ",
    },
    {
      id: 25,
      image: "https://picsum.photos/250/150?random=25",
      title: "Khách sạn Royal",
      location: "TP. Hồ Chí Minh, Việt Nam",
      price: "2.600.000đ",
    },
    {
      id: 26,
      image: "https://picsum.photos/250/150?random=26",
      title: "Homestay Đà Lạt",
      location: "Đà Lạt, Việt Nam",
      price: "850.000đ",
    },
    {
      id: 27,
      image: "https://picsum.photos/250/150?random=27",
      title: "Resort Hoang Dã",
      location: "Buôn Ma Thuột, Việt Nam",
      price: "3.000.000đ",
    },
    {
      id: 28,
      image: "https://picsum.photos/250/150?random=28",
      title: "Căn hộ Studio",
      location: "Hà Nội, Việt Nam",
      price: "1.100.000đ",
    },
    {
      id: 29,
      image: "https://picsum.photos/250/150?random=29",
      title: "Khách sạn Sang Trọng",
      location: "Đà Nẵng, Việt Nam",
      price: "5.200.000đ",
    },
    {
      id: 30,
      image: "https://picsum.photos/250/150?random=30",
      title: "Bungalow Cổ Điển",
      location: "Vũng Tàu, Việt Nam",
      price: "1.400.000đ",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {items.map((item) => (
          <ListItems key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ListContainer;
