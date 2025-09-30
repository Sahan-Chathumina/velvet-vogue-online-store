import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export default function Profile() {
  const { user, updateProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.name || "");
  const [location, setLocation] = useState(user?.location || "");

  if (!user) return <p className="p-4">Please log in first.</p>;

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile({ name, location });
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl mb-4 font-bold">Profile</h2>
      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="border p-2"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white p-2">
          Save
        </button>
      </form>
    </div>
  );
}
