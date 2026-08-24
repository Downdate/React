import { allProducts } from "../../Data/Products";
import { Link } from "react-router-dom";

function ProductList({ title, filterType, description }) {
  const getFilteredProducts = () => {
    if (filterType === "All") {
      return allProducts;
    }

    return allProducts.filter((p) => p.category === filterType);
  };

  return (
    <div className="py-2">
      <h2>{title}</h2>
      <p>{description}</p>
      <br />

      <div className="mt-3">
        {getFilteredProducts().map((product) => {
          return (
            <div key={product.id} className="border rounded p-3 mb-3">
              <h4>{product.name}</h4>
              <p>price: ${product.price}</p>
              <p>category: {product.category}</p>

              <Link
                className="btn btn-outline-success"
                to={`/products/item/${product.id}`}
              >
                View Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
