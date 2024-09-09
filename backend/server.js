const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory data storage
let bookings = [];
let users = [];

// Register endpoint
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.status(201).json({ message: 'User registered' });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Booking endpoint
app.post('/book', (req, res) => {
    const { trip, date } = req.body;
    const bookingId = bookings.length + 1;
    bookings.push({ bookingId, trip, date });
    res.status(201).json({ message: 'Booking successful', bookingId });
});

// Cancel booking endpoint
app.post('/cancel', (req, res) => {
    const { bookingId } = req.body;
    bookings = bookings.filter(b => b.bookingId !== bookingId);
    res.status(200).json({ message: 'Booking cancelled' });
});

// Get trip overview endpoint
app.get('/overview', (req, res) => {
    res.status(200).json({ bookings });
});

// Get pricing endpoint
app.get('/pricing', (req, res) => {
    // Return dummy pricing
    res.status(200).json({ pricing: 'Pricing details' });
});

// Get airports in Nigeria endpoint
app.get('/airports', (req, res) => {
    // Return dummy airports
    res.status(200).json({ airports: ['Lagos', 'Abuja', 'Port Harcourt'] });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
