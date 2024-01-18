import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export function init() {
  // init Swiper:
  const swiper = new Swiper(".swiper", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
      el: ".controls__pagination",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 1
    },

    // Navigation arrows
    navigation: {
      disabledClass: "controls__button--disabled",
      nextEl: ".controls__next",
      prevEl: ".controls__prev"
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
}
