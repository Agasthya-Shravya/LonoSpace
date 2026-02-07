import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../admin/AdminFooter";
import { addRecentlyViewed } from "../utils/recentlyViewed";

function LearnerNotes() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // replace with your actual API
    fetch("http://localhost:5000/api/notes")
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  const openNote = (note) => {
    addRecentlyViewed({
      id: note.id,
      title: note.title,
      type: "Notes",
      link: note.fileUrl   // or /learner/notes/:id
    });

    window.open(note.fileUrl, "_blank");
  };

  return (
    <>
      <Navbar />

      <div className="learner-page">
        <div className="container my-5">

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold">Notes</h3>

            <input
              type="text"
              className="form-control search-input"
              placeholder="Search notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Notes Grid */}
          <div className="row g-4">
            {filteredNotes.length === 0 ? (
              <p className="text-muted">No notes found</p>
            ) : (
              filteredNotes.map(note => (
                <div key={note.id} className="col-md-4">
                  <div className="note-card shadow-sm">
                    <h6 className="fw-bold">{note.title}</h6>

                    <p className="text-muted small">
                      {note.subject || "General"}
                    </p>

                    <button
                      className="lonospace-btn"
                      onClick={() => openNote(note)}
                    >
                      Open Note
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

export default LearnerNotes;
