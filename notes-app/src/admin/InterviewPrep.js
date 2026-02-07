import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "./AdminFooter";

export default function InterviewPrep() {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/interview/subjects")
      .then(res => res.json())
      .then(setSubjects);
  }, []);

  const deleteSubject = async (id) => {
    if (!window.confirm("Delete subject and all questions?")) return;

    const res = await fetch(
      `http://localhost:5000/api/admin/interview/subjects/${id}`,
      { method: "DELETE" }
    );

    if (res.ok) {
      setSubjects(prev => prev.filter(s => s.id !== id));
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-notes-page">
        <div className="container mt-4">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Interview Prep</h3>

            <button
              className="btn"
              style={{ backgroundColor: "#f8f0e3" }}
              onClick={() => navigate("/admin/interview-prep/add-subject")}
            >
              + Add Subject
            </button>
          </div>

          <div className="row">
            {subjects.length === 0 && (
              <p className="text-muted text-center">
                No notes available
              </p>
            )}
            {subjects.map(sub => (
              <div key={sub.id} className="col-md-4 mb-3">
                <div className="card h-100">

                  <div
                    className="card-body"
                    style={{ cursor: "pointer" }}
                  >
                    <h5>{sub.name}</h5>
                    <p className="text-muted small">
                      {sub.description}
                    </p>
                  </div>

                  <div className="card-footer text-end d-flex gap-2">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() =>
                        navigate(`/admin/interview-prep/${sub.id}`)
                      }
                    >
                      View
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteSubject(sub.id)}
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
