import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ===== User Site =====
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

// ===== Admin =====
import AdminLayout from "./components/Admin/AdminLayout";

// ===== Helpers =====
const RequireAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  return user?.isAdmin ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ===== Public / User Routes ===== */}
        <Route element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* ===== Admin Protected Route ===== */}
        <Route
          path="admin"
          element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
