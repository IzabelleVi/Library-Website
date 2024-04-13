const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../Database/library.db');

// Route to get profile info.
router.get('/profile', (req, res) => {
    const userId = req.session.userId;

    // Get user profile
    db.get('SELECT Name, Email, Login AS Username FROM User WHERE UserID = ?', [userId], (err, profile) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!profile) {
            return res.status(401).json({ error: 'Profile not found' });
        }

        // Send profile info back
        res.json(profile);
    });
});

module.exports = router;
