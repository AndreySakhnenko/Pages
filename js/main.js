const burger = document.querySelector(".burger");
const navList = document.querySelector(".header_nav");

burger.addEventListener("click", openNav);

function openNav() {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
}

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoHeight: true,
  slidesPerView: 3,
  watchOverflow: true,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 2,
    },
  },
});
