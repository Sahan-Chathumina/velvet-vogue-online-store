import React from "react";
import Container from "../components/Layout/Container";
import { useFavorites } from "../context/FavoritesContext"; // ✅ use context
import ProductCard from "../components/Common/ProductCard";
import { FaHeart } from "react-icons/fa";

const Favorites = () => {
  const { favorites } = useFavorites(); // ✅ list of favorited products

  return (
    <div className="pb-12">
      {/* Hero / Header */}
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 mb-12">
        <Container>
          <div className="flex flex-col items-center text-center">
            <FaHeart className="text-orange-600 text-5xl mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
              My Favorites
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Your curated list of must-have products. ❤️
            </p>
          </div>
        </Container>
      </div>

      {/* Favorites List */}
      <Container>
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              You don’t have any favorite items yet.
            </p>
            <p className="text-gray-500 mt-2">
              Browse products and tap the ♥ icon to add favorites.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Favorites;
