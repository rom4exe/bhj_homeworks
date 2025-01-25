let load = document.getElementById("loader");

const xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState == xhr.DONE) {
    // если загрузка завершена
    load.classList = "loader"; // убрать анимацию загрузки
    const json = xhr.response; // получит JSON
    p = JSON.parse(json); //парсим в объект
    const arr = p.response.Valute;

    const arrayFromObject = Object.keys(arr).map((key) => ({
      //преобразуем в массив
      key: key,
      value: arr[key],
    }));
    arrayFromObject.forEach((e) => {
      // достаем из массива CharCode и Value и добавляем на страницу
      const valutes = document.getElementById("items");
      const valute = document.createElement("div");
      valute.classList.add("item");
      valute.innerHTML = `<div class="item__code"> ${e.value.CharCode}</div>
      <div class="item__value">${e.value.Value}</div>
      <div class="item__currency">руб</div>`;
      valutes.appendChild(valute);
    });
  }
});
xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.send();
