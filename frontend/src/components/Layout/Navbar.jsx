import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaHeart,
  FaUserCircle,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  // Detect scroll to add shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load user from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setOpenMenu(false);
    navigate("/login");
  };

  const profileInitial = user?.name ? user.name.charAt(0).toUpperCase() : "";

  return (
    <>
      {/* === Fixed Navbar === */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300
        ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"}`}
      >
        <div className="container mx-auto h-full flex justify-between items-center px-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 hover:text-orange-600 transition"
          >
            VelvetVogue
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            <NavItem to="/" label="Home" />
            <NavItem to="/products" label="Products" />
            <NavIcon to="/cart" icon={<FaShoppingCart />} label="Cart" />
            <NavIcon to="/favorites" icon={<FaHeart />} label="Favorites" />

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenMenu((prev) => !prev)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                {user ? (
                  <span className="font-semibold">{profileInitial}</span>
                ) : (
                  <FaUserCircle className="text-xl" />
                )}
              </button>

              {openMenu && (
                <div
                  className="absolute right-0 mt-3 w-48 bg-white border rounded-md shadow-lg p-2 animate-fadeIn"
                  onMouseLeave={() => setOpenMenu(false)}
                >
                  {!user ? (
                    <DropdownItem
                      to="/login"
                      icon={<FaSignInAlt />}
                      label="Login / Signup"
                      onClick={() => setOpenMenu(false)}
                    />
                  ) : (
                    <>
                      <DropdownItem
                        to="/profile"
                        icon={<FaUserCircle />}
                        label="Profile"
                        onClick={() => setOpenMenu(false)}
                      />
                      {user.isAdmin && (
                        <DropdownItem
                          to="/admin"
                          icon={<FaUserCircle />}
                          label="Admin Dashboard"
                          onClick={() => setOpenMenu(false)}
                        />
                      )}
                      <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-2 px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        <FaSignOutAlt className="text-orange-500" />
                        Logout
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* === Spacer div so page content is not hidden === */}
      <div className="h-8" />
    </>
  );
};

/* Reusable Components */
const NavItem = ({ to, label }) => (
  <Link
    to={to}
    className="font-medium text-gray-700 hover:text-orange-600 transition relative group"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const NavIcon = ({ to, icon, label }) => (
  <Link
    to={to}
    className="relative flex items-center text-gray-700 hover:text-orange-600 transition"
    title={label}
  >
    {icon}
  </Link>
);

const DropdownItem = ({ to, icon, label, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
  >
    {icon}
    {label}
  </Link>
);

export default Navbar;
