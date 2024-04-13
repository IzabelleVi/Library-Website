const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../Database/library.db');

// route to log in a user
router.post('/login', (req, res) => {
const { username, password } = req.body;

db.get('SELECT UserID FROM User WHERE Login = ? AND Password = ?', [username, password], (err, user) => {
    if (err) {
      return res.status(500).json({ error: err.message });
        }
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Set session to keep user logged in
    req.session.userId = user.id;
    res.json({ message: 'Login successful', user });    
  });
});

