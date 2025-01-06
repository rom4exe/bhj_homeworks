let act;
const book = document.querySelector(".book__content");
const fontSizeControls = document.querySelector(".book__control_font-size");
const colorControls = document.querySelector(".book__control_color");
const bgControls = document.querySelector(".book__control_background");

// Функция для обработки изменений цвета фона
function handleChange(x, y) {
  event.preventDefault(); // Предотвращаем стандартное действие ссылки
  const activElement = event.target;
  act = activElement.className.split(" ", 1); // получаем имя класса до пробела
  // делаем проверку на нужные слассы, чтобы клик срабатывал только на них
  if (act == "font-size" || act == "color") {
    // Удаляем активный класс у всех элементов управления цветом фона и добавляем активный класс на выбранный элемент
    changeActive(activElement);
    // Удаляем существующие классы  у элемента книги
    book.classList.remove(
      ...[...book.classList].filter((n) => n.startsWith(x))
    );
    // Добавляем новый класс в зависимости от текущего элемента
    book.classList.add(`${x}-${activElement.getAttribute("data-" + y)}`);
  }
}

// Функция для смены активного элемента
function changeActive(activElement) {
  // Удаляем активный класс у всех элементов управления
  Array.from(activElement.parentElement.children).forEach((el) => {
    el.classList.remove(`${act}_active`);
  });
  // Добавляем активный класс на выбранный элемент
  activElement.classList.add(`${act}_active`);
}

// Обработчик событий к элементам управления цветом текста
colorControls.addEventListener("click", () =>
  handleChange("book_color", "text-color")
);

// Обработчик событий к элементам управления цветом текста
bgControls.addEventListener("click", () => handleChange("book_bg", "bg-color"));

// Обработчик событий к элементам управления размером шрифта
fontSizeControls.addEventListener("click", () =>
  handleChange("book_fs", "size")
);
