import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../admin/AdminFooter";

function LearnerInterviewFlipCards() {
  const { subjectId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [flippedId, setFlippedId] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/admin/interview/questions/${subjectId}`)
      .then(res => res.json())
      .then(data => {
        setQuestions(Array.isArray(data) ? data : data.questions || []);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [subjectId]);

  return (
    <>
      <Navbar />

      <div className="learner-page">
        <div className="container my-5">

          {/* Header */}
          <div className="mb-4">
            <h3 className="fw-bold">Interview Practice</h3>
            <p className="text-muted">
              Click the card to flip and view the answer
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <p className="text-muted text-center">
              Loading questions...
            </p>
          )}

          {/* Empty state */}
          {!loading && questions.length === 0 && (
            <p className="text-muted text-center">
              No questions available for this subject
            </p>
          )}

          {/* Flip Cards */}
          <div className="row g-4">
            {questions.map(q => (
              <div key={q.id} className="col-md-4">
                <div
                  className="flip-card"
                  onClick={() =>
                    setFlippedId(flippedId === q.id ? null : q.id)
                  }
                >
                  <div
                    className={`flip-card-inner ${
                      flippedId === q.id ? "flipped" : ""
                    }`}
                  >

                    {/* FRONT */}
                    <div className="flip-card-front">
                      <span
                        className="badge"
                        style={{ backgroundColor: "#8fa99b" }}
                      >
                        {q.difficulty}
                      </span>

                      <p className="mt-3 fw-semibold">
                        {q.question}
                      </p>

                    </div>

                    {/* BACK */}
                    <div className="flip-card-back">
                      <p>{q.answer}</p>

                      
                    </div>

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

export default LearnerInterviewFlipCards;
