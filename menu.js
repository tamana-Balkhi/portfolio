const mobileHamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('cancel');
const mobileM = document.querySelector('.hide');
const mobilemenu = document.querySelector('#mobilemenu');

function openMenu() {
  mobileM.style.display = 'block';
}

function closeMenu() {
  mobileM.style.display = 'none';
}

mobileHamburger.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);

mobilemenu.addEventListener('click', () => {
  mobileM.style.display = 'none';
  mobileHamburger.style.display = 'block';
});


