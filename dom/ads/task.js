let start = document.querySelector(".rotator__case_active");
start.style.color = start.dataset.color;

function rotate() {
  start.classList.remove("rotator__case_active");
  if (start.parentElement.lastElementChild == start) {
    start = start.parentElement.firstElementChild;
    start.classList.add("rotator__case_active");
  } else {
    start = start.nextElementSibling;
    start.classList.add("rotator__case_active");
  }
  start.style.color = start.dataset.color;
}

setInterval(rotate, 1000);
