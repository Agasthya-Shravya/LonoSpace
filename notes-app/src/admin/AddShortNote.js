import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "./AdminFooter";
import "../index.css"
export default function AddShortNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("Title and content are required");
      return;
    }

    const res = await fetch(
      "http://localhost:5000/api/admin/short-notes",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          coverImageUrl,
          content
        })
      }
    );

    if (res.ok) {
      alert("Short note added");
      navigate("/admin/short-notes");
    } else {
      alert("Failed to add short note");
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-notes-page">
        <div className="container mt-4 mb-5">
          <h3 className="text-center mb-4">Add Short Note</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                className="form-control"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="2"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Cover Image URL</label>
              <input
                className="form-control"
                value={coverImageUrl}
                onChange={e => setCoverImageUrl(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Content</label>
              <textarea
                className="form-control"
                rows="6"
                value={content}
                onChange={e => setContent(e.target.value)}
                required
              />
            </div>

            <button className="btn btn-dark">Save Short Note</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
