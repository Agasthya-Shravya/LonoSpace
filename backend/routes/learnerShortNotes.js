const express = require("express");
const router = express.Router();
const db = require("../db");


router.get("/short-notes", (req, res) => {
  const sql = `
    SELECT 
      id,
      title,
      description,
      content,
      cover_image_url,
      view_count,
      created_at
    FROM short_notes
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


router.put("/short-notes/:id/view", (req, res) => {
  const { id } = req.params;
  console.log("Incrementing view for short note:", id);

  const sql =
    "UPDATE short_notes SET view_count = view_count + 1 WHERE id = ?";

  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false });
    }

    console.log("Affected rows:", result.affectedRows);
    res.json({ success: true });
  });
});




module.exports = router;
