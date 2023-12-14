// Variables
const body = document.querySelector("body");

const themeToggle = document.querySelector(".theme_toggle");
const heroFilmDescription = document.querySelector(".hero_film_description");

// Mobile menu
const headerNavigation = document.querySelector(".header_navigation");
const menuNavigation = document.querySelector(".menu");
const headerNavigationBg = document.querySelector(".wrapper_bg");

// trailer
const trailerMask = document.querySelector(".trailer_mask");
const watchTrailerBtn = document.querySelector(".watch_trailer");

// details
const details = document.querySelector(".details");
const moreDetailsBtn = document.querySelector(".more_details");

// Films
const filmsLayout = document.querySelector(".films_layout");
const filmInfo = document.querySelector(".film_info");


// Theme Toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark_mode");
});

// Menu Toggle
menuNavigation.addEventListener("click", () => {
  headerNavigation.classList.add("open");
  body.classList.add("disable_overflow");
});

headerNavigationBg.addEventListener("click", () => {
  headerNavigation.classList.remove("open");
  body.classList.remove("disable_overflow");
});

// hide trailer
/**
 * Creating of a trailer container with iframe inside every time
 * when btn is clicked and remove it when window is closed
 */
let trailerContainer = document.createElement("div");
trailerContainer.className = "trailer_container";

watchTrailerBtn.addEventListener("click", () => {
  trailerContainer.innerHTML = `<iframe class="trailer_player" width="560" height="315" src="https://www.youtube.com/embed/IiMinixSXII?si=8j-FSI4w7De7B5hY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
  trailerMask.append(trailerContainer);
  trailerMask.classList.remove("trailer_none");
  body.classList.add("disable_overflow");
});

trailerMask.addEventListener("click", () => {
  trailerMask.classList.add("trailer_none");
  trailerContainer.parentNode.removeChild(trailerContainer);
  body.classList.remove("disable_overflow");
});