import React from "react";

export default function Analytics() {
  const data = [
    { label: "User 1", value: 5 },
    { label: "User 2", value: 8 },
    { label: "User 3", value: 3 },
    { label: "User 4", value: 6 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <div className="space-y-2">
        {data.map((d) => (
          <div key={d.label} className="flex items-center gap-2">
            <span className="w-24">{d.label}</span>
            <div
              className="bg-blue-500 h-6"
              style={{ width: `${d.value * 20}px` }}
            ></div>
            <span className="ml-2">{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
