
const container = document.querySelector('.container2');
const Frames = document.querySelectorAll('.Frame');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const container7 = document.querySelector('.container7');

const arrowLeft1 = document.getElementById('arrow-left1');
const arrowRight1 = document.getElementById('arrow-right1');
let currentIndex = 0;

arrowLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateContainerPosition();
    }
});

arrowRight.addEventListener('click', () => {
    if (currentIndex < Frames.length - 1) {
        currentIndex++;
        updateContainerPosition();
    }
});
arrowLeft1.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateContainerPositiona();
    }
});

arrowRight1.addEventListener('click', () => {
    if (currentIndex < Frames.length - 1) {
        currentIndex++;
        updateContainerPositiona();
    }
});

function updateContainerPosition() {
    const FrameWidth = Frames[0].offsetWidth;
    const newPosition = -currentIndex * FrameWidth;
    container.style.transform = `translateX(${newPosition}px)`;
}

function updateContainerPositiona() {
    const FrameWidth = Frames[0].offsetWidth;
    const newPosition = -currentIndex * FrameWidth;
    container7.style.transform = `translateX(${newPosition}px)`;
}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   // const container = document.querySelector('.container2');
    // const cards = document.querySelectorAll('.card');
    // const arrowLeft = document.getElementById('arrow-left');
    // const arrowRight = document.getElementById('arrow-right');

    // let currentIndex = 0;

    // arrowLeft.addEventListener('click', () => {
    //     if (currentIndex > 0) {
    //         currentIndex--;
    //         updateContainerPosition();
    //     }
    // });

    // arrowRight.addEventListener('click', () => {
    //     if (currentIndex < cards.length - 1) {
    //         currentIndex++;
    //         updateContainerPosition();
    //     }
    // });

    // function updateContainerPosition() {
    //     const cardWidth = cards[0].offsetWidth;
    //     const newPosition = -currentIndex * cardWidth;
    //     container.style.transform = `translateX(${newPosition}px)`;
    // }

    
  


   