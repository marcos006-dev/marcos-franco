// TEXT ANIMATED
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['BACKEND DEVELOPER', 'FRONTEND DEVELOPER', 'WEB DEVELOPER'];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);

  // hide preloader and show main content
  const divPreLoader = document.getElementById('container-pre-loader');
  document
    .getElementById('site-portfolio')
    .classList.add('animate__bounceInLeft');
  divPreLoader.parentNode.removeChild(divPreLoader);
});

// SCROLL ANIMATED

function stickyElement(e) {
  const header = document.querySelector('.header');
  const headerHeight = getComputedStyle(header).height.split('px')[0];
  const navbar = document.querySelector('.nav');
  const scrollValue = window.scrollY;
  //   console.log(scrollValue);
  if (scrollValue > headerHeight - 40) {
    navbar.classList.add('is-fixed');
  } else if (scrollValue === 0) {
    navbar.classList.remove('is-fixed');
  }
}

document.getElementsByClassName('nav-btn')[0].addEventListener('click', () => {
  if (
    document
      .getElementsByClassName('main-carousel')[0]
      .classList.contains('carrousel-z-index')
  ) {
    document
      .getElementsByClassName('main-carousel')[0]
      .classList.remove('carrousel-z-index');
  } else {
    document
      .getElementsByClassName('main-carousel')[0]
      .classList.add('carrousel-z-index');
  }
});

window.addEventListener('scroll', stickyElement);

// carrousel
const elem = document.querySelector('.main-carousel');
const flkty = new Flickity(elem, {
  // options
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
});

// hide navbar

// ;

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener('click', function (e) {
    document.getElementById('nav-check').checked = false;
  });
});
