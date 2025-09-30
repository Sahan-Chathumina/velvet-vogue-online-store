import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const ADMIN_CREDENTIALS = {
  email: "admin@velvetvogue.com",
  password: "Admin123",
  name: "Administrator"
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // {name, email, isAdmin}
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const login = (email, password) => {
    // ✅ Admin check
    if (
      email === ADMIN_CREDENTIALS.email &&
      password === ADMIN_CREDENTIALS.password
    ) {
      const adminUser = {
        name: ADMIN_CREDENTIALS.name,
        email,
        isAdmin: true
      };
      setUser(adminUser);
      localStorage.setItem("user", JSON.stringify(adminUser));
      navigate("/admin");
      return true;
    }

    // ✅ Normal user check
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      const normalUser = { ...found, isAdmin: false };
      setUser(normalUser);
      localStorage.setItem("user", JSON.stringify(normalUser));
      navigate("/");
      return true;
    }

    return false;
  };

  const signup = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === email)) return false; // email exists
    const newUser = { name, email, password, location: "" };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const updateProfile = (updates) => {
    const updated = { ...user, ...updates };
    setUser(updated);
    localStorage.setItem("user", JSON.stringify(updated));

    // update in users list if normal user
    if (!user.isAdmin) {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const idx = users.findIndex((u) => u.email === user.email);
      if (idx !== -1) {
        users[idx] = updated;
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
