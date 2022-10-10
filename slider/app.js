const slides = document.querySelectorAll(".card");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const auto = true;
const intervalTime = 3000;
let slideInterval;
next.addEventListener("click", () => {
  const activeSlide = document.querySelector(".active");
  activeSlide.classList.remove("active");
  if (activeSlide.nextElementSibling) {
    activeSlide.nextElementSibling.classList.add("active");
  } else {
    slides[0].classList.add("active");
  }
  
});
prev.addEventListener("click", () => {
  const activeSlide = document.querySelector(".active");
  activeSlide.classList.remove("active");
  if (activeSlide.previousElementSibling) {
    activeSlide.previousElementSibling.classList.add("active");
  } else {
    slides[slides.length - 1].classList.add("active");
  }
});

