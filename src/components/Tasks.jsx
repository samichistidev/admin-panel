import React, { useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { text: "Update website", done: false },
    { text: "Review comments", done: true },
  ]);

  const toggleTask = (i) => {
    const newTasks = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      <ul className="space-y-2">
        {tasks.map((t, i) => (
          <li key={i} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleTask(i)}
            />
            <span className={t.done ? "line-through text-gray-500" : ""}>
              {t.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
