import { Link, useNavigate } from "react-router-dom";
import "../index.css";

function AdminNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg lonospace-navbar shadow-sm">
      <div className="container">

        <span className="navbar-brand fw-bold lonospace-brand">
          LonoSpace <span className="admin-badge">Admin</span>
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <Link className="nav-link lonospace-link" to="/admin-dashboard">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link lonospace-link" to="/admin/notes">
                Notes
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link lonospace-link" to="/admin/short-notes">
                Short Notes
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link lonospace-link" to="/admin/interview-prep">
                Interview Prep
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link lonospace-link" to="/admin/users">
                Users
              </Link>
            </li>
            

            <li className="nav-item">
              <button
                onClick={logout}
                className="lonospace-btn logout-btn"
              >
                Logout
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
