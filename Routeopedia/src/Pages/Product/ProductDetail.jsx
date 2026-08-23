import { allProducts } from "../../Data/Products";
import { Link, useParams } from "react-router-dom";

function productDetail() {
  const { id } = useParams();
  const product = allProducts.find((product) => {
    return product.id == id;
  });

  return (
    <div>
      <h1>{product.name}</h1>
      <p> price: {product.price}</p>
      <p> Category: {product.category}</p>
      <Link to={"/products"} className="btn btn-danger">
        Go back
      </Link>
    </div>
  );
}

export default productDetail;
