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

