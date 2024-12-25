const reveals = document.querySelectorAll(".reveal");

function isVisible(el) {
  const { top, bottom } = el.getBoundingClientRect();
  if (bottom < 0 || top > window.innerHeight) {
    el.classList.remove("reveal_active");
  } else {
    el.classList.add("reveal_active");
  }
}

reveals.forEach((el) => {
  window.addEventListener("scroll", () => isVisible(el));
});
