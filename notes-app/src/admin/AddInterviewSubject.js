import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "./AdminFooter";

export default function AddInterviewSubject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "http://localhost:5000/api/admin/interview/subjects",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description })
      }
    );

    if (res.ok) navigate("/admin/interview-prep");
    else alert("Failed to add subject");
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-notes-page">
        <div className="container mt-4">
          <h3 className="text-center mb-4">Add Subject</h3>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-3"
              placeholder="Subject name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />

            <textarea
              className="form-control mb-3"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />

            <button className="btn btn-dark">Save</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
