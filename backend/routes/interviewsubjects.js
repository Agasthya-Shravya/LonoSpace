const express = require("express");
const router = express.Router();
const db = require("../db");

/**
 * ADD SUBJECT
 * POST /api/admin/interview/subjects
 */
router.post("/", (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Subject name is required" });
  }

  const sql = `
    INSERT INTO interview_subjects (name, description)
    VALUES (?, ?)
  `;

  db.query(sql, [name, description], (err, result) => {
    if (err) {
      console.error("ADD SUBJECT ERROR:", err);
      return res.status(500).json({ message: "DB error" });
    }

    res.status(201).json({
      message: "Subject added successfully",
      id: result.insertId
    });
  });
});

/**
 * GET ALL SUBJECTS
 * GET /api/admin/interview/subjects
 */
router.get("/", (req, res) => {
  db.query(
    "SELECT * FROM interview_subjects ORDER BY created_at DESC",
    (err, rows) => {
      if (err) {
        console.error("GET SUBJECTS ERROR:", err);
        return res.status(500).json({ message: "DB error" });
      }

      res.json(rows);
    }
  );
});

/**
 * DELETE SUBJECT
 * DELETE /api/admin/interview/subjects/:id
 */
router.delete("/:id", (req, res) => {
  db.query(
    "DELETE FROM interview_subjects WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        console.error("DELETE SUBJECT ERROR:", err);
        return res.status(500).json({ message: "DB error" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Subject not found" });
      }

      res.json({ message: "Subject deleted" });
    }
  );
});

module.exports = router;
