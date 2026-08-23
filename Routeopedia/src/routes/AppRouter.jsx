import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import ProductList from "../Pages/Product/ProductList";
import NotFound from "../Pages/NotFound";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/products" element={<ProductList />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
