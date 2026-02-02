import React from 'react'
import { Link } from 'react-router-dom'
function LearnerDashboard() {
  return (
    <div>
        <h1>Learner Dashboard</h1>
<p>Welcome to LonoSpace</p>
<Link to="/login">Logout</Link>

    </div>
  )
}

export default LearnerDashboard