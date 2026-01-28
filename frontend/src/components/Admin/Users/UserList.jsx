import React, { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(stored);
  }, []);

  const handleDelete = (email) => {
    const updated = users.filter((u) => u.email !== email);
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr><td colSpan="4" className="p-4 text-center">No users found</td></tr>
          ) : (
            users.map((user, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.location || "-"}</td>
                <td>
                  <button 
                    onClick={() => handleDelete(user.email)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
