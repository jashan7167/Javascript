let slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider); //works after the dom content is loaded
function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
  }
}
function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[index].classList.add("displaySlide");
}
function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}
function nextSlide() {
  if (slideIndex < slides.length-1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}
