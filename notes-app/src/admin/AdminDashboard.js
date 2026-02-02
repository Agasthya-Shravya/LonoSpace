import AdminNavbar from "./AdminNavbar";
import { Link } from "react-router-dom";
import Footer from "./AdminFooter";
function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <AdminNavbar />

      <div className="admin-dashboard">
        <div className="container">

        <br></br>
            <h3 className="mb-1">
              Welcome back, <span style={{ color: "#d6a77a" }}>Admin</span> 👋
            </h3>
            <p className="text-muted mb-0">
               You have full access to manage users and learning content.
            </p>
          <br></br>
<br></br>
          <div className="row">
            <div className="col-md-3">
              <div className="card p-3 shadow-sm text-center">
                <h6>Total Users</h6>
                <h3>--</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3 shadow-sm text-center">
                <h6>Notes</h6>
                <h3>--</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3 shadow-sm text-center">
                <h6>Short Notes</h6>
                <h3>--</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-3 shadow-sm text-center">
                <h6>Interview Prep</h6>
                <h3>--</h3>
              </div>
            </div>
          </div>
          <br></br><br></br>
<div className="row mb-4">

  <div className="col-md-3">
    <div className="card quick-link-card text-center p-4">
      <h5>Notes</h5>
      <p className="text-muted">Add & manage notes</p>
      <Link to="/admin/notes" className="btn lonospace-btn" style={{backgroundColor:"#a9b8c6"}}>
        Go
      </Link>
    </div>
  </div>

  <div className="col-md-3">
    <div className="card quick-link-card text-center p-4">
      <h5>Short Notes</h5>
      <p className="text-muted">Quick revision content</p>
      <Link to="/admin/short-notes" className="btn lonospace-btn" style={{backgroundColor:"#a9b8c6"}}>
        Go
      </Link>
    </div>
  </div>

  <div className="col-md-3">
    <div className="card quick-link-card text-center p-4">
      <h5>Interview Prep</h5>
      <p className="text-muted">Q&A and prep material</p>
      <Link to="/admin/interview-prep" className="btn lonospace-btn" style={{backgroundColor:"#a9b8c6"}}>
        Go
      </Link>
    </div>
  </div>

  <div className="col-md-3">
    <div className="card quick-link-card text-center p-4">
      <h5>Users</h5>
      <p className="text-muted">Manage platform users</p>
      <Link to="/admin/users" className="btn lonospace-btn" style={{backgroundColor:"#a9b8c6"}}>
        Go
      </Link>
    </div>
  </div>

</div>

        </div>
      </div>
      <Footer/>
    </>
  );
}

export default AdminDashboard;
