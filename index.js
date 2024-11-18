document.addEventListener('DOMContentLoaded', function() {
    const message = document.querySelector('.message');
    message.style.animation = 'pulse 2s infinite';

    const images = document.querySelectorAll('.images img');
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = '1';
        }, index * 1000);
    });
});
