document.addEventListener('DOMContentLoaded', (event) => {
    const words = ['Artificial Intelligence', 'Machine Learning', 'Cybersecurity','Privacy','Digital Forensics'];
    let currentIndex = 0;
    const changingWordElement = document.getElementById('changing-word-elements');

    setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;
        changingWordElement.textContent = words[currentIndex];
    }, 2000); // Change word every 2 seconds
});
