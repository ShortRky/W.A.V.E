// Import Navbar component
import Navbar from '../components/navbar.js';

// Check if the navbar container exists before injecting the navbar
const navbarContainer = document.getElementById('navbar');
if (navbarContainer) {
  navbarContainer.innerHTML = Navbar();
}

// Scroll Fade-in Effect
const fadeInElements = document.querySelectorAll('.fade-in');
const fadeInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

fadeInElements.forEach(el => fadeInObserver.observe(el));

// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.floating-navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
});

// Add event listener for the About button
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        const target = event.target;
        if (target.textContent.trim() === 'About') {
            location.href = 'pages/about.html';
        }
    });
});

// Fetch users.json (could also be from an API in a real-world application)
const fetchUsersData = async () => {
    try {
        const response = await fetch('./path/to/users.json'); // Adjust path as needed
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

// Event listener for the login form
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    const users = await fetchUsersData();
    const user = users.find(user => user.username === enteredUsername && user.password === enteredPassword);

    if (user) {
        if (user.role === 'special') {
            // Special login credentials entered, store it
            localStorage.setItem('specialUser', enteredUsername);
            displaySpecialLogin(enteredUsername);  // Function to display special user UI
        } else {
            // Regular user login logic
            localStorage.setItem('user', JSON.stringify(user));
            document.getElementById('profile-section').style.display = 'block'; // Show profile
            document.getElementById('profile-name').textContent = 'Welcome, ' + user.username;
        }
    } else {
        console.log('Login failed: User not found or incorrect credentials');
    }
});