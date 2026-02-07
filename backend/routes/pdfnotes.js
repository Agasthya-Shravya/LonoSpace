const express = require("express");
const router = express.Router();
const db = require("../db");
const upload = require("../multer");


router.post("/add-pdf", upload.single("pdf"), (req, res) => {
  try {
    const { title, description, coverImageUrl } = req.body;
    const pdf = req.file;

    if (!pdf) {
      return res.status(400).json({ message: "PDF file is required" });
    }

    const sql = `
      INSERT INTO notes
      (title, description, type, pdf_data, pdf_name, pdf_type, cover_image_url)
      VALUES (?, ?, 'PDF', ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        title,
        description,
        pdf.buffer,          // BLOB
        pdf.originalname,
        pdf.mimetype,
        coverImageUrl
      ],
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "DB error" });
        }

        res.status(201).json({
          message: "PDF note saved successfully",
          id: result.insertId
        });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/", (req, res) => {
  const sql = `
    SELECT id, title, description, type, cover_image_url
    FROM notes
    ORDER BY created_at DESC
  `;

  db.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "DB error" });
    }
    res.json(rows);
  });
});


router.delete("/:id", (req, res) => {
  const noteId = req.params.id;

  console.log("DELETE hit for ID:", noteId);

  const sql = "DELETE FROM notes WHERE id = ?";

  db.query(sql, [noteId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "DB error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({ message: "Note deleted successfully" });
  });
});
router.get("/view/:id", (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT pdf_data, pdf_name
    FROM notes
    WHERE id = ? AND type = 'PDF'
  `;

  db.query(sql, [id], (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).send("DB error");
    }

    if (rows.length === 0) {
      return res.status(404).send("PDF not found");
    }

    const pdfBuffer = rows[0].pdf_data;

    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline",
      "Content-Length": pdfBuffer.length,
      "Accept-Ranges": "bytes"
    });

    res.end(pdfBuffer);
  });
});
/**
 * GET TEXT NOTE
 * GET /api/admin/notes/text/:id
 */
router.get("/text/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    `
    SELECT title, description, content
    FROM notes
    WHERE id = ? AND type = 'TEXT'
    `,
    [id],
    (err, rows) => {
      if (err) return res.status(500).json({ message: "DB error" });
      if (rows.length === 0)
        return res.status(404).json({ message: "Note not found" });

      res.json(rows[0]);
    }
  );
});

module.exports = router;
