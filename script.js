document.addEventListener('DOMContentLoaded', (event) => {
    const words = ['Artificial Intelligence', 'Machine Learning', 'Cybersecurity','Privacy','Digital Forensics'];
    let currentIndex = 0;
    const changingWordElement = document.getElementById('changing-word-elements');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;
        changingWordElement.textContent = words[currentIndex];
    }, 2000); // Change word every 2 seconds
});
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('a');

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
});
