import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Footer from "./AdminFooter";

export default function AddInterviewQuestion() {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "http://localhost:5000/api/admin/interview/questions",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subjectId,
          question,
          answer,
          difficulty
        })
      }
    );

    if (res.ok) {
      navigate(`/admin/interview-prep/${subjectId}`);
    } else {
      alert("Failed to add question");
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-notes-page">
        <div className="container mt-4">
          <h3 className="text-center mb-4">Add Question</h3>

          <form onSubmit={handleSubmit}>
            <textarea
              className="form-control mb-3"
              placeholder="Question"
              value={question}
              onChange={e => setQuestion(e.target.value)}
              required
            />

            <textarea
              className="form-control mb-3"
              placeholder="Answer"
              rows="5"
              value={answer}
              onChange={e => setAnswer(e.target.value)}
              required
            />

            <select
              className="form-select mb-3"
              value={difficulty}
              onChange={e => setDifficulty(e.target.value)}
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

            <button className="btn btn-dark">Save</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
