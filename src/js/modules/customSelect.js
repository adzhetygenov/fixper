import Choices from "choices.js";

export function init() {
  const select = document.querySelector("select.js-select");

  const choices = new Choices(select, {
    position: "top",
    itemSelectText: "",
    searchEnabled: false,
    allowHTML: true
  });

  // if (window.matchMedia("(min-width: 1024px)")) choices.destroy();
}
