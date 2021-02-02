const hamburgerMenu = document.querySelector('.menu');
const navBar = document.querySelector('.navbar');
// console.log(navBar);

function handleMenuClick() {
  hamburgerMenu.classList.toggle('menu--active');
}

hamburgerMenu.addEventListener('click', handleMenuClick);

// handleMenuClick(hamburgerMenu);
