import { Link } from "react-router-dom";

function RecentlyViewed() {
  const recent =
    JSON.parse(localStorage.getItem("recentlyViewed")) || [];

  return (
    <div className="mt-5">
      <h4 className="fw-bold mb-3">Recently Viewed</h4>

      {recent.length === 0 ? (
        // EMPTY STATE
        <div className="empty-recent shadow-sm">
          <div className="empty-icon">📖</div>
          <p className="fw-semibold mb-1">
            You haven’t started learning yet
          </p>
          <p className="text-muted mb-3">
            Start learning to see your recently viewed notes here
          </p>

          <Link to="/learner/notes" className="lonospace-btn" style={{backgroundColor:"#d6a77a"}}>
            Start Learning
          </Link>
        </div>
      ) : (
       
        <div className="row g-3">
          {recent.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="recent-card shadow-sm">
                <span className="badge bg-secondary mb-2">
                  {item.type}
                </span>

                <h6 className="fw-bold">{item.title}</h6>

                <Link to={item.link} className="small-link">
                  Open again →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentlyViewed;
