// JavaScript to create falling flowers effect
document.addEventListener('DOMContentLoaded', () => {
    const png createFlower = () => {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.style.left = `${Math.random() * 100}vw`;
        flower.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration between 2s to 5s
        document.body.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 5000); // Remove the flower after it has fallen
    };

    setInterval(createFlower, 300); // Create a new flower every 300 milliseconds
});