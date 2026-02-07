const express = require("express");
const router = express.Router();
const db = require("../db");

/**
 * ADD QUESTION
 * POST /api/admin/interview/questions
 */
router.post("/", (req, res) => {
  const { subjectId, question, answer, difficulty } = req.body;

  if (!subjectId || !question || !answer) {
    return res.status(400).json({
      message: "Subject, question and answer are required"
    });
  }

  const sql = `
    INSERT INTO interview_questions
    (subject_id, question, answer, difficulty)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [subjectId, question, answer, difficulty || "Easy"],
    (err, result) => {
      if (err) {
        console.error("ADD QUESTION ERROR:", err);
        return res.status(500).json({ message: "DB error" });
      }

      res.status(201).json({
        message: "Question added successfully",
        id: result.insertId
      });
    }
  );
});

/**
 * GET QUESTIONS BY SUBJECT
 * GET /api/admin/interview/questions/:subjectId
 */
router.get("/:subjectId", (req, res) => {
  db.query(
    `
    SELECT * FROM interview_questions
    WHERE subject_id = ?
    ORDER BY created_at DESC
    `,
    [req.params.subjectId],
    (err, rows) => {
      if (err) {
        console.error("GET QUESTIONS ERROR:", err);
        return res.status(500).json({ message: "DB error" });
      }

      res.json(rows);
    }
  );
});

/**
 * DELETE QUESTION
 * DELETE /api/admin/interview/questions/:id
 */
router.delete("/:id", (req, res) => {
  db.query(
    "DELETE FROM interview_questions WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.error("DELETE QUESTION ERROR:", err);
        return res.status(500).json({ message: "DB error" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Question not found" });
      }

      res.json({ message: "Question deleted" });
    }
  );
});

module.exports = router;
