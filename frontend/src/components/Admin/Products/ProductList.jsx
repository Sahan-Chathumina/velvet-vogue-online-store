import React, { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const dummyProducts = [
  { id: 1, name: "Red Hoodie", price: "2499", stock: 12, category: "Hoodies" },
  { id: 2, name: "Blue Sneakers", price: "3199", stock: 8, category: "Shoes" },
  { id: 3, name: "Leather Wallet", price: "1199", stock: 20, category: "Accessories" },
];

export default function ProductList() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  if (showAddForm) {
    return <AddProduct onBack={() => setShowAddForm(false)} />;
  }

  if (editProduct) {
    return (
      <EditProduct
        productData={editProduct}
        onBack={() => setEditProduct(null)}
      />
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Products</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          <FaPlus /> Add Product
        </button>
      </div>

      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-indigo-100 text-left">
            <th className="p-4">ID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Price (₹)</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Category</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyProducts.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-50">
              <td className="p-4">{product.id}</td>
              <td className="p-4">{product.name}</td>
              <td className="p-4">{product.price}</td>
              <td className="p-4">{product.stock}</td>
              <td className="p-4">{product.category}</td>
              <td className="p-4 flex gap-3">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => setEditProduct(product)}
                >
                  <FaEdit />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
