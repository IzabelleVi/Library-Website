const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../Database/library.db');

  // route to display books
router.get('/books', (req, res) => {
    db.all('SELECT Title, Author, Cover FROM Book', (err, books) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      res.json({ books });
    });
});