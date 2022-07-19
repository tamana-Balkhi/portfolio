const mobilemenu = document.querySelector('#mobilemenu');
const hamburger = document.querySelector('#hamburger');
const cancel = document.querySelector('#cancel');
const links = document.querySelector('#Links');

hamburger.addEventListener('click', () => {
  mobilemenu.classList.add('open-menu');
  mobilemenu.classList.remove('close-menu');
  mobilemenu.style.display = 'block';
});

cancel.addEventListener('click', () => {
  mobilemenu.classList.add('close-menu');
  modal.classList.remove('open-menu');
});

links.addEventListener('click', () => {
  mobilemenu.style.display = 'none';
});