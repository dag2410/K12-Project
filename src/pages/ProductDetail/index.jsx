import Loading from "@/components/Loading";
import { getOne } from "@/features/product/productAsync";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const dispatch = useDispatch();
  const params = useParams();

  const { currentProduct, isLoading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getOne(params.slug));
  }, [dispatch]);

  if (isLoading) return <Loading />;
  if (error) return <p>Không thể tạo dữ liệu </p>;
  if (!currentProduct) return <p>Không tìm thấy sản phẩm </p>;

  return (
    <div>
      <h1>{currentProduct.title}</h1>
      <img src={currentProduct.thumbnail} alt={currentProduct.title}></img>
    </div>
  );
}

export default ProductDetail;
