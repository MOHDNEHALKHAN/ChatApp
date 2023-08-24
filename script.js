const hamburger = document.querySelector('.hamburger');
const navButtons = document.querySelector('.ham-nav');
const close = document.querySelector('.close-btn');
const body = document.body;
const scroll = document.querySelector('.Scrolls');

hamburger.addEventListener('click', () => {
  navButtons.classList.toggle("active");
  body.classList.add("active");
});

close.addEventListener('click', () => {
  navButtons.classList.remove("active");
  body.classList.remove("active");
});

scroll.addEventListener('click', ()=>{
  top1();
  });

  function top1(){

  window.scrollTo({
    top: 0,
    behavior: "smooth" // You can use "auto" for instant scrolling
  });
}