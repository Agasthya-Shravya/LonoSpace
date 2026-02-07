import { useParams } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "./AdminFooter";
import { useRef } from "react";
export default function ViewPdf() {
  const { id } = useParams();
  const pdfContainerRef = useRef(null);

  const enterFullscreen = () => {
    const el = pdfContainerRef.current;

    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen(); // Safari
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen(); // IE
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-notes-page">
        <div className="container" style={{justifyContent:"center"}}>
        <button
          className="btn btn-sm" style={{backgroundColor:"#d6a77a"}}
          onClick={enterFullscreen}
        >
         PDF Preview - ⛶ Click Here for Fullscreen
        </button>
      
<br/><br/>
          <iframe
            src={`http://localhost:5000/api/admin/notes/view/${id}`}
            title="PDF Viewer"
            width="105%"
            height="600px"
            style={{
              border: "1px solid #ccc",
              borderRadius: "6px",
              marginLeft:"0px"
            }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
