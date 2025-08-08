"use strict";

// Карсель с нумерацией слайдов
const slidesNumber = document.querySelector(".participants__list");
const prevBtnNumber = document.querySelector(".participants__prev");
const nextBtnNumber = document.querySelector(".participants__next");
const slideNumber = document.querySelector(".participants__numbers");
const slidesArrayNumber = Array.from(document.querySelectorAll(".participants__item"));
const totalSlidesNumber = slidesArrayNumber.length;

let currentSlideNumber = 0;

function goToSlideNumber(index) {
  if (index < 0 || index >= totalSlidesNumber) return;

  currentSlideNumber = index;
  slidesNumber.scrollLeft = index * slidesNumber.clientWidth;

  // Обновляем номер слайда
  slideNumber.textContent = `${currentSlideNumber + 1}/${totalSlidesNumber}`;

  // Блокируем кнопки
  prevBtnNumber.disabled = currentSlideNumber === 0;
  nextBtnNumber.disabled = currentSlideNumber === totalSlidesNumber - 1;
}

prevBtnNumber.addEventListener("click", () => {
  goToSlideNumber(currentSlideNumber - 1);
});

nextBtnNumber.addEventListener("click", () => {
  goToSlideNumber(currentSlideNumber + 1);
});

// Инициализация состояния
goToSlideNumber(0);
