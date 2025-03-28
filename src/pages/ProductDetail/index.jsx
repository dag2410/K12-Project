import productService from "@/service/productService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await productService.getOne(params.slug);
      setProduct(res);
    };
    fetchData();
  }, [params.slug]);

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail}></img>
    </div>
  );
}

export default ProductDetail;
