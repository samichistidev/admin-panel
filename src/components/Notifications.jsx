import React from "react";

export default function Notifications() {
  const notifications = [
    "Server restarted",
    "New user registered",
    "Comment reported",
    "Backup completed",
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <ul className="space-y-2">
        {notifications.map((n, i) => (
          <li key={i} className="bg-white shadow p-3 rounded">
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}
