import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../admin/AdminFooter";
import { useNavigate } from "react-router-dom";

function LearnerInterviewDashboard() {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/interview/subjects")
      .then(res => res.json())
      .then(data => setSubjects(data.subjects || []))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="learner-page">
        <div className="container my-5">

          {/* Header */}
          <div className="mb-4">
            <h3 className="fw-bold">Interview Prep</h3>
          </div>

          {/* Subjects */}
          <div className="row g-4">
            {subjects.length === 0 ? (
              <p className="text-muted text-center">
                No subjects available
              </p>
            ) : (
              subjects.map(subject => (
                <div key={subject.id} className="col-md-4">
                  <div className="note-card shadow-sm interview-card">

                    <div className="d-flex justify-content-between">
                      <h5 className="fw-bold">{subject.name}</h5>
                      <span>🧠</span>
                    </div>

                    <p className="text-muted small mt-2">
                      {subject.description || "Interview questions & answers"}
                    </p>

                    <button
                      className="lonospace-btn mt-3"
                      style={{ backgroundColor: "#d6a77a", cursor: "pointer" }}
                      onClick={() =>
                        navigate(`/learner/interview-prep/${subject.id}`)
                      }
                    >
                      Start Practice
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

export default LearnerInterviewDashboard;
