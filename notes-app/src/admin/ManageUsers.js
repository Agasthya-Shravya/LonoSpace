import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Footer from "./AdminFooter";

export default function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 5;

  const fetchUsers = () => {
    fetch(
      `http://localhost:5000/api/admin/users?page=${page}&limit=${limit}`
    )
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
        setTotalPages(data.totalPages);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const toggleStatus = async (id) => {
    const res = await fetch(
      `http://localhost:5000/api/admin/users/${id}/status`,
      { method: "PATCH" }
    );

    if (res.ok) {
      fetchUsers();
    } else {
      alert("Action not allowed");
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-notes-page">
        <div className="container mt-4">
          <h3 className="text-center mb-4">Manage Users</h3>

          <table className="table table-bordered align-middle">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>

                  <td>
                    <span
                      className={`badge ${
                        user.role === "ADMIN"
                          ? "bg-danger"
                          : "bg-secondary"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        user.is_active
                          ? "bg-success"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {user.is_active ? "Active" : "Disabled"}
                    </span>
                  </td>

                  <td>
                    <button
                      className={`btn btn-sm ${
                        user.is_active
                          ? "btn-warning"
                          : "btn-success"
                      }`}
                      disabled={user.role === "ADMIN"}
                      onClick={() => toggleStatus(user.id)}
                    >
                      {user.is_active ? "Disable" : "Enable"}
                    </button>
                  </td>
                </tr>
              ))}

              {users.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="d-flex justify-content-center gap-2">
            <button
              className="btn btn-sm btn-secondary"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Prev
            </button>

            <span className="align-self-center">
              Page {page} of {totalPages}
            </span>

            <button
              className="btn btn-sm btn-secondary"
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
