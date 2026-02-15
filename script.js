const toggle = document.getElementById("theme-toggle");
const body = document.body;
let moon = `<i class="fa-solid fa-moon"></i>`;
let sun = `<i class="fa-solid fa-sun"></i>`;

// Auto detect system theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.setAttribute("data-theme", "dark");
}

toggle.addEventListener("click", () => {
    if (body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme");
        toggle.innerHTML = moon;
    } else {
        body.setAttribute("data-theme", "dark");
        toggle.innerHTML = sun;
    }
});

// Hamburger
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Work
const carousel = document.getElementById("carousel");
const cards = document.querySelectorAll("#carousel .card");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;

function getVisibleCards() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
}

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 30;
    carousel.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
    const visible = getVisibleCards();
    if (index < cards.length - visible) {
        index++;
        updateCarousel();
    }
});

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

window.addEventListener("resize", updateCarousel);
