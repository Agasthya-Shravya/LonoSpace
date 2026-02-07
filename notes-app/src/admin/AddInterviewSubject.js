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

    if (!name) {
      alert("Subject name required");
      return;
    }

    const res = await fetch(
      "http://localhost:5000/api/admin/interview/subjects",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description })
      }
    );

    if (res.ok) {
      alert("Subject added");
      navigate("/admin/interview-prep");
    } else {
      alert("Failed to add subject");
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-notes-page">
        <div className="container mt-4 mb-5">
          <h3 className="text-center mb-4">Add Interview Subject</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Subject Name</label>
              <input
                className="form-control"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <button className="btn btn-dark">Save Subject</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
