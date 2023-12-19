const container = document.querySelector('.container3');
const tiles = document.querySelectorAll('.tile');
const arrowLeft2 = document.getElementById('arrow-left2');
const arrowRight2 = document.getElementById('arrow-right2');

let currentIndex = 0;

arrowLeft2.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateContainerPosition();
    }
});

arrowRight2.addEventListener('click', () => {
    if (currentIndex < tiles.length - 1) {
        currentIndex++;
        updateContainerPosition();
    }
});

function updateContainerPosition() {
    const tileWidth = tiles[0].offsetWidth;
    const newPosition = -currentIndex * tileWidth;
    container.style.transform = `translateX(${newPosition}px)`;
}

function scrollToTile(index) {
    tiles[index].scrollIntoView({ behavior: 'smooth' });
}

