import ProductList from "../ProductList";

function AllProducts() {
  return (
    <div>
      <ProductList
        title="All Products"
        filterType="All"
        description="These are the full list of our products."
      />
    </div>
  );
}

export default AllProducts;
