const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {

  const { title, description, coverImageUrl, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content required" });
  }

  const sql = `
    INSERT INTO notes
    (title, description, type, content, cover_image_url)
    VALUES (?, ?, 'TEXT', ?, ?)
  `;

  db.query(
    sql,
    [title, description, content, coverImageUrl],
    (err, result) => {
      if (err) {
        console.error("DB ERROR:", err);
        return res.status(500).json({ message: "DB error", err });
      }

      res.status(201).json({
        message: "Text note added",
        id: result.insertId
      });
    }
  );
});

module.exports = router;
