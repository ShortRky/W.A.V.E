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
