import React from 'react'
import { Link } from 'react-router-dom'
function AdminDashboard() {
  return (
    <div>
        <h1>Admin Dashboard</h1>
<p>Welcome, Admin</p>
<Link to="/login">Logout</Link>

    </div>
  )
}

export default AdminDashboard