import React, { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="dark-mode"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="h-5 w-5"
        />
        <label htmlFor="dark-mode" className="text-lg">
          Enable Dark Mode
        </label>
      </div>
    </div>
  );
}
