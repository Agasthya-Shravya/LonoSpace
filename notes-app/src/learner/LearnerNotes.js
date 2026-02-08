import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../admin/AdminFooter";
import { addRecentlyViewed } from "../utils/recentlyViewed";
import { isFavourite, toggleFavourite } from "../utils/favourites";
import { useNavigate } from "react-router-dom";

function LearnerNotes() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/notes")
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
  // increment views
  await fetch(
    `http://localhost:5000/api/notes/${note.id}/view`,
    { method: "PUT" }
  );

  addRecentlyViewed({
    id: note.id,
    title: note.title,
    type: note.type,
    link:
      note.type === "PDF"
        ? `/notes/view/${note.id}`
        : `/notes/text/${note.id}`
  });

  if (note.type === "PDF") {
    navigate(`/notes/view/${note.id}`);
  } else {
    navigate(`/notes/text/${note.id}`);
  }
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

          {/* Notes */}
          <div className="row g-4">
            {filteredNotes.length === 0 ? (
              <p className="text-muted">No notes found</p>
            ) : (
              filteredNotes.map(note => (
                <div key={note.id} className="col-md-4">
                  <div className="note-card shadow-sm">

                    {note.cover_image_url && (
                      <img
                        src={note.cover_image_url}
                        alt="cover"
                        className="note-cover"
                      />
                    )}

                    <div className="d-flex justify-content-between mt-2">
                      <h6 className="fw-bold">{note.title}</h6>

                      <span
                        className="bookmark-icon"
                        onClick={() => toggleFavourite(note)}
                      >
                        {isFavourite(note.id) ? "⭐" : "☆"}
                      </span>
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
                      style={{backgroundColor:"#d6a77a"}}
                    >
                      Open {note.type}
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
