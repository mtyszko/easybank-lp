const hamburgerMenu = document.querySelector('.menu');
const navBar = document.querySelector('.navbar');
// console.log(navBar);

function handleMenuClick() {
  hamburgerMenu.classList.toggle('menu--active');
  navBar.classList.toggle('navbar--mobile');
  navBar.classList.toggle('hide-for-mobile');
}

hamburgerMenu.addEventListener('click', handleMenuClick);

// handleMenuClick(hamburgerMenu);
