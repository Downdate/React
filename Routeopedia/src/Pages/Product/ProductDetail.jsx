import { allProducts } from "../../Data/Products";
import { Link, useParams } from "react-router-dom";

function productDetail() {
  const { id } = useParams();
  const product = allProducts.find((product) => {
    return product.id == id;
  });
  if (product == null) {
    return (
      <div style={{alignItems: "center"}}>
        <i
          className="bi bi-exclamation-circle-fill"
          style={{ color: "red", width: "79vw" }}
        ></i>
        <h1>Product not found</h1>
        <Link to={"/products"} className="btn btn-outline-danger my-3">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to={"/products"} className="btn btn-outline-danger my-3">
        Go back
      </Link>
      <h1>{product.name}</h1>
      <p> price: {product.price}</p>
      <p> Category: {product.category}</p>
    </div>
  );
}

export default productDetail;
