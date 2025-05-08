
let slides = document.querySelectorAll(".slide");
let affirmations = ['Beautiful', 'Worthy', 'Divine', 'Enough', 'Seen', 'Soft', 'Loved', 'Strong', 'Gentle', 'Healing'];
let affirmationText = document.getElementById("affirmation");
let current = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? 1 : 0;
    });
    affirmationText.textContent = affirmations[index % affirmations.length];
}

function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
}

showSlide(current);
setInterval(nextSlide, 4000);
