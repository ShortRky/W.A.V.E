export default function Navbar() {
  return `
    <nav class="floating-navbar">
        <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="../pages/about.html">About</a></li>
            <li><a href="../pages/features.html">Features</a></li>
            <li><a href="../pages/vision.html">Vision</a></li>
            <li><a href="../pages/signup.html">Join the Wave</a></li>
        </ul>
    </nav>
  `;
}

// Check if the navbar container exists before injecting the navbar
const navbarContainer = document.getElementById('navbar');
if (navbarContainer) {
  navbarContainer.innerHTML = Navbar();
}