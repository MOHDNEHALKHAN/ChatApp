const hamburger = document.querySelector('.hamburger');
const navButtons = document.querySelector('.navbar-buttons');

hamburger.addEventListener('click', () => {
  navButtons.classList.toggle('active');
});