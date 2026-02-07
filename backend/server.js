const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const textNotesRoutes = require("./routes/textnotes");
const adminNotesRoutes = require("./routes/pdfnotes");
const app = express();
const shortNotesRoutes = require("./routes/shortnotes");
const interviewSubjectsRoutes = require("./routes/interviewSubjects");
const interviewQuestionsRoutes = require("./routes/interviewQuestions");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/admin/notes", adminNotesRoutes);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.use("/api/admin/text-notes", textNotesRoutes);
app.use("/api/admin/short-notes", shortNotesRoutes);
app.use("/api/admin/interview/subjects", interviewSubjectsRoutes);
app.use("/api/admin/interview/questions", interviewQuestionsRoutes);
