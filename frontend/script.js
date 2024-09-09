document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error('Error:', error));
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error('Error:', error));
});

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const trip = document.getElementById('trip').value;
    const date = document.getElementById('date').value;

    fetch('http://localhost:3000/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trip, date })
    })
    .then(response => response.json())
    .then(data => alert(`Booking ID: ${data.bookingId}`))
    .catch(error => console.error('Error:', error));
});

document.getElementById('cancelForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const bookingId = document.getElementById('bookingId').value;

    fetch('http://localhost:3000/cancel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingId })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error('Error:', error));
});

document.getElementById('overviewButton').addEventListener('click', function() {
    fetch('http://localhost:3000/overview')
    .then(response => response.json())
    .then(data => {
        const overviewResult = document.getElementById('overviewResult');
        overviewResult.innerHTML = JSON.stringify(data.bookings, null, 2);
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('pricingButton').addEventListener('click', function() {
    fetch('http://localhost:3000/pricing')
    .then(response => response.json())
    .then(data => {
        const pricingResult = document.getElementById('pricingResult');
        pricingResult.innerHTML = data.pricing;
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('airportsButton').addEventListener('click', function() {
    fetch('http://localhost:3000/airports')
    .then(response => response.json())
    .then(data => {
        const airportsResult = document.getElementById('airportsResult');
        airportsResult.innerHTML = data.airports.join(', ');
    })
    .catch(error => console.error('Error:', error));
});
