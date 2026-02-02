import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./admin/AdminDashboard";
import LearnerDashboard from "./pages/LearnerDashboard";
import Notes from "./admin/Notes";
import ShortNotes from "./admin/ShortNotes";
import InterviewPrep from "./admin/InterviewPrep";
import ManageUsers from "./admin/ManageUsers";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/learner-dashboard" element={<LearnerDashboard />} />
        <Route path="/admin/notes" element={<Notes />} />
        <Route path="/admin/short-notes" element={<ShortNotes />} />
        <Route path="/admin/interview-prep" element={<InterviewPrep />} />
        <Route path="/admin/users" element={<ManageUsers />} />

      </Routes>
    </Router>
  );
}

export default App;
