const express = require("express");
const router = express.Router();
const db = require("../db");

/**
 * GET USERS (with pagination)
 * GET /api/admin/users?page=1&limit=5
 */
router.get("/", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const offset = (page - 1) * limit;

  const countQuery = "SELECT COUNT(*) as total FROM users";
  const dataQuery = `
    SELECT id, name, email, role, is_active, created_at
    FROM users
    ORDER BY created_at DESC
    LIMIT ? OFFSET ?
  `;

  db.query(countQuery, (err, countResult) => {
    if (err) return res.status(500).json({ message: "DB error" });

    const total = countResult[0].total;

    db.query(dataQuery, [limit, offset], (err2, rows) => {
      if (err2) return res.status(500).json({ message: "DB error" });

      res.json({
        users: rows,
        total,
        page,
        totalPages: Math.ceil(total / limit)
      });
    });
  });
});

/**
 * TOGGLE USER STATUS
 * PATCH /api/admin/users/:id/status
 */
router.patch("/:id/status", (req, res) => {
  const userId = req.params.id;

  // block admin from being disabled
  db.query(
    "SELECT role FROM users WHERE id = ?",
    [userId],
    (err, result) => {
      if (err) return res.status(500).json({ message: "DB error" });

      if (result.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      if (result[0].role === "ADMIN") {
        return res
          .status(403)
          .json({ message: "Admin cannot be disabled" });
      }

      db.query(
        `
        UPDATE users
        SET is_active = NOT is_active
        WHERE id = ?
        `,
        [userId],
        (err2) => {
          if (err2) return res.status(500).json({ message: "DB error" });

          res.json({ message: "User status updated" });
        }
      );
    }
  );
});

module.exports = router;
