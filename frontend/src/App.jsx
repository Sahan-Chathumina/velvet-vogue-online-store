import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Layout
import UserLayout from "./components/Layout/UserLayout";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";   // ✅ New: single product details
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";       // ✅ New: favorites page

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* All user-facing pages use the same layout */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductPage />} />  {/* ✅ Dynamic product page */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />      {/* ✅ Favorites list */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
