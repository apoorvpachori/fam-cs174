const mysql = require('mysql2');
const express = require('express');

const app = express();

const PORT = 3001;

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'poweruser',
    password: 'password',
    database: 'mydb'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});
// app.post('/register', (req, res) => {
//     // Extract user info from req.body
//     // Hash the password
//     // Store user in the database
// });

// app.post('/login', (req, res) => {
//     // Check user credentials
//     // Compare hashed password
// });

app.get('/', (req, res) => {
    db.query('SELECT * FROM users;', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Server error');
        } else {
            res.json(results);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});