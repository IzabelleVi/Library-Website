const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../Database/library.db');

// route to change profile information
router.post('/update-profile', (req, res) => {
    const { userId } = req.session;
    const { newPassword, newEmail } = req.body;
  
    if (!userId) {
      return res.status(401).json({ error: 'User not logged in' });
    }
  
    db.run('UPDATE users SET password = ?, email = ? WHERE id = ?', [newPassword, newEmail, userId], (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      res.json({ message: 'Profile updated successfully' });
});
});