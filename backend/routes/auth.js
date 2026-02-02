const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const sql =
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err) => {
    if (err) {
      return res.status(400).json({ message: "Email already exists" });
    }
    res.json({ message: "Signup successful" });
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql =
    "SELECT id, name, email, role FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, result) => {
    if (err || result.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      message: "Login successful",
      user: result[0],
    });
  });
});

module.exports = router;
