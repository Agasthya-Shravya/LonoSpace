const express = require("express");
const router = express.Router();
const db = require("../db");

/* =========================
   SUBJECTS
========================= */

/**
 * GET all interview subjects
 * GET /api/admin/interview/subjects
 */
router.get("/subjects", (req, res) => {
  db.query(
    "SELECT * FROM interview_subjects ORDER BY created_at DESC",
    (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "DB error" });
      }
      res.json(rows);
    }
  );
});

/**
 * ADD subject
 * POST /api/admin/interview/subjects
 */
router.post("/subjects", (req, res) => {
  const { name, description } = req.body;

  db.query(
    `
    INSERT INTO interview_subjects (name, description)
    VALUES (?, ?)
    `,
    [name, description],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "DB error" });
      }
      res.json({ message: "Subject added" });
    }
  );
});

/**
 * DELETE subject
 */
router.delete("/subjects/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM interview_subjects WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ message: "DB error" });
      res.json({ message: "Subject deleted" });
    }
  );
});

/* =========================
   QUESTIONS
========================= */

/**
 * GET questions by subject
 * GET /api/admin/interview/questions/:subjectId
 */
router.get("/questions/:subjectId", (req, res) => {
  const { subjectId } = req.params;

  db.query(
    `
    SELECT * FROM interview_questions
    WHERE subject_id = ?
    ORDER BY id DESC
    `,
    [subjectId],
    (err, rows) => {
      if (err) return res.status(500).json({ message: "DB error" });
      res.json(rows);
    }
  );
});

/**
 * ADD question
 * POST /api/admin/interview/questions
 */
router.post("/questions", (req, res) => {
  const { subjectId, question, answer, difficulty } = req.body;

  db.query(
    `
    INSERT INTO interview_questions
    (subject_id, question, answer, difficulty)
    VALUES (?, ?, ?, ?)
    `,
    [subjectId, question, answer, difficulty],
    (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "DB error" });
      }
      res.json({ message: "Question added" });
    }
  );
});

/**
 * DELETE question
 */
router.delete("/questions/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM interview_questions WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json({ message: "DB error" });
      res.json({ message: "Question deleted" });
    }
  );
});

/* =========================
   VIEW MODE (READ-ONLY)
========================= */

/**
 * VIEW interview prep (clean read mode)
 * GET /api/admin/interview/view/:subjectId
 */
router.get("/view/:subjectId", (req, res) => {
  const { subjectId } = req.params;

  db.query(
    `
    SELECT 
      q.id,
      q.question,
      q.answer,
      q.difficulty,
      s.name AS subject
    FROM interview_questions q
    JOIN interview_subjects s ON q.subject_id = s.id
    WHERE q.subject_id = ?
    ORDER BY q.id ASC
    `,
    [subjectId],
    (err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "DB error" });
      }
      res.json(rows);
    }
  );
});

module.exports = router;
