import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaTruck } from "react-icons/fa";

export default function OrderList() {
  const [orders, setOrders] = useState([
    {
      id: "ORD-1001",
      customer: "John Doe",
      date: "2025-09-18",
      total: 4599,
      status: "Pending",
      payment: "Paid",
    },
    {
      id: "ORD-1002",
      customer: "Jane Smith",
      date: "2025-09-17",
      total: 2499,
      status: "Shipped",
      payment: "Paid",
    },
    {
      id: "ORD-1003",
      customer: "Mike Johnson",
      date: "2025-09-15",
      total: 3199,
      status: "Delivered",
      payment: "Paid",
    },
    {
      id: "ORD-1004",
      customer: "Sarah Williams",
      date: "2025-09-14",
      total: 1999,
      status: "Cancelled",
      payment: "Refunded",
    },
  ]);

  // ✅ Update order status
  const updateStatus = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Orders</h2>

      <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-indigo-100 text-left">
            <th className="p-4">Order ID</th>
            <th className="p-4">Customer</th>
            <th className="p-4">Date</th>
            <th className="p-4">Total (₹)</th>
            <th className="p-4">Payment</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="p-4 font-medium">{order.id}</td>
              <td className="p-4">{order.customer}</td>
              <td className="p-4">{order.date}</td>
              <td className="p-4">₹{order.total}</td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    order.payment === "Paid"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {order.payment}
                </span>
              </td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 rounded text-sm
                    ${
                      order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="p-4 flex gap-3">
                {order.status !== "Shipped" &&
                  order.status !== "Delivered" &&
                  order.status !== "Cancelled" && (
                    <button
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      onClick={() => updateStatus(order.id, "Shipped")}
                    >
                      <FaTruck /> Ship
                    </button>
                  )}

                {order.status === "Shipped" && (
                  <button
                    className="text-green-600 hover:text-green-800 flex items-center gap-1"
                    onClick={() => updateStatus(order.id, "Delivered")}
                  >
                    <FaCheckCircle /> Deliver
                  </button>
                )}

                {order.status !== "Cancelled" &&
                  order.status !== "Delivered" && (
                    <button
                      className="text-red-600 hover:text-red-800 flex items-center gap-1"
                      onClick={() => updateStatus(order.id, "Cancelled")}
                    >
                      <FaTimesCircle /> Cancel
                    </button>
                  )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
