// TEXT ANIMATED
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = [
  'FULLSTACK DEVELOPER',
  'PASSIONATE IoT',
  'FAN OF DEVOPS CULTURE',
];
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
window.addEventListener('scroll', stickyElement);

// document.getElementsByClassName('nav-btn')[0].addEventListener('click', () => {
//   if (
//     document
//       .getElementsByClassName('main-carousel-projects')[0]
//       .classList.contains('carrousel-z-index')
//   ) {
//     document
//       .getElementsByClassName('main-carousel-projects')[0]
//       .classList.remove('carrousel-z-index');
//   } else {
//     document
//       .getElementsByClassName('main-carousel-projects')[0]
//       .classList.add('carrousel-z-index');
//   }
// });

// // carrousel
// const elemProjects = document.querySelector('.main-carousel-projects');
// new Flickity(elemProjects, {
//   // options
//   cellAlign: 'left',
//   contain: true,
//   wrapAround: true,
// });

// document.getElementsByClassName('nav-btn')[0].addEventListener('click', () => {
//   if (
//     document
//       .getElementsByClassName('main-carousel-achievements')[0]
//       .classList.contains('carrousel-z-index')
//   ) {
//     document
//       .getElementsByClassName('main-carousel-achievements')[0]
//       .classList.remove('carrousel-z-index');
//   } else {
//     document
//       .getElementsByClassName('main-carousel-achievements')[0]
//       .classList.add('carrousel-z-index');
//   }
// });

// // carrousel
// const elemAchievements = document.querySelector('.main-carousel-achievements');
// new Flickity(elemAchievements, {
//   // options
//   cellAlign: 'left',
//   contain: true,
//   wrapAround: true,
// });

document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener('click', function (e) {
    document.getElementById('nav-check').checked = false;
  });
});

// send email

document.getElementById('sendEmail').addEventListener('click', (e) => {
  e.preventDefault();

  const confirmSend = confirm('Are you sure you want to send this email?');

  if (!confirmSend) return;

  emailjs
    .sendForm(
      'service_tw5q45k',
      'template_cblcswh',
      '#formContact',
      'user_1bmg5PhCOzl3TTsAUAlmg'
    )
    .then(
      function (response) {
        // console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
        document.getElementById('formContact').reset();
      },
      function (error) {
        console.log('FAILED...', error);
        // alert('Email sending failed!');
      }
    );
});
