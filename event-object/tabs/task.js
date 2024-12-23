const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab__content");

tabs.forEach((t, i, a) => {
  t.addEventListener("click", () => {
    a.forEach((t) => t.classList.remove("tab_active"));
    contents.forEach((c) => c.classList.remove("tab__content_active"));
    t.classList.add("tab_active");
    contents[i].classList.add("tab__content_active");
  });
});
