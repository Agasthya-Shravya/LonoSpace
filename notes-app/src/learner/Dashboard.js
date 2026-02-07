import Navbar from "./Navbar";
import Footer from "../admin/AdminFooter";
import { Link } from "react-router-dom";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const name = user?.name
    ? user.name.charAt(0).toUpperCase() + user.name.slice(1)
    : "";

  return (
    <>
      <Navbar />

      <div className="learner-page">
        <div className="container my-5">
          <h2 className="fw-bold mb-2">
            Welcome back{ name && `, ${name}` } 👋
          </h2>
        <p className="text-muted mb-4">
          Ready to learn something new today?
        </p>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="dashboard-card shadow-sm">
              <h5 className="fw-bold">📚 Notes</h5>
              <p className="text-muted">
                Access all subject-wise detailed notes.
              </p>
              <Link to="/learner/notes" className="lonospace-btn">
                View Notes
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="dashboard-card shadow-sm">
              <h5 className="fw-bold">📝 Short Notes</h5>
              <p className="text-muted">
                Quick revisions & last-minute prep.
              </p>
              <Link to="/learner/short-notes" className="lonospace-btn">
                Open Short Notes
              </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="dashboard-card shadow-sm">
              <h5 className="fw-bold">🎯 Interview Prep</h5>
              <p className="text-muted">
                Questions, tips, and practice material.
              </p>
              <Link to="/learner/interview-prep" className="lonospace-btn">
                Start Preparing
              </Link>
            </div>
          </div>

        </div>
      </div>
</div>
      <Footer />
    </>
  );
}

export default Dashboard;
