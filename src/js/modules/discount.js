export function init() {
  const closeBtn = document.querySelector(".js-discount-close");
  const discountWindow = document.querySelector(".js-discount");

  closeBtn.addEventListener("click", closeWindow);

  function closeWindow() {
    discountWindow.classList.add("discount--closed");
  }
}
