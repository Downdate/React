import ProductList from "../ProductList";

function Books() {
  return (
    <div>
      <ProductList
        title="Books"
        filterType="books"
        description="Here are the Books."
      />
    </div>
  );
}

export default Books;
