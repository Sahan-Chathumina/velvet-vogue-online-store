import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// ===== User Site =====
import UserLayout from "../components/Layout/UserLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductPage from "../pages/ProductPage";
import Cart from "../pages/Cart";
import Favorites from "../pages/Favorites";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Profile from "../pages/Profile";

// ===== Admin =====
import Dashboard from "../components/Admin/Dashboard";
import AdminLayout from "../components/Admin/AdminLayout";
import ProductList from "../components/Admin/Products/ProductList";
import AddProduct from "../components/Admin/Products/AddProduct";
import EditProduct from "../components/Admin/Products/EditProduct";
import UserList from "../components/Admin/Users/UserList";
import OrderList from "../components/Admin/Orders/OrderList";

// ===== Helpers =====
const RequireAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  return user?.isAdmin ? children : <Navigate to="/login" />;
};

export default function AppRoutes() {
  return (
    <Routes>
      {/* ===== Public / User Routes ===== */}
      <Route element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="login" element={<Login />} /> {/* ✅ */}
        <Route path="signup" element={<Signup />} /> {/* ✅ */}
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* ===== Admin Protected Routes ===== */}
      <Route
        path="admin"
        element={
          <RequireAdmin>
            <AdminLayout />
          </RequireAdmin>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="products/edit/:id" element={<EditProduct />} />
        <Route path="users" element={<UserList />} />
        <Route path="orders" element={<OrderList />} />
      </Route>
    </Routes>
  );
}
