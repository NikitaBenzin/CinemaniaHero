// Variables
const body = document.querySelector("body");

const themeToggle = document.querySelector(".theme_toggle");
const heroFilmDescription = document.querySelector(".hero_film_description");

// Mobile menu
const headerNavigation = document.querySelector(".header_navigation");
const menuNavigation = document.querySelector(".menu");
const headerNavigationBg = document.querySelector(".wrapper_bg");

// trailer
const trailerContainer = document.querySelector(".trailer_mask");
const watchTrailerBtn = document.querySelector(".watch_trailer");

// details
const detailsContainer = document.querySelector(".details_mask");
const moreDetailsBtn = document.querySelector(".more_details");
const closeDetailsBtn = document.querySelector(".details_close");

// Theme Toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark_mode");
});

// Menu Toggle
menuNavigation.addEventListener("click", () => {
  headerNavigation.classList.add("open");
});

headerNavigationBg.addEventListener("click", () => {
  headerNavigation.classList.remove("open");
});

// hide trailer

watchTrailerBtn.addEventListener("click", () => {
  trailerContainer.classList.remove("trailer_none");
  body.classList.add("disable_overflow");
});

trailerContainer.addEventListener("click", () => {
  trailerContainer.classList.add("trailer_none");
  body.classList.remove("disable_overflow");
});

// hide / show details
moreDetailsBtn.addEventListener("click", () => {
  detailsContainer.classList.remove("details_none");
});

closeDetailsBtn.addEventListener("click", () => {
  detailsContainer.classList.add("details_none");
});
