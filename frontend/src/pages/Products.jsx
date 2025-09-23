import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';   // ✅ Favorites Context
import { Link } from 'react-router-dom';
import products, { categories } from '../data/Products';
import Container from '../components/Layout/Container';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  // ✅ Filter products by category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // ✅ Check if a product is in favorites
  const isFav = (id) => favorites.some((item) => item.id === id);

  // ✅ Toggle favorite status
  const toggleFavorite = (product) => {
    isFav(product.id) ? removeFavorite(product.id) : addFavorite(product);
  };

  return (
    <Container className="py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Our Products</h1>

      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3 text-gray-700">Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative"
            >
              {/* ❤️ Favorite Button */}
              <button
                onClick={() => toggleFavorite(product)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white shadow hover:bg-gray-100"
                aria-label="Add to Favorites"
              >
                {isFav(product.id) ? (
                  <FaHeart className="text-red-500 w-5 h-5" />
                ) : (
                  <FaRegHeart className="text-gray-500 w-5 h-5" />
                )}
              </button>

              {/* Product Image */}
              <Link to={`/product/${product.id}`} className="block">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  )}
                  <div className="absolute top-2 left-2 bg-orange-600 text-white text-xs px-2 py-1 rounded">
                    {product.category}
                  </div>
                </div>
              </Link>

              {/* Product Details */}
              <div className="p-4">
                <Link to={`/product/${product.id}`} className="block mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 hover:text-orange-600 transition">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex justify-between items-center mb-3">
                  <p className="text-gray-700 font-medium">
                    £{product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating}
                    </span>
                  </div>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded transition duration-300 flex items-center justify-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-gray-600">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Products;
