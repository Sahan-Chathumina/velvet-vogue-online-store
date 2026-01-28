import React, { useState } from "react";
import ProductList from "./Products/ProductList";
import OrderList from "./Orders/OrderList";
import UserList from "./Users/UserList";
import { FaBox, FaShoppingCart, FaUsers, FaSignOutAlt } from "react-icons/fa";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("products");

  const renderTab = () => {
    switch (activeTab) {
      case "products":
        return <ProductList />;
      case "orders":
        return <OrderList />;
      case "users":
        return <UserList />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white flex flex-col p-6 space-y-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <nav className="flex flex-col gap-3 flex-1">
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded ${
              activeTab === "products" ? "bg-indigo-900" : "hover:bg-indigo-800"
            }`}
            onClick={() => setActiveTab("products")}
          >
            <FaBox /> Products
          </button>
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded ${
              activeTab === "orders" ? "bg-indigo-900" : "hover:bg-indigo-800"
            }`}
            onClick={() => setActiveTab("orders")}
          >
            <FaShoppingCart /> Orders
          </button>
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded ${
              activeTab === "users" ? "bg-indigo-900" : "hover:bg-indigo-800"
            }`}
            onClick={() => setActiveTab("users")}
          >
            <FaUsers /> Users
          </button>
        </nav>
        <button className="flex items-center gap-2 px-3 py-2 rounded bg-red-600 hover:bg-red-700">
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold capitalize">{activeTab}</h2>
          <span className="text-gray-600">Admin User</span>
        </header>

        {/* Content */}
        <main className="flex-1 p-8">{renderTab()}</main>
      </div>
    </div>
  );
}
