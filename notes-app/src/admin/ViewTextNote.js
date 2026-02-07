import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "./AdminFooter";

export default function ViewTextNote() {
  const { id } = useParams();
  const location = useLocation();
  const [note, setNote] = useState(null);

  // detect source (notes / short-notes)
  const isShortNote = location.pathname.includes("short-notes");

  useEffect(() => {
    const url = isShortNote
      ? `http://localhost:5000/api/admin/short-notes/${id}`
      : `http://localhost:5000/api/admin/notes/text/${id}`;

    fetch(url)
      .then(res => res.json())
      .then(setNote);
  }, [id, isShortNote]);

  if (!note) {
    return (
      <>
        <AdminNavbar />
        <div className="container mt-5 text-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <AdminNavbar />

      <div className="admin-notes-page">
        <div className="container mt-4">
          <h3>{note.title}</h3>
          <p className="text-muted">{note.description}</p>

          <hr />

          <div style={{ whiteSpace: "pre-wrap" }}>
            {note.content}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
