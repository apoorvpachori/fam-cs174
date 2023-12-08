const mysql = require('mysql2');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');


const app = express();

const saltRounds = 1;
const PORT = 3001;

app.use(cors());
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

//registration logic
app.post('/register', (req, res) => {
    // Extract user info from req.body
    const { first_name, last_name, email, password } = req.body;

    // Hash the password
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            res.status(500).send('Error hashing password');
            return;
        }

        // Store user in the database
        const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
        db.query(query, [first_name, last_name, email, hash], (error, results) => {
            if (error) {
                //email set to be unique constraint in table
                res.status(500).send('Error registering user. Email may already be taken.');
            } else {
                res.status(200).send('User registered successfully');
            }
        });
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if user exists with given email
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (error, results) => {
        if (error) {
            res.status(500).send('Server problem');
            return;
        }
        // If no user is found or if more than one user is found (which shouldn't happen with unique emails)
        if (results.length !== 1) {
            res.status(401).send('Authentication failed');
            return;
        }

        const user = results[0];
        console.log(user);
        // Compare hashed password
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                res.status(500).send('Server error');
            } else if (isMatch) {
                // res.status(200).send('Login successful');
                // JWT Token generation
                const token = jwt.sign({ userId: user.user_id }, 'secret_key', { expiresIn: '1h' });
                res.json({ token });

            } else {
                // Passwords do not match
                res.status(401).send({ 'message': 'Authentication failed' });
            }
        });
    });
});

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

app.get('/user', (req, res) => {
    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token);
    if (!token) {
        return res.status(401).send({ message: 'No token provided.' });
    }

    // Verify the token
    jwt.verify(token, 'secret_key', (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Failed to authenticate token.' });
        }

        // Token is valid, get user information
        const userId = decoded.userId;
        console.log("userid is " + userId);

        db.query('SELECT first_name, last_name, email FROM users WHERE user_id = ?', [userId], (error, results) => {
            if (error) {
                return res.status(500).send({ message: 'Error fetching user data.' });
            }

            if (results.length === 0) {
                return res.status(404).send({ message: 'User not found.' });
            }

            // Return user information
            res.json(results[0]);
        });
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});