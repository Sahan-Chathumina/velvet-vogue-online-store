import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { products } from "../data/Products";
import { useCart } from "../context/CartContext";   // ✅ to add to cart
import { useFavorites } from "../context/FavoritesContext";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();
  const product = products.find((item) => String(item.id) === id);

  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [question, setQuestion] = useState("");

  useEffect(() => {
    if (product?.colors?.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (!product) {
    return <p className="text-center text-red-500">Product not found.</p>;
  }

  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart({ ...product, selectedColor, quantity });
    alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    addToCart({ ...product, selectedColor, quantity });
    navigate("/cart");
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 relative grid md:grid-cols-2 gap-8">
        {/* === Left: Product Image === */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[28rem] object-cover rounded-lg mb-6"
          />
        </div>

        {/* === Right: Product Details === */}
        <div>
          {/* Title & Favorite */}
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <button
              onClick={() => toggleFavorite(product)}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <FaHeart
                size={24}
                className={isFavorite ? "text-red-500" : "text-gray-400"}
              />
            </button>
          </div>

          {/* Price */}
          <p className="text-2xl text-orange-600 font-semibold mb-4">
            £{product.price.toFixed(2)}
          </p>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={`${
                  i < Math.round(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                } w-5 h-5`}
              />
            ))}
            <span className="ml-2 text-gray-600">{product.rating} / 5</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Color Selection */}
          {product.colors?.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Select Color:</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border transition ${
                      selectedColor === color
                        ? "bg-orange-600 text-white border-orange-600"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Select Quantity:</h3>
            <div className="flex items-center border w-32 rounded">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-2 text-lg hover:bg-gray-100"
              >
                –
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-2 text-lg hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* === Ratings & Reviews Section === */}
      <div className="max-w-5xl mx-auto mt-12 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Ratings & Reviews</h2>
        <p className="text-gray-600 mb-4">
          ★★★★☆ (4.5/5 based on 128 reviews)
        </p>
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
          Write a Review
        </button>
      </div>

      {/* === Ask a Question === */}
      <div className="max-w-5xl mx-auto mt-12 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Ask a Question</h2>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          className="w-full border rounded-lg p-3 mb-4 h-28 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button
          onClick={() => {
            if (question.trim()) {
              alert("Your question has been submitted!");
              setQuestion("");
            }
          }}
          className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
