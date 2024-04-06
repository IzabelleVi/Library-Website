const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 by default

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('library.db');

db.serialize(() => {
    // Example query to create a 'books' table (This one is already made, please don't run it again, this is just an example of how to use it.)
    db.run(`CREATE TABLE IF NOT EXISTS Books (
        id INTEGER PRIMARY KEY,
        title TEXT,
        author TEXT,
        genre TEXT,
        year INTEGER,
        cover TEXT,
        plot TEXT
    )`);

    // Example query to insert a book into the 'books' table (Again, this one is already made, please don't run it again, this is just an example of how to use it.)
    const insertBookQuery = `INSERT INTO books (title, author, genre, year, cover, plot) 
                             VALUES (?, ?, ?, ?, ?, ?)`;
    db.run(insertBookQuery, ['Book Title', 'Author Name', 'Fiction', 2022, 'cover.jpg', 'Plot summary']);
});

// Close the database connection when the server is stopped
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Closed the database connection.');
        process.exit();
    });
});