import { useParams } from "react-router-dom";
import { useRef } from "react";
import AdminNavbar from "./AdminNavbar";
import Footer from "./AdminFooter";
import LearnerNavbar from "../learner/Navbar"
export default function ViewPdf({ role = "admin" }) {
  const { id } = useParams();
  const pdfContainerRef = useRef(null);

  const enterFullscreen = () => {
    const el = pdfContainerRef.current;
    if (!el) return;

    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }
  };

  // 🔥 API changes based on role
  const pdfUrl =
    role === "admin"
      ? `http://localhost:5000/api/admin/notes/view/${id}`
      : `http://localhost:5000/api/notes/${id}/pdf`;

  return (
    <>
      {/* Show admin navbar only for admin */}
      {role === "admin"?<AdminNavbar />:<LearnerNavbar />}
      <div className="admin-notes-page">
        <div className="container" style={{ justifyContent: "center" }}>
          <button
            className="btn btn-sm"
            style={{ backgroundColor: "#d6a77a" }}
            onClick={enterFullscreen}
          >
            PDF Preview - ⛶ Enable Fullscreen
          </button>

          <br />
          <br />

          {/* 🔥 REF ATTACHED HERE */}
          <div ref={pdfContainerRef}>
            <iframe
              src={pdfUrl}
              title="PDF Viewer"
              width="100%"
              height="800vh"
              style={{
                border: "1px solid #ccc",
                borderRadius: "6px"
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
