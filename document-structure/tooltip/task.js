const tooltips = document.querySelectorAll(".has-tooltip");

// Создаем подсказку
let tooltip = document.createElement("div");
tooltip.classList.add("tooltip");
document.body.appendChild(tooltip);

tooltips.forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    let ttp = document.querySelector(".tooltip");
    if (element.getAttribute("title") == ttp.textContent) {
      // если подсказка уже есть
      tooltip.classList.toggle("tooltip_active"); // меняем атрибут видимости
    } else {
      // Иначе создаем и заменяем элемент подсказки на нееоходимый
      tooltip = document.createElement("div");
      tooltip.classList.add("tooltip", "tooltip_active");
      tooltip.innerText = element.getAttribute("title");
      const rect = element.getBoundingClientRect(); // Позиция элемента
      tooltip.style.left = rect.left + 10 + "px";
      tooltip.style.top = rect.top + 20 + "px"; // Позиция подсказки относительно элемента
      ttp.replaceWith(tooltip); //перрезаписываем подсказку
    }
    element.addEventListener("blur", clear); // Очистка при неактивности
  });
});

// Очистка подсказок
function clear() {
  const activeTooltips = document.querySelectorAll(".tooltip_active");
  activeTooltips.forEach((tooltip) => {
    tooltip.classList.remove("tooltip_active");
  });
}

// // Создаем подсказки
// tooltips.forEach((element) => {
//   let tooltip = document.createElement("div");
//   tooltip.classList.add("tooltip");
//   tooltip.innerText = element.getAttribute("title");
//   // element.appendChild(tooltip);
//   element.parentElement.append(tooltip);
// });

// tooltips.forEach(function (element) {
//   element.addEventListener("click", function (event) {
//     event.preventDefault();
//     element.firstElementChild.classList.toggle("tooltip_active"); // Отображение подсказки
//     const rect = element.getBoundingClientRect(); // Позиция родителя
//     element.firstElementChild.style.left = rect.left + 10 + "px"; // Позиция относительно родителя
//   });
//   element.addEventListener("blur", clear); // Очистка при неактивности
// });

// // Очистка подсказок
// function clear() {
//   const activeTooltips = document.querySelectorAll(".tooltip_active");
//   activeTooltips.forEach((tooltip) => {
//     tooltip.classList.remove("tooltip_active");
//   });
// }
