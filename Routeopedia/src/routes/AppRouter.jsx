import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import ProductList from "../Pages/Product/ProductList";
import NotFound from "../Pages/NotFound";
import ProductDetail from "../Pages/Product/ProductDetail";
import ProductLayout from "../../../ReduxoPedia/src/Layouts/ProductLayout";
import AllProducts from "../Pages/Product/ProductCategory/AllProducts";
import Electronics from "../Pages/Product/ProductCategory/Electronics";
import Books from "../Pages/Product/ProductCategory/Books";
import Clothing from "../Pages/Product/ProductCategory/Clothing";
import Login from "../Pages/Auth/Login";
import AdminPortal from "../Pages/Admin/AdminPortal";
import CustomerPortal from "../Pages/Customer/CustomerPortal";
import ProtectedRoute from "./ProtectedRoute";
import RoleBasedRoute from "./RoleBasedRoute";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={["admin"]}>
              <AdminPortal />
            </RoleBasedRoute>
          </ProtectedRoute>
        }
      />
      <Route
        path="/customer"
        element={
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={["admin", "customer"]}>
              <CustomerPortal />
            </RoleBasedRoute>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<ProductLayout />}>
        <Route index element={<AllProducts />} />
        <Route path="electronics" element={<Electronics />} />
        <Route path="books" element={<Books />} />
        <Route path="clothing" element={<Clothing />} />
      </Route>
      <Route path="/products/item/:id" element={<ProductDetail />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
