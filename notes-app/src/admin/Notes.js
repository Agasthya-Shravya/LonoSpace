import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "./AdminFooter";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/notes")
      .then(res => res.json())
      .then(setNotes);
  }, []);

  const deleteNote = async (id) => {
    if (!window.confirm("Delete this note?")) return;

    const res = await fetch(
      `http://localhost:5000/api/admin/notes/${id}`,
      { method: "DELETE" }
    );

    if (res.ok) {
      setNotes(prev => prev.filter(n => n.id !== id));
    } else {
      alert("Delete failed");
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-notes-page">
        <div className="container mt-4">

          {/* Header + Add dropdown */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Notes Dashboard</h3>

            <div className="position-relative">
              <button
                className="btn"
                style={{ backgroundColor: "#f8f0e3" }}
                onClick={() => setOpenDropdown(!openDropdown)}
              >
                + Add Note
              </button>

              {openDropdown && (
                <div
                  className="dropdown-menu show"
                  style={{ position: "absolute", right: 0 }}
                >
                  <button
                    className="dropdown-item"
                    onClick={() => navigate("/admin/notes/add-pdf")}
                  >
                    Add as PDF
                  </button>
                  <button
                    className="dropdown-item"
                    onClick={() => navigate("/admin/notes/add-text")}
                  >
                    Add as Text
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Notes cards */}
          <div className="row">
            {notes.length === 0 && (
              <p className="text-muted text-center">
                No notes available
              </p>
            )}

            {notes.map(note => (
              <div key={note.id} className="col-md-4 mb-3">
                <div className="card h-100">

                  <img
                    src={
                      note.cover_image_url ||
                      "https://via.placeholder.com/400x200?text=Note"
                    }
                    className="card-img-top"
                    alt={note.title}
                  />

                  <div className="card-body">
                    <h6>{note.title}</h6>
                    <p className="text-muted small">
                      {note.description}
                    </p>
                  </div>

                  <div className="card-footer d-flex justify-content-between">
                    <span className="badge bg-secondary">
                      {note.type || "NOTE"}
                    </span>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteNote(note.id)}
                    >
                      Delete
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
