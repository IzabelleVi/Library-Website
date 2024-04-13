const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../Database/library.db');


  // route for user registration
router.post('/register', (req, res) => {
    const { name, email, username, password, adress } = req.body;
  
    db.run('INSERT INTO User (Name, Email, Login, Password, Adress) VALUES (?, ?, ?, ?, ?)', [name, email, username, password, adress], function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      res.json({ message: 'User registered successfully', userId: this.lastID });

    });
});