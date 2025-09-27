document.addEventListener('DOMContentLoaded', () => {
    // --- Text Changer Logic ---
    const words = ['Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'Privacy', 'Digital Forensics'];
    let currentIndex = 0;
    const changingWordElement = document.getElementById('changing-word-elements');

    if (changingWordElement) {
        // Initialize with the first word (already in HTML, but good practice)
        changingWordElement.textContent = words[currentIndex];

        // Set up the interval to change the word every 2 seconds (2000ms)
        setInterval(() => {
            currentIndex = (currentIndex + 1) % words.length;
            changingWordElement.textContent = words[currentIndex];
        }, 2000);
    }

    // --- Mobile Menu Logic ---
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : []; // Check for existence

    if (navToggle && mobileMenu) {
        // Function to close the menu
        const closeMenu = () => {
            mobileMenu.classList.remove('open');
            navToggle.classList.remove('active');
        };

        // Toggle menu on button click
        navToggle.addEventListener('click', () => {
            // Toggle the 'open' class on the menu for visibility
            mobileMenu.classList.toggle('open');
            // Toggle the 'active' class on the hamburger for the 'X' animation
            navToggle.classList.toggle('active');
        });

        // Close menu when a link is clicked (for navigation)
        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});
