import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchUsers = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFiltered(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    let filteredData = users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()),
    );
    if (!sortAsc) filteredData = filteredData.sort((a, b) => b.id - a.id);
    else filteredData = filteredData.sort((a, b) => a.id - b.id);
    setFiltered(filteredData);
  }, [search, sortAsc, users]);

  if (loading) return <p className="p-6">Loading users...</p>;

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
          <button
            className="px-3 py-1 bg-green-600 text-white rounded"
            onClick={fetchUsers}
          >
            Refresh
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
              <th className="border p-2">Username</th>
              <th className="border p-2">Website</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="hover:bg-gray-100">
                <td className="border p-2">{u.id}</td>
                <td className="border p-2">{u.name}</td>
                <td className="border p-2">{u.email}</td>
                <td className="border p-2">{u.username}</td>
                <td className="border p-2">{u.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
