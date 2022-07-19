let cancelX = document.getElementById('cancelX');
let menu = document.getElementById('menu');
let hamburger = document.getElementById('hamburger');
let menu1 = document.getElementById("m-h1");
let menu2 = document.getElementById("m-h2");
let menu3 = document.getElementById("m-h3");
const closeX = document.getElementById('closeX');
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');

[closeX, menu, hamburger].forEach((elements) => {
  elements.addEventListener('click', function () {
    menu.classList.toggle("hidden");
    closeX.classList.toggle("hidden");
    elements.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      closeX.classList.toggle('hidden');
      hamburger.classList.toggle('hidden');
    });
  })
});