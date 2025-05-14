const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
document.addEventListener("DOMContentLoaded", function () {
  const scroller = document.getElementById("productScroller");
  const leftBtn = document.getElementById("scrollLeft");
  const rightBtn = document.getElementById("scrollRight");

  leftBtn.addEventListener("click", () => {
    scroller.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightBtn.addEventListener("click", () => {
    scroller.scrollBy({ left: 300, behavior: 'smooth' });
  });
});
