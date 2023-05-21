
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





document.querySelectorAll('.project2').forEach(function (project) {
  project.addEventListener('click', function () {
    this.classList.toggle('show-video');
    var video = this.querySelector('video');
    if (this.classList.contains('show-video')) {
      video.play();
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    } else {
      video.pause();
      video.currentTime = 0;
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var project3_3 = document.querySelector('.project3:nth-of-type(3)');
  
  project3_3.addEventListener('click', function () {
    window.open('artb.pdf', '_blank');
  });
});


const waveElement = document.querySelector('.wave-effect');

let waveOffset = 0;
let waveSpeed = 0.05; // Säädä aallon nopeutta tarpeen mukaan

function waveAnimation() {
  waveOffset += waveSpeed;
  const waveTransform = `translateY(${Math.sin(waveOffset) * 10}px)`;
  waveElement.style.transform = waveTransform;
  
  requestAnimationFrame(waveAnimation);
}

waveAnimation();