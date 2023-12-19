const container = document.querySelector('.container5');
const frames = document.querySelectorAll('.Frame');
const arrowLeft = document.getElementById('arrow-left1');
const arrowRight = document.getElementById('arrow-right1');

let currentIndex = 0;

arrowLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateContainerPosition();
    }
});

arrowRight.addEventListener('click', () => {
    if (currentIndex < frames.length - 1) {
        currentIndex++;
        updateContainerPosition();
    }
});

function updateContainerPosition() {
    const frameWidth = frames[0].offsetWidth;
    const newPosition = -currentIndex * frameWidth;
    container.style.transform = `translateX(${newPosition}px)`;
}
