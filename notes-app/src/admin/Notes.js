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
    alert("Failed to delete note");
  }
};

  return (
    <>
    <AdminNavbar/>
    <div className="admin-notes-page">
    <div className="container mt-4">


      <div className="mb-4">
        <div className="text-center">
        <h3 >Manage Notes</h3>
        </div>
<br/>
        <div className="d-flex flex-column align-items-start mt-2">
            <h4 style={{marginLeft: "16px"}}>Add Notes</h4>
            <div className="position-relative">
            <button
              className="btn mt-2" style={{backgroundColor:"#f8f0e3"}}
              onClick={() => setOpenDropdown(!openDropdown)}
            >
                 <u style={{color:"blue"}}>Click here to add notes</u>
            </button>

            {openDropdown && (
              <div className="dropdown-menu show">
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
      </div>

      <div className="row">
        <h5 style={{marginLeft: "16px"}}>Available Notes</h5>
        {notes.map(note => (
          <div key={note.id} className="col-md-4 mb-3">
            <div className="card h-100">

              {note.cover_image_url && (
                <img
                  src={note.cover_image_url}
                  className="card-img-top"
                  alt={note.title}
                  onError={e => e.target.style.display = "none"}
                />
              )}

              <div className="card-body">
                <h6>{note.title}</h6>
                <p className="text-muted small">
                  {note.description}
                </p>
              </div>

              <div className="card-footer d-flex justify-content-between">
                <span className="badge bg-secondary">
                  {note.type}
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
    <Footer/>
    </>
  );
}
