const tasksForm = document.getElementById("tasks__form");
const taskInput = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");
loadTasks(); //жагрузаем сохраненные задачи

//обработка стандартного поведения кнопки формы
tasksForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    taskInput.value = "";
    saveTasks();
  }
});

// добавление задач
function addTask(text) {
  const task = document.createElement("div");
  task.className = "task";
  tasksList.appendChild(task);

  const taskTitle = document.createElement("div");
  taskTitle.className = "task__title";
  taskTitle.textContent = text;
  task.appendChild(taskTitle);

  const taskRemove = document.createElement("a");
  taskRemove.href = "#";
  taskRemove.className = "task__remove";
  taskRemove.innerHTML = "&times;";
  task.appendChild(taskRemove);

  taskRemove.addEventListener("click", (e) => {
    e.preventDefault();
    tasksList.removeChild(task);
    saveTasks();
  });
}
// сохраняем задачи в localstorrage
function saveTasks() {
  let t = [];
  document.querySelectorAll(".task__title").forEach((taskTitle) => {
    t.push(taskTitle.textContent);
  });
  localStorage.setItem("key", JSON.stringify(t));
}
//читаем сохраненные задачи из localstorrage
function loadTasks() {
  tt = JSON.parse(localStorage.getItem("key"));
  tt.forEach((task) => {
    addTask(task);
  });
}
