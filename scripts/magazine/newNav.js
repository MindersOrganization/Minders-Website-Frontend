const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const hamburgerIcon = document.getElementById("icon-hamburger");
const closeIcon = document.getElementById("icon-close");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});
// swiper variables
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: false,
  },
  loop: false,
  initialSlide: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
  mouseWheel: { thresholdDelta: 70 }, // ✅ fixed
  breakpoints: {
    320: { slidesPerView: 2 }, // ✅ fixed
    560: { slidesPerView: 2.5 }, // ✅ fixed
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 3 },
  },
});
