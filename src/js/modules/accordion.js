export function init() {
  const buttons = Array.from(document.querySelectorAll(".js-accordion"));
  const btnActiveClass = "qa__btn--active";
  buttons.map((e) => {
    e.addEventListener("click", (current) => openAnswer(current.target));
  });

  function openAnswer(current) {
    const tab = current.nextElementSibling;
    let tabHeight = tab.style.maxHeight;

    buttons
      // Фильтруем все, что открыто
      .filter((btn) => btn !== current)
      // ... и закрываем
      .map((el) => {
        el.classList.remove(btnActiveClass);
        el.nextElementSibling.style.maxHeight = null;
      });
    current.classList.toggle(btnActiveClass);

    if (tab.style.maxHeight) {
      tab.style.maxHeight = null;
    } else {
      tab.style.maxHeight = `${tab.scrollHeight}px`;
    }
  }
}
