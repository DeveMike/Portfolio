// Määritetään karusellin, edellisen ja seuraavan painikkeen elementit
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Alustetaan vieritysmäärä ja projektin leveys
let scrollAmount = 0;
let projectWidth = carousel.querySelector('.project').clientWidth;

// Tarkistaa kontrollipainikkeet ja asettaa ne joko käytettäviksi tai ei-käytettäviksi
function checkControls() {
  // Jos vieritysmäärä on 0, poistaa edellisen painikkeen käytöstä
  if (scrollAmount === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  // Jos vieritysmäärä plus karusellin leveys on yhtä suuri kuin karusellin vieritysleveys, poistaa seuraavan painikkeen käytöstä
  if (scrollAmount + carousel.clientWidth === carousel.scrollWidth) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

// Lisää tapahtumankuuntelijan seuraava-painikkeelle, joka vierittää karusellia eteenpäin
nextBtn.addEventListener('click', function() {
  carousel.scrollBy({
    left: projectWidth,
    top: 0,
    behavior: 'smooth'
  });
  scrollAmount += projectWidth;
  checkControls();
});

// Lisää tapahtumankuuntelijan edellinen-painikkeelle, joka vierittää karusellia taaksepäin
prevBtn.addEventListener('click', function() {
  carousel.scrollBy({
    left: -projectWidth,
    top: 0,
    behavior: 'smooth'
  });
  scrollAmount -= projectWidth;
  checkControls();
});

// Lisää tapahtumankuuntelijat projekti2-elementeille
document.querySelectorAll('.project2').forEach(function (project) {
  project.addEventListener('click', function () {
    this.classList.toggle('show-video');
    var video = this.querySelector('video');
    // Tarkistaa, onko show-video-luokka aktiivinen, ja toistaa tai keskeyttää videon ja hallitsee näytön kokoa
    if (this.classList.contains('show-video')) {
      video.play();
      // Tarkistaa, mitä täysnäyttömetodia selain tukee ja käyttää sitä
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
      // Poistuu täysnäyttötilasta selainyhteensopivalla tavalla
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

// Lisää tapahtumankuuntelijan projekti3-elementin kolmannelle esiintymälle
document.addEventListener('DOMContentLoaded', function () {
  var project3_3 = document.querySelector('.project3:nth-of-type(3)');
  
  project3_3.addEventListener('click', function () {
    window.open('docs/artb.pdf', '_blank');  // Avaa PDF-tiedoston uuteen välilehteen napsautettaessa
  });
});

// Määritetään aaltoelementti ja aallon parametrit
const waveElement = document.querySelector('.wave-effect');

let waveOffset = 0;
let waveSpeed = 0.05; // Säädä aallon nopeutta tarpeen mukaan

// Luo aaltoanimaation, joka muuttaa aaltoelementin transform-ominaisuutta
function waveAnimation() {
  waveOffset += waveSpeed;
  const waveTransform = `translateY(${Math.sin(waveOffset) * 10}px)`;
  waveElement.style.transform = waveTransform;
  
  requestAnimationFrame(waveAnimation);  // Kutsuu waveAnimation-funktiota jokaisella animaatiokierroksella, luoden jatkuvan aaltoefektin
}

waveAnimation();  // Aloittaa aaltoanimaation
