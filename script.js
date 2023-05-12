
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let scrollAmount = 0;
let projectWidth = carousel.querySelector('.project').clientWidth;

nextBtn.addEventListener('click', function() {
  carousel.scrollBy({
    left: projectWidth,
    top: 0,
    behavior: 'smooth'
  });
  scrollAmount += projectWidth;
  checkControls();
});

prevBtn.addEventListener('click', function() {
  carousel.scrollBy({
    left: -projectWidth,
    top: 0,
    behavior: 'smooth'
  });
  scrollAmount -= projectWidth;
  checkControls();
});

