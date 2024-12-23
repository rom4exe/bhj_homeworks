let btn = document.querySelector(".dropdown__value");
let list = document.querySelector(".dropdown__list");
let item_list = document.querySelectorAll(".dropdown__link");

btn.onclick = function () {
  list.classList.toggle("dropdown__list_active");
};

function choice(e) {
  e.preventDefault();
  btn.textContent = this.textContent;
  list.classList.toggle("dropdown__list_active");
}

item_list.forEach((item) => {
  item.addEventListener("click", choice);
});
