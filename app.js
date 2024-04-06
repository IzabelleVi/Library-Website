const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const checkLogin = require('Routes/checklogin.js');
const displayBooks = require('Routes/displaybooks.js');
const updateProfile = require('Routes/updateprofile.js');
const login = require('Routes/login.js');
const register = require('Routes/register.js');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});