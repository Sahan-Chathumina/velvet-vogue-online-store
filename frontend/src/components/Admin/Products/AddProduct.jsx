import React, { useState } from "react";

export default function AddProduct({ onBack }) {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Product:", product); // 🔗 Replace with API call
    alert("Product added successfully!");
    onBack(); // Go back to product list
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="border rounded p-3 w-full"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={product.price}
          onChange={handleChange}
          className="border rounded p-3 w-full"
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock Quantity"
          value={product.stock}
          onChange={handleChange}
          className="border rounded p-3 w-full"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g. Shoes, Hoodies)"
          value={product.category}
          onChange={handleChange}
          className="border rounded p-3 w-full"
          required
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          className="border rounded p-3 w-full"
          rows="3"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          className="border rounded p-3 w-full"
          required
        />

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={onBack}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
