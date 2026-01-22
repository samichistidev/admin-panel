import React, { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filtered = users
    .filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => (sortAsc ? a.id - b.id : b.id - a.id));

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded"
            onClick={() => setSortAsc(!sortAsc)}
          >
            Sort {sortAsc ? "↓" : "↑"}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="hover:bg-gray-100">
                <td className="border p-2">{u.id}</td>
                <td className="border p-2">{u.name}</td>
                <td className="border p-2">{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
