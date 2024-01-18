import { setProgress } from "./bar.js";

export function init() {
  const tabs = document.querySelectorAll(".js-tab");
  const options = document.querySelectorAll(".js-select");
  const tabIsOpenClass = "solutions--open";

  function showTab(reference) {
    const tabToShow = document.querySelector(`[data-tab="${reference.id}"]`);

    tabToShow.querySelector(".js-back").addEventListener("click", (e) => {
      e.target.parentNode.parentNode.classList.remove(tabIsOpenClass);
      Array.from(tabToShow.querySelectorAll(".js-bar")).map((b) => {
        b.style.strokeDashoffset = 0;
      });
    });
    // 1. Пробегаем по всем табам
    // 2. Убираем класс у тех, которые не совпадают
    Array.from(tabs).map((e) => {
      if (e != tabToShow) {
        e.classList.remove(tabIsOpenClass);
      } else {
        e.classList.add(tabIsOpenClass);
        Array.from(tabToShow.querySelectorAll(".js-bar")).map((b) => {
          setProgress(b);
        });
      }
    });
  }

  function emitter(options) {
    Array.from(options).map((e) => {
      let ref;
      if (e.matches("select, option")) {
        e.addEventListener("change", (event) => {
          ref = JSON.parse(
            event.target.selectedOptions[0].dataset.customProperties.replace(
              "id",
              '"id"'
            )
          );
          showTab(ref);
        });
      } else {
        e.addEventListener("click", (event) => {
          ref = JSON.parse(
            event.target.dataset.customProperties.replace("id", '"id"')
          );
          showTab(ref);
        });
      }
    });
  }

  emitter(options);
  // 1. Преобразуем коллекцию селекторов в массив
  // 2. Проходим по массиву и вешаем обработчик на изменение
  // 3. Забираем значение из data-custom-properties
  // 4. Replace(id, "id") - требование JSON
  // 5. Парсим строку в объект и возращаем

  // Array.from(options).map((e) => {
  //   e.addEventListener("change", () => {
  //     const ref = JSON.parse(
  //       e.selectedOptions[0].dataset.customProperties.replace("id", '"id"')
  //     );

  // 1. Ищем элемент с аттрибутом data-tab = значению, который вернет ref из data-custom-properties
  // const tabToShow = document.querySelector(`[data-tab="${ref.id}"]`);

  // tabToShow.querySelector(".js-back").addEventListener("click", (e) => {
  //   e.target.parentNode.classList.remove(tabIsOpenClass);
  // });
  // // 1. Пробегаем по всем табам
  // // 2. Убираем класс у тех, которые не совпадают
  // Array.from(tabs).map((e) => {
  //   if (e != tabToShow) {
  //     e.classList.remove(tabIsOpenClass);
  //   } else {
  //     e.classList.add(tabIsOpenClass);
  //     Array.from(tabToShow.querySelectorAll(".js-bar")).map((b) => {
  //       setProgress(b);
  //     });
  //   }
  // });
  //   });
  // });
}
