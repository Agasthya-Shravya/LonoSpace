import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../admin/AdminFooter";
import { addRecentlyViewed } from "../utils/recentlyViewed";
import { useNavigate } from "react-router-dom";

function LearnerShortNotes() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/short-notes")
      .then(res => res.json())
      .then(data => setNotes(data.notes || []))
      .catch(err => console.error(err));
  }, []);

  const filteredNotes = notes.filter(note =>
    (note.title || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const openNote = async (note) => {
    await fetch(
      `http://localhost:5000/api/short-notes/${note.id}/view`,
      { method: "PUT" }
    );

    addRecentlyViewed({
      id: note.id,
      title: note.title,
      type: "SHORT_NOTE",
      link: `/short-notes/view/${note.id}`
    });

    navigate(`/short-notes/view/${note.id}`);
  };

  return (
    <>
      <Navbar />

      <div className="learner-page">
        <div className="container my-5">

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold">Short Notes</h3>

            <input
              type="text"
              className="form-control search-input"
              placeholder="Search short notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
            
          {/* Notes */}
          <div className="row g-4">
            {filteredNotes.length === 0 ? (
              <p className="text-muted text-center">No short notes found</p>
            ) : (
              filteredNotes.map(note => (
                <div key={note.id} className="col-md-4">
                  <div className="note-card shadow-sm">
                    <img
                    src={
                      note.cover_image_url ||
                      "https://via.placeholder.com/400x200?text=Short+Note"
                    }
                    className="card-img-top"
                    alt={note.title}
                  />


                    <div className="d-flex justify-content-between mt-2">
                      <h6 className="fw-bold">{note.title}</h6>

                    </div>

                    <p className="text-muted small">
                      {note.description || "No description"}
                    </p>

                    <p className="text-muted small">
                      👁️ {note.view_count || 0} views
                    </p>

                    <button
                      className="lonospace-btn mt-2"
                      onClick={() => openNote(note)}
                      style={{ backgroundColor: "#d6a77a" }}
                    >
                      Open
                    </button>

                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default LearnerShortNotes;
