const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../Database/library.db');

// route to bring a user to  login page if not logged in
router.post('/checklogin', (req, res) => {
if (!userId) {
    window.location.href = '../Views/register.html';;
    }
});
