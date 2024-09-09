document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add registration logic
    alert('Registered successfully!');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add login logic
    alert('Logged in successfully!');
});

document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add booking logic
    alert('Ticket booked!');
});

document.getElementById('cancelForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add cancel booking logic
    alert('Booking cancelled!');
});

document.getElementById('overviewButton').addEventListener('click', function() {
    // Fetch and display trip overview
});

document.getElementById('pricingButton').addEventListener('click', function() {
    // Fetch and display pricing
});

document.getElementById('airportsButton').addEventListener('click', function() {
    // Fetch and display airports
});
