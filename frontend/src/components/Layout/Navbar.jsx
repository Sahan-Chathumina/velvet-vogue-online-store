import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300"
        >
          VelvetVogue
        </Link>
        <div className="space-x-8">
          <Link
            to="/"
            className="font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/products"
            className="font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300 relative group"
          >
            Products
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/cart"
            className="font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300 relative group"
          >
            Cart
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* ⭐ NEW Favorites Link */}
          <Link
            to="/favorites"
            className="font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300 relative group"
          >
            Favorites
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
