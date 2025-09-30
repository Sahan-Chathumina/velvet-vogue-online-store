import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Topbar */}
      <Topbar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
