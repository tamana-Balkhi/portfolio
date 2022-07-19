let mobileHamburger = document.getElementById('hamburger');
let closeIcon = document.getElementById('cancel')
let mobileM = document.querySelector('.hide');

mobileHamburger.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);

function openMenu() {
  mobileM.style.display = 'block';
}

function closeMenu() {
  mobileM.style.display = 'none';
}
