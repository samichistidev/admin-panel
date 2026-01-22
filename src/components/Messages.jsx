export default function Messages() {
  const messages = [
    { from: "Alice", text: "Hello, how are you?" },
    { from: "Bob", text: "Project update sent." },
    { from: "Carol", text: "Meeting at 3PM." },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <ul className="space-y-2">
        {messages.map((m, i) => (
          <li key={i} className="bg-white shadow p-3 rounded">
            <p className="font-semibold">{m.from}</p>
            <p>{m.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
