const mobileHamburger = document.getElementById('hamburger');
const closeIcon = document.getElementById('cancel');
const mobileM = document.querySelector('.hide');

function openMenu() {
  mobileM.style.display = 'block';
}

function closeMenu() {
  mobileM.style.display = 'none';
}

mobileHamburger.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
