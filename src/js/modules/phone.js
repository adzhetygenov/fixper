import IMask from "imask";

export function init() {
  const input = document.querySelector(".js-phone-input");
  const maskOptions = {
    mask: "+{7}(000) 000-00-00"
  };

  const mask = IMask(input, maskOptions);
}
