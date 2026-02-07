import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "./AdminFooter";

export default function InterviewQuestions() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/admin/interview/questions/${subjectId}`)
      .then(res => res.json())
      .then(setQuestions);
  }, [subjectId]);

  const deleteQuestion = async (id) => {
    if (!window.confirm("Delete question?")) return;

    const res = await fetch(
      `http://localhost:5000/api/admin/interview/questions/${id}`,
      { method: "DELETE" }
    );

    if (res.ok) {
      setQuestions(prev => prev.filter(q => q.id !== id));
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-notes-page">
        <div className="container mt-4">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>Questions</h3>

            <button
              className="btn"
              style={{ backgroundColor: "#f8f0e3" }}
              onClick={() =>
                navigate(`/admin/interview-prep/${subjectId}/add-question`)
              }
            >
              + Add Question
            </button>
          </div>

          {questions.map(q => (
            <div key={q.id} className="card mb-3">
              <div className="card-body">
                <h6>{q.question}</h6>
                <p className="text-muted small">{q.answer}</p>
                <span className="badge bg-secondary">
                  {q.difficulty}
                </span>
              </div>

              <div className="card-footer text-end">
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteQuestion(q.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </>
  );
}
