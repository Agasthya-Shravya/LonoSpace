import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./admin/AdminDashboard";
import LearnerDashboard from "./learner/Dashboard";
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
import LearnerNotes from "./learner/LearnerNotes";
import LearnerShortNotes from "./learner/LearnerShortNotes";
import LearnerInterviewDashboard from "./learner/LearnerInterviewPrep";
import LearnerInterviewFlipCards from "./learner/LearnerInterviewFlipCards"
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
        <Route path="/admin/interview-prep/:subjectId"  element={<InterviewQuestions role="admin"/>}/>
        <Route path="/interview-prep/:subjectId"  element={<InterviewQuestions role="learner" />}/>
        <Route path="/admin/interview-prep/:subjectId/add-question" element={<AddInterviewQuestion />}/>
        <Route path="/admin/notes/view/:id" element={<ViewPdf role="admin"/>}/>
        <Route path="/notes/view/:id" element={<ViewPdf role="learner"/>}/>        
        <Route path="/admin/notes/text/:id" element={<ViewTextNote role="admin"/>}/>
        <Route path="/notes/text/:id" element={<ViewTextNote role="learner"/>}/>        
        <Route path="/admin/short-notes/view/:id" element={<ViewTextNote role="admin"/>}/>
        <Route path="/short-notes/view/:id" element={<ViewTextNote role="learner"/>}/>
        <Route path="/admin/interview-prep/view/:subjectId" element={<ViewInterviewPrep />}/>
        <Route path="/learner/notes" element={<LearnerNotes />} />
        <Route path="/learner/short-notes" element={<LearnerShortNotes/>}/>
        <Route path="/learner/interview-prep" element={<LearnerInterviewDashboard/>}/>
        <Route path="/learner/interview-prep/:subjectId" element={<LearnerInterviewFlipCards />}/>
      </Routes>
    </Router>
  );
}

export default App;
