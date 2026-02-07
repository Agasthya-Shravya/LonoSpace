const express = require("express");
const router = express.Router();
const db = require("../db");

/**
 * ADD SHORT NOTE
 * POST /api/admin/short-notes
 */
router.post("/", (req, res) => {
  const { title, description, content, coverImageUrl } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  const sql = `
    INSERT INTO short_notes
    (title, description, content, cover_image_url)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [title, description, content, coverImageUrl],
    (err, result) => {
      if (err) {
        console.error("ADD SHORT NOTE ERROR:", err);
        return res.status(500).json({ message: "DB error" });
      }

      res.status(201).json({
        message: "Short note added successfully",
        id: result.insertId
      });
    }
  );
});

/**
 * GET ALL SHORT NOTES
 * GET /api/admin/short-notes
 */
router.get("/", (req, res) => {
  const sql = `
    SELECT id, title, description, cover_image_url
    FROM short_notes
    ORDER BY created_at DESC
  `;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error("GET SHORT NOTES ERROR:", err);
      return res.status(500).json({ message: "DB error" });
    }

    res.json(rows);
  });
});

/**
 * DELETE SHORT NOTE
 * DELETE /api/admin/short-notes/:id
 */
router.delete("/:id", (req, res) => {
  const noteId = req.params.id;

  db.query(
    "DELETE FROM short_notes WHERE id = ?",
    [noteId],
    (err, result) => {
      if (err) {
        console.error("DELETE SHORT NOTE ERROR:", err);
        return res.status(500).json({ message: "DB error" });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Short note not found" });
      }

      res.json({ message: "Short note deleted successfully" });
    }
  );
});
/**
 * GET SHORT NOTE
 * GET /api/admin/short-notes/:id
 */
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    `
    SELECT title, description, content
    FROM short_notes
    WHERE id = ?
    `,
    [id],
    (err, rows) => {
      if (err) {
        console.error("GET SHORT NOTE ERROR:", err);
        return res.status(500).json({ message: "DB error" });
      }

      if (rows.length === 0) {
        return res.status(404).json({ message: "Short note not found" });
      }

      res.json(rows[0]);
    }
  );
});

module.exports = router;