import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "../components/Layout/UserLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductPage from "../pages/ProductPage";
import Cart from "../pages/Cart";
import Favorites from "../pages/Favorites";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
