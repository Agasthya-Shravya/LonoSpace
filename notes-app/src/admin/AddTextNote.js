import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AdminNavbar from "./AdminNavbar";
import Footer from "./AdminFooter";

export default function AddTextNote() {
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

    const res = await fetch("http://localhost:5000/api/admin/add-text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description,
        coverImageUrl,
        content
      })
    });

    if (res.ok) {
      alert("Text note added successfully");
      navigate("/admin/notes");
    } else {
      alert("Failed to add note");
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="container mt-4 mb-5">
        <h3 className="text-center mb-4">Add Text Note</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Short Description</label>
            <textarea
              className="form-control"
              rows="2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Cover Image URL (optional)</label>
            <input
              className="form-control"
              value={coverImageUrl}
              onChange={(e) => setCoverImageUrl(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Content</label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              style={{ height: "300px", marginBottom: "60px" }}
            />
          </div>

          <button className="btn btn-dark">Save Note</button>
        </form>
      </div>

      <Footer />
    </>
  );
}
