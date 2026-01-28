import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* ✅ BrowserRouter FIRST */}
      <AuthProvider>
        <CartProvider>
          <FavoritesProvider>
            <AppRoutes />
          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
