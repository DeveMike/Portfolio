
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let scrollAmount = 0;
let projectWidth = carousel.querySelector('.project').clientWidth;

function checkControls() {
  if (scrollAmount === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  if (scrollAmount + carousel.clientWidth === carousel.scrollWidth) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

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


