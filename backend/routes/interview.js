const express = require("express");
const router = express.Router();
const db = require("../db");

/**
 * GET all interview subjects
 */
router.get("/interview/subjects", (req, res) => {
  const sql = `
    SELECT id, name, description
    FROM interview_subjects
    ORDER BY name
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ subjects: [] });
    }

    res.json({ subjects: results });
  });
});


 router.get("/questions/:subjectId", (req, res) => {
  const { subjectId } = req.params;
  const { difficulty } = req.query;

  let sql = `
    SELECT id, question, answer, difficulty
    FROM interview_questions
    WHERE subject_id = ?
  `;
  const params = [subjectId];

  if (difficulty) {
    sql += " AND difficulty = ?";
    params.push(difficulty);
  }

  sql += " ORDER BY created_at DESC";

  db.query(sql, params, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ questions: [] });
    }

    res.json({ questions: results });
  });
});
  module.exports=router