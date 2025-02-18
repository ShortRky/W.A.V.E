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

// Conditionally show sidebar on certain pages (example pages)
const currentPage = window.location.pathname;

if (currentPage === '/' || currentPage === '/index.html') {
    // Show sidebar for homepage if needed
    document.getElementById('sidebar').classList.add('hide');
} else {
    // Hide sidebar for other pages
    document.getElementById('sidebar').classList.remove('show');
}

// Smooth Scroll for Navigation (Future Implementation)
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
});

// Redirect to about page on button click in the navbar
document.querySelector('.navbar .about-button').addEventListener('click', () => {
    window.location.href = 'pages/about.html';
});
