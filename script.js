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
    const navLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

    if (navToggle && mobileMenu) {
        const updateMenuState = (isOpen) => {
            mobileMenu.classList.toggle('open', isOpen);
            navToggle.classList.toggle('active', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            document.body.classList.toggle('menu-open', isOpen);
        };

        const closeMenu = () => updateMenuState(false);

        navToggle.addEventListener('click', () => {
            const shouldOpen = !mobileMenu.classList.contains('open');
            updateMenuState(shouldOpen);
        });

        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }
});
