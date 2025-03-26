import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [products, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://api01.f8team.dev/api/products/${params.slug}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.slug]);

  return (
    <div>
      <h1>{products.title}</h1>
      <img src={products.thumbnail}></img>
    </div>
  );
}

export default ProductDetail;
