
'use strict';

/**
 * Handle mobile menu functionality to hide/reveal sidebar on mobile layouts
 */
const body = document.querySelector('body');
let headerBtnClicked = false;

document.querySelector('#menu-icon').addEventListener('click', e => {
  !headerBtnClicked ? body.style.transform = 'translateX(300px)' : body.style.transform = 'translateX(0px)';
  return headerBtnClicked = !headerBtnClicked;
});


if (document.querySelector('.myPort')) {
  const wordToAnimate = document.querySelector('.myPort')
  animateLetterOver(wordToAnimate)
}

if (document.querySelector('.project-title')) {
  const wordToAnimate = document.querySelector('.project-title')
  animateLetterOver(wordToAnimate)
}


// animation for headers
function animateLetterOver(wordToAnimate) {
  wordToAnimate.innerHTML = wordToAnimate.innerText
    .split('')
    .map((letter, idx) => `<span class='spanJump'>${letter}</span>`)
    .join('')

  const spans = document.querySelectorAll('.spanJump')

  spans.forEach(span => {
    span.addEventListener('mouseover', e => {
      span.classList.add('changIt')
    })
    span.addEventListener('mouseleave', e => {
      setTimeout(() => span.classList.remove('changIt'), 100)
    })
    span.addEventListener('click', e => {
      spans.forEach(span => {
      })
    })
  })
}





//animation for project photos
const boxes = document.querySelectorAll('.project-img');

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4
  boxes.forEach(box => {
    // box.classList.add('show')
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}