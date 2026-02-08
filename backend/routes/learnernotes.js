const express = require("express");
const router = express.Router();
const db = require("../db");

/* ===============================
   1. GET ALL NOTES (list page)
   =============================== */
router.get("/notes", (req, res) => {
  const sql = `
    SELECT id, title, description, type, cover_image_url, view_count, created_at
    FROM notes
    ORDER BY created_at DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, notes: [] });
    }
    res.json({ success: true, notes: results });
  });
});

/* ===============================
   2. GET SINGLE TEXT NOTE (VIEW)
   👇👇 THIS IS THE LINE YOU ASKED ABOUT
   =============================== */
router.get("/notes/text/:id", (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT id, title, content, view_count, created_at
    FROM notes
    WHERE id = ? AND type = 'TEXT'
  `;

  db.query(sql, [id], (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).json({ message: "Text note not found" });
    }

    res.json(results[0]);
  });
});

/* ===============================
   3. GET PDF NOTE (VIEW)
   =============================== */
router.get("/notes/:id/pdf", (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT pdf_data, pdf_name, pdf_type
    FROM notes
    WHERE id = ? AND type = 'PDF'
  `;

  db.query(sql, [id], (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).send("PDF not found");
    }

    const pdf = results[0];
    res.setHeader("Content-Type", pdf.pdf_type);
    res.setHeader(
      "Content-Disposition",
      `inline; filename="${pdf.pdf_name}"`
    );
    res.send(pdf.pdf_data);
  });
});

/* ===============================
   4. INCREMENT VIEW COUNT
   =============================== */
router.put("/notes/:id/view", (req, res) => {
  const { id } = req.params;

  const sql = `
    UPDATE notes
    SET view_count = view_count + 1
    WHERE id = ?
  `;

  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ success: false });
    res.json({ success: true });
  });
});

module.exports = router;
