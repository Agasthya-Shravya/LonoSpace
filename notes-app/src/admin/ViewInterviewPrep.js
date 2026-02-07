import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "./AdminFooter";

export default function ViewInterviewPrep() {
  const { subjectId } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/admin/interview/view/${subjectId}`
    )
      .then(res => res.json())
      .then(setQuestions);
  }, [subjectId]);

  if (!questions.length) {
    return (
      <>
        <AdminNavbar />
        <div className="container mt-5 text-center">
          <p>No questions added yet.</p>
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

          <h3 className="mb-4">
            {questions[0].subject} – Interview Prep
          </h3>

          {questions.map((q, index) => (
            <div
              key={q.id}
              className="card mb-3"
              style={{ borderLeft: "5px solid #343a40" }}
            >
              <div className="card-body">
                <h6>
                  {index + 1}. {q.question}
                </h6>

                <span className="badge bg-secondary mb-2">
                  {q.difficulty}
                </span>

                <hr />

                <p style={{ whiteSpace: "pre-wrap" }}>
                  {q.answer}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </>
  );
}
