import Navbar from '../components/navbar.js';

// Check if the navbar container exists before injecting the navbar
const navbarContainer = document.getElementById('navbar');
if (navbarContainer) {
  navbarContainer.innerHTML = Navbar();
}