// 1. Alert button ki functionality
const alertBtn = document.getElementById('alert-btn');

alertBtn.addEventListener('click', function() {
    alert("Button click ho gaya! JavaScript successfully kaam kar rahi hai.");
});

// 2. Dark Mode Toggle functionality
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    // Button ka text change karne ke liye
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }
});
