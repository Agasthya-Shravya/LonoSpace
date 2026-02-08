import { useEffect, useState } from "react";

function AdminMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.role !== "admin") return;

    fetch("http://localhost:5000/api/admin/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div className="container py-4">
      <h3>📩 Contact Messages</h3>

      {messages.map((msg) => (
        <div key={msg.id} className="card my-3 p-3">
          <h6>{msg.name}</h6>
          <small>{msg.email}</small>
          <p className="mt-2">{msg.message}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminMessages;
