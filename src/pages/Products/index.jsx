import config from "@/config";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "@/components/Loading";
import { getAll } from "@/features/product/productAsync";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();

  const { products, isLoading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  if (isLoading) return <Loading />;
  if (error) return <p>Không thể tải thể dữ liệu</p>;

  return (
    !isLoading && (
      <div>
        <h1>Products page</h1>
        <ul>
          {products.items?.map((product) => (
            <li key={product.id}>
              <Link to={`${config.routes.products}/${product.slug}`}>
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maiores
          consectetur fugiat nulla nostrum impedit at amet cumque alias aliquam
          eveniet possimus eligendi dolorem rem, distinctio vitae explicabo
          ipsa! Id, alias quidem dolorum veritatis iusto provident eum.
          Veritatis laboriosam hic sit cupiditate animi adipisci officia facilis
          porro similique, veniam cum ipsa modi, sunt deserunt blanditiis?
          Expedita, in. <Link to="/">Expedita, in.</Link>Ipsam eius nobis omnis
          exercitationem itaque deserunt. Commodi modi perferendis dignissimos
          debitis, obcaecati ex eum nam, assumenda odit nemo incidunt, fuga
          laborum? Officiis perferendis quod sunt autem reiciendis, dolorum
          officia beatae, reprehenderit sit deserunt blanditiis libero cumque
          adipisci rerum quam error animi delectus!
        </p>
      </div>
    )
  );
}
export default Products;
