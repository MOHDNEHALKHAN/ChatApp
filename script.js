const hamburger = document.querySelector('.hamburger');
const navButtons = document.querySelector('.ham-nav');
const close = document.querySelector('.close-btn');
const body = document.body;

hamburger.addEventListener('click', () => {
  navButtons.classList.toggle("active");
  body.classList.add("active");
});

close.addEventListener('click', () => {
  navButtons.classList.remove("active");
  body.classList.remove("active");
});