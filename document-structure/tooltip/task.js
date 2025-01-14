const tooltips = document.querySelectorAll(".has-tooltip");

// Создаем подсказки
tooltips.forEach((element) => {
  let tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerText = element.getAttribute("title");
  element.appendChild(tooltip);
});

tooltips.forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    clear;
    element.firstElementChild.classList.add("tooltip_active"); // Отображение подсказки
    const rect = element.getBoundingClientRect(); // Позиция родителя
    element.firstElementChild.style.left = rect.left + 10 + "px"; // Позиция относительно родителя
  });
  element.addEventListener("blur", clear); // Очистка при неактивности
});

// Очистка подсказок
function clear() {
  const activeTooltips = document.querySelectorAll(".tooltip_active");
  activeTooltips.forEach((tooltip) => {
    tooltip.classList.remove("tooltip_active");
  });
}
