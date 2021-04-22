
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

// document.querySelector('.sidebar').style.background = '#427f97'

const h1ToChange = document.querySelector('.myPort')

h1ToChange.innerHTML = h1ToChange.innerText
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