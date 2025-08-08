"use strict";

// Карусель с точками-индикаторами
const slides = document.querySelector(".stages__list");

const prevBtn = document.querySelector(".stages__prev");
const nextBtn = document.querySelector(".stages__next");
const dotsContainer = document.querySelector(".stages__dots");
const slidesArray = Array.from(document.querySelectorAll(".stages__item"));
const totalSlides = slidesArray.length;

// Создаем точки
slidesArray.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("stages__dot");
  dotsContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    goToSlide(index);
  });
});

let currentSlide = 0;
let autoScrollInterval;

function goToSlide(index) {
  currentSlide = index % totalSlides;
  slides.scrollLeft = currentSlide * slides.clientWidth;

  // Обновляем активные точки
  dotsContainer.querySelectorAll(".stages__dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });

  // Блокируем кнопки
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === totalSlides - 1;
}

prevBtn.addEventListener("click", () => {
  goToSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
  goToSlide(currentSlide + 1);
});

// Инициализация состояния кнопок
goToSlide(0);

// Автопрокрутка каждые 4 секунды
function autoScroll() {
  goToSlide(currentSlide + 1);
}
autoScrollInterval = setInterval(autoScroll, 4000);
