'use strict';
const head = document.querySelector('.js_head');
const face = document.querySelector('.js_face');
const page = document.querySelector('.js_page');



head.addEventListener('click', (event) => {
  face.innerHTML = ';)';
});

// head.onmouseout = (event) => {
//   face.innerHTML = ':)';
// };

page.addEventListener('mouseover', (event) => {
    face.innerHTML = ':)';
});