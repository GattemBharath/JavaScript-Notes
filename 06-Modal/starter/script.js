'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');

// const btnsOpenModal = document.querySelector('.show-modal');
// console.log(btnsOpenModal); // <button class="show-modal">Show modal 1</button>

//         -------------- Limitation of query selector method ---------------
// Whenever we use query selector with a selector, which actually matches multiple elements,
// only the first one will get selected.
// So we use querySelectorAll() method.

const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = function () {
  // console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // modal.style.display = 'block'; instead of line 21
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// for ✖ button to work
btnsCloseModal.addEventListener('click', closeModal);
// when we click outside, the window will be closed
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
