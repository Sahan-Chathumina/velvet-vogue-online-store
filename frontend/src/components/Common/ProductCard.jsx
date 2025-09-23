import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useFavorites } from "../../context/FavoritesContext"; // ✅
import { FaHeart, FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites(); // ✅
  const navigate = useNavigate();

  const isFav = favorites.some((item) => item.id === product.id); // ✅

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition duration-300 cursor-pointer"
    >
      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(product);
        }}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white shadow hover:bg-gray-100"
        aria-label="Add to Favorites"
      >
        {isFav ? (
          <FaHeart className="text-red-500 w-5 h-5" />
        ) : (
          <FaRegHeart className="text-gray-500 w-5 h-5" />
        )}
      </button>

      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-600 mt-1">£{product.price.toFixed(2)}</p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="mt-3 w-full bg-[#ea3a0e] text-white px-4 py-2 rounded hover:bg-[#c9300c] transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
