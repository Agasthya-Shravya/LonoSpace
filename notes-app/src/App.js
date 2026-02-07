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
import AddPdfNote from "./admin/AddPdfNote";
import AddTextNote from "./admin/AddTextNote";
import AddShortNote from "./admin/AddShortNote";
import AddInterviewSubject from "./admin/AddInterviewSubject";
import InterviewQuestions from "./admin/InterviewQuestions";
import AddInterviewQuestion from "./admin/AddInterviewQuestion";
import ViewPdf from "./admin/ViewPdf";
import ViewTextNote from "./admin/ViewTextNote";
import ViewInterviewPrep from "./admin/ViewInterviewPrep";

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
        <Route path="/admin/notes/add-pdf" element={<AddPdfNote />} />
        <Route path="/admin/notes/add-text" element={<AddTextNote />} />
        <Route path="/admin/short-notes/add" element={<AddShortNote />} />
        <Route path="/admin/interview-prep/add-subject" element={<AddInterviewSubject />}/>
        <Route path="/admin/interview-prep/:subjectId"  element={<InterviewQuestions />}/>
        <Route path="/admin/interview-prep/:subjectId/add-question" element={<AddInterviewQuestion />}/>
        <Route path="/admin/notes/view/:id" element={<ViewPdf />}/>
        <Route path="/admin/notes/text/:id" element={<ViewTextNote />}/>        
        <Route path="/admin/short-notes/view/:id" element={<ViewTextNote />}/>
        <Route path="/admin/interview-prep/view/:subjectId" element={<ViewInterviewPrep />}/>

      </Routes>
    </Router>
  );
}

export default App;
