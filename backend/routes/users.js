const express = require("express");
const router = express.Router();
const db = require("../db");

/**
 * GET ALL USERS
 * GET /api/admin/users
 */
router.get("/", (req, res) => {
  db.query(
    "SELECT id, name, email, role, created_at FROM users",
    (err, rows) => {
      if (err) {
        console.error("GET USERS ERROR:", err);
        return res.status(500).json({ message: "DB error" });
      }
      res.json(rows);
    }
  );
});

/**
 * DELETE USER (only learners)
 * DELETE /api/admin/users/:id
 */
router.delete("/:id", (req, res) => {
  const userId = req.params.id;

  // prevent deleting admin
  db.query(
    "SELECT role FROM users WHERE id = ?",
    [userId],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "DB error" });
      }

      if (result.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      if (result[0].role === "ADMIN") {
        return res
          .status(403)
          .json({ message: "Admin cannot be deleted" });
      }

      db.query(
        "DELETE FROM users WHERE id = ?",
        [userId],
        (err2) => {
          if (err2) {
            console.error(err2);
            return res.status(500).json({ message: "DB error" });
          }

          res.json({ message: "User deleted" });
        }
      );
    }
  );
});

module.exports = router;
