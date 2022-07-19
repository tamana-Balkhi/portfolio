const mobilemenu = document.querySelector('#mobilemenu');
const hamburger = document.querySelector('#hamburger');
const cancel = document.querySelector('#cancel');
const links = document.querySelector('#Links');

hamburger.addEventListener('click', () => {
  mobilemenu.classList.add('show');
  mobilemenu.classList.remove('hide');
  mobilemenu.style.display = 'block';
});

cancel.addEventListener('click', () => {
  mobilemenu.classList.add('hide');
  modal.classList.remove('show');
});

links.addEventListener('click', () => {
  mobilemenu.style.display = 'none';
});