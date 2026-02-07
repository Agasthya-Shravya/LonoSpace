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
      .then(setSubjects)
      .catch(err => console.error(err));
  }, []);

  const deleteSubject = async (id) => {
    if (!window.confirm("Delete this subject? All questions will be deleted.")) {
      return;
    }

    const res = await fetch(
      `http://localhost:5000/api/admin/interview/subjects/${id}`,
      { method: "DELETE" }
    );

    if (res.ok) {
      setSubjects(prev => prev.filter(s => s.id !== id));
    } else {
      alert("Delete failed");
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-notes-page">
        <div className="container mt-4">

          {/* Header + Add button */}
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

          {/* Subjects grid */}
          <div className="row">
            {subjects.length === 0 && (
              <p className="text-muted text-center">
                No subjects added yet
              </p>
            )}

            {subjects.map(subject => (
              <div key={subject.id} className="col-md-4 mb-3">
                <div className="card h-100">

                  <div
                    className="card-body"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(`/admin/interview-prep/${subject.id}`)
                    }
                  >
                    <h5>{subject.name}</h5>
                    <p className="text-muted small">
                      {subject.description}
                    </p>
                  </div>

                  <div className="card-footer d-flex justify-content-between">
                    <span className="badge bg-warning text-dark">
                      SUBJECT
                    </span>

                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteSubject(subject.id)}
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
