
let slides = document.querySelectorAll(".slide");
let customSlides = document.querySelectorAll(".custom-slide");
let allSlides = [...customSlides, ...slides, customSlides[1]]; // title + image slides + thank you
let affirmationText = document.getElementById("affirmation");
let current = 0;

function showSlide(index) {
    allSlides.forEach((slide, i) => {
        slide.style.opacity = i === index ? 1 : 0;
    });
}

function nextSlide() {
    current = (current + 1) % allSlides.length;
    showSlide(current);
}

showSlide(current);
setInterval(nextSlide, 4000);
