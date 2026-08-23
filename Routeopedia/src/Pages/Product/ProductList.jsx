import { allProducts } from "../../Data/Products";
import { Link } from "react-router-dom";

function productList() {
  return (
    <div className="py-2">
      <h2>header here</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam omnis
        dolorem adipisci.
      </p>
      <br />

      <div className="mt3">
        {allProducts.map((product) => {
          return (
            <div key={product.id} className="border rounded p-3 mb-3 ">
              <h4>{product.name}</h4>
              <p>price: ${product.price}</p>
              <p>category: {product.category}</p>
              <Link className="btn btn-outline-success" to={"/"}>
                {" "}
                View Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default productList;
