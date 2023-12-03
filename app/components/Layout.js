// Variables
const body = document.querySelector("body");

const themeToggle = document.querySelector(".theme_toggle");
const heroFilmDescription = document.querySelector(".hero_film_description");

// Theme Toggle
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark_mode");
});

console.dir(heroFilmDescription);
