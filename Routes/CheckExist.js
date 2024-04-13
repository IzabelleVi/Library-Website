const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../Database/library.db');

// Route for CHeck if profile already exist
router.post('/checkExist', (req, res) => {
    const { username } = req.body;

    db.get('SELECT * FROM User WHERE Login = ?', [username], (err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (user) {
            return res.status(409).send("Dit profiel bestaat al.");
        }
    });
});
