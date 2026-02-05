import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "./AdminFooter";

export default function ShortNotes() {
  const [shortNotes, setShortNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/short-notes")
      .then(res => res.json())
      .then(setShortNotes)
      .catch(err => console.error(err));
  }, []);

  const deleteShortNote = async (id) => {
    if (!window.confirm("Delete this short note?")) return;

    const res = await fetch(
      `http://localhost:5000/api/admin/short-notes/${id}`,
      { method: "DELETE" }
    );

    if (res.ok) {
      setShortNotes(prev => prev.filter(note => note.id !== id));
    } else {
      alert("Delete failed");
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-notes-page">
        <div className="container mt-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Short Notes Dashboard</h3>

            <button
              className="btn"
              style={{ backgroundColor: "#f8f0e3" }}
              onClick={() => navigate("/admin/short-notes/add")}
            >
              + Add Short Note
            </button>
          </div>

          <div className="row">
            {shortNotes.length === 0 && (
              <p className="text-muted text-center">
                No short notes available
              </p>
            )}

            {shortNotes.map(note => (
              <div key={note.id} className="col-md-4 mb-3">
                <div className="card h-100">

                  <img
                    src={
                      note.cover_image_url ||
                      "https://via.placeholder.com/400x200?text=Short+Note"
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
                    <span className="badge bg-info">SHORT</span>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteShortNote(note.id)}
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
