const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu-btn");
const mobileMenuLinks = mobileMenu.querySelectorAll("a");
const navLinks = document.querySelectorAll("header nav ul li a");
const sections = document.querySelectorAll("section");
const reviewCarousel = document.getElementById("review-carousel-inner");
const reviewDots = document.querySelectorAll("#review-carousel .absolute button");
let currentReview = 0;
let intervalId;

function toggleMobileMenu() {
    mobileMenu.classList.toggle("hidden");
}

hamburgerBtn.addEventListener("click", toggleMobileMenu);
closeMenuBtn.addEventListener("click", toggleMobileMenu);
mobileMenuLinks.forEach(link => {
    link.addEventListener("click", toggleMobileMenu)
});

document.addEventListener("click", (event) => {
    if (!mobileMenu.classList.contains("hidden") && !mobileMenu.contains(event.target) && event.target !== hamburgerBtn) {
        toggleMobileMenu();
    }
});

function updateActiveNavLink() {
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            currentSectionId = section.getAttribute("id")
        }
    });
}

window.addEventListener("scroll", updateActiveNavLink);

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                tap: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

function showReview(index) {
    reviewCarousel.style.transform = `translateY(-${index * 100}%)`;
    reviewDots.forEach((dot, i) => {
        dot.classList.toggle('bg-red-500', i === index);
        dot.classList.toggle('bg-gray-300', i !== index);
    });
    currentReview = index;
}

function nextReview() {
    currentReview = (currentReview + 1) % reviewDots.length;
    showReview(currentReview);
}

function startCarousel() {
    intervalId = setInterval(nextReview, 5000);
}

function stopCarousel() {
    clearInterval(intervalId);
}

reviewDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showReview(index);
        stopCarousel();
        startCarousel();
    });
});

startCarousel();