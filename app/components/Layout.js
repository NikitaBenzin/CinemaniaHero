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
const closeDetailsBtn = document.querySelector(".details_close");
const detailsMask = document.querySelector(".details_mask");

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

// hide / show details
moreDetailsBtn.addEventListener("click", () => {
  details.classList.remove("details_none");
  body.classList.add("disable_overflow");
});

closeDetailsBtn.addEventListener("click", () => {
  details.classList.add("details_none");
  body.classList.remove("disable_overflow");
});

detailsMask.addEventListener("click", () => {
  details.classList.add("details_none");
  body.classList.remove("disable_overflow");
});

// Work with data
const ul = document.createElement("ul");
ul.className = "trends_films";

const getResource = async (url, options) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

// Not working because it is called before the element is created 
class StarBar {
  constructor(rating) {
    this.rating = rating;
  }

  render() {
    const starBar = document.createElement("ul");
    starBar.className = "starbar";

    starBar.innerHTML += `

    `;
    console.log(starBar);
    filmInfo.appendChild(starBar);
  }
}

class Film {
  constructor(title, year, genre, poster, rating) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.poster = poster;
    this.rating = rating;
    // this.genreParse();
  }

  // genreParse() {
  //   if (this.genre.length > 2) {
  //     this.genre = this.genre.split([","]);
  //     this.genre = this.genre.slice(0, 2);
  //   }
  // }
  render() {

    ul.innerHTML += `
      <li class="film" style="background-image: url('${this.poster}');">
        <span class="film_gradient"></span>

        <div class="film_info">
          <span>
            <p class="film_name">${this.title}</p>
            <p class="film_genre">${this.genre} | <span class="film_year">${this.year}</span></p>
          </span>
          <ul class="starbar">
            <li class="starbar_star">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="star"><path id="Vector" d="M18.4687 22.5C18.3109 22.5006 18.1568 22.4514 18.0286 22.3594L12 17.9887L5.97139 22.3594C5.84259 22.4528 5.68742 22.5028 5.52832 22.5022C5.36921 22.5017 5.21441 22.4505 5.08629 22.3561C4.95818 22.2618 4.86339 22.1291 4.81563 21.9774C4.76787 21.8256 4.76961 21.6626 4.82061 21.5119L7.17186 14.5476L1.07811 10.3687C0.946113 10.2783 0.846491 10.1481 0.793797 9.99699C0.741103 9.84593 0.7381 9.68197 0.785225 9.52907C0.83235 9.37618 0.927135 9.24236 1.05573 9.14717C1.18432 9.05198 1.33999 9.0004 1.49998 8.99998H9.0178L11.2865 2.01795C11.3354 1.86721 11.4308 1.73583 11.559 1.64264C11.6871 1.54946 11.8415 1.49927 12 1.49927C12.1584 1.49927 12.3128 1.54946 12.441 1.64264C12.5692 1.73583 12.6645 1.86721 12.7134 2.01795L14.9822 9.00233H22.5C22.6602 9.00225 22.8162 9.05346 22.9452 9.14847C23.0741 9.24348 23.1693 9.37729 23.2167 9.5303C23.2642 9.68331 23.2613 9.84749 23.2087 9.99878C23.1561 10.1501 23.0564 10.2805 22.9242 10.3711L16.8281 14.5476L19.178 21.51C19.216 21.6227 19.2267 21.7429 19.2092 21.8605C19.1917 21.9782 19.1464 22.09 19.0771 22.1868C19.0078 22.2835 18.9165 22.3623 18.8107 22.4168C18.7049 22.4713 18.5877 22.4998 18.4687 22.5Z" fill="url(#paint0_linear_4641_29507)"/></g><defs><linearGradient id="paint0_linear_4641_29507" x1="3.5" y1="3" x2="18.5" y2="23" gradientUnits="userSpaceOnUse"><stop stop-color="#F84119"/><stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/></linearGradient></defs></svg>
            </li>
            <li class="starbar_star">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="star"><path id="Vector" d="M18.4687 22.5C18.3109 22.5006 18.1568 22.4514 18.0286 22.3594L12 17.9887L5.97139 22.3594C5.84259 22.4528 5.68742 22.5028 5.52832 22.5022C5.36921 22.5017 5.21441 22.4505 5.08629 22.3561C4.95818 22.2618 4.86339 22.1291 4.81563 21.9774C4.76787 21.8256 4.76961 21.6626 4.82061 21.5119L7.17186 14.5476L1.07811 10.3687C0.946113 10.2783 0.846491 10.1481 0.793797 9.99699C0.741103 9.84593 0.7381 9.68197 0.785225 9.52907C0.83235 9.37618 0.927135 9.24236 1.05573 9.14717C1.18432 9.05198 1.33999 9.0004 1.49998 8.99998H9.0178L11.2865 2.01795C11.3354 1.86721 11.4308 1.73583 11.559 1.64264C11.6871 1.54946 11.8415 1.49927 12 1.49927C12.1584 1.49927 12.3128 1.54946 12.441 1.64264C12.5692 1.73583 12.6645 1.86721 12.7134 2.01795L14.9822 9.00233H22.5C22.6602 9.00225 22.8162 9.05346 22.9452 9.14847C23.0741 9.24348 23.1693 9.37729 23.2167 9.5303C23.2642 9.68331 23.2613 9.84749 23.2087 9.99878C23.1561 10.1501 23.0564 10.2805 22.9242 10.3711L16.8281 14.5476L19.178 21.51C19.216 21.6227 19.2267 21.7429 19.2092 21.8605C19.1917 21.9782 19.1464 22.09 19.0771 22.1868C19.0078 22.2835 18.9165 22.3623 18.8107 22.4168C18.7049 22.4713 18.5877 22.4998 18.4687 22.5Z" fill="url(#paint0_linear_4641_29507)"/></g><defs><linearGradient id="paint0_linear_4641_29507" x1="3.5" y1="3" x2="18.5" y2="23" gradientUnits="userSpaceOnUse"><stop stop-color="#F84119"/><stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/></linearGradient></defs></svg>
            </li>
            <li class="starbar_star">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="star"><path id="Vector" d="M18.4687 22.5C18.3109 22.5006 18.1568 22.4514 18.0286 22.3594L12 17.9887L5.97139 22.3594C5.84259 22.4528 5.68742 22.5028 5.52832 22.5022C5.36921 22.5017 5.21441 22.4505 5.08629 22.3561C4.95818 22.2618 4.86339 22.1291 4.81563 21.9774C4.76787 21.8256 4.76961 21.6626 4.82061 21.5119L7.17186 14.5476L1.07811 10.3687C0.946113 10.2783 0.846491 10.1481 0.793797 9.99699C0.741103 9.84593 0.7381 9.68197 0.785225 9.52907C0.83235 9.37618 0.927135 9.24236 1.05573 9.14717C1.18432 9.05198 1.33999 9.0004 1.49998 8.99998H9.0178L11.2865 2.01795C11.3354 1.86721 11.4308 1.73583 11.559 1.64264C11.6871 1.54946 11.8415 1.49927 12 1.49927C12.1584 1.49927 12.3128 1.54946 12.441 1.64264C12.5692 1.73583 12.6645 1.86721 12.7134 2.01795L14.9822 9.00233H22.5C22.6602 9.00225 22.8162 9.05346 22.9452 9.14847C23.0741 9.24348 23.1693 9.37729 23.2167 9.5303C23.2642 9.68331 23.2613 9.84749 23.2087 9.99878C23.1561 10.1501 23.0564 10.2805 22.9242 10.3711L16.8281 14.5476L19.178 21.51C19.216 21.6227 19.2267 21.7429 19.2092 21.8605C19.1917 21.9782 19.1464 22.09 19.0771 22.1868C19.0078 22.2835 18.9165 22.3623 18.8107 22.4168C18.7049 22.4713 18.5877 22.4998 18.4687 22.5Z" fill="url(#paint0_linear_4641_29507)"/></g><defs><linearGradient id="paint0_linear_4641_29507" x1="3.5" y1="3" x2="18.5" y2="23" gradientUnits="userSpaceOnUse"><stop stop-color="#F84119"/><stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/></linearGradient></defs></svg>
            </li>
            <li class="starbar_star">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="star"><path id="Vector" d="M18.4687 22.5C18.3109 22.5006 18.1568 22.4514 18.0286 22.3594L12 17.9887L5.97139 22.3594C5.84259 22.4528 5.68742 22.5028 5.52832 22.5022C5.36921 22.5017 5.21441 22.4505 5.08629 22.3561C4.95818 22.2618 4.86339 22.1291 4.81563 21.9774C4.76787 21.8256 4.76961 21.6626 4.82061 21.5119L7.17186 14.5476L1.07811 10.3687C0.946113 10.2783 0.846491 10.1481 0.793797 9.99699C0.741103 9.84593 0.7381 9.68197 0.785225 9.52907C0.83235 9.37618 0.927135 9.24236 1.05573 9.14717C1.18432 9.05198 1.33999 9.0004 1.49998 8.99998H9.0178L11.2865 2.01795C11.3354 1.86721 11.4308 1.73583 11.559 1.64264C11.6871 1.54946 11.8415 1.49927 12 1.49927C12.1584 1.49927 12.3128 1.54946 12.441 1.64264C12.5692 1.73583 12.6645 1.86721 12.7134 2.01795L14.9822 9.00233H22.5C22.6602 9.00225 22.8162 9.05346 22.9452 9.14847C23.0741 9.24348 23.1693 9.37729 23.2167 9.5303C23.2642 9.68331 23.2613 9.84749 23.2087 9.99878C23.1561 10.1501 23.0564 10.2805 22.9242 10.3711L16.8281 14.5476L19.178 21.51C19.216 21.6227 19.2267 21.7429 19.2092 21.8605C19.1917 21.9782 19.1464 22.09 19.0771 22.1868C19.0078 22.2835 18.9165 22.3623 18.8107 22.4168C18.7049 22.4713 18.5877 22.4998 18.4687 22.5Z" fill="url(#paint0_linear_4641_29507)"/></g><defs><linearGradient id="paint0_linear_4641_29507" x1="3.5" y1="3" x2="18.5" y2="23" gradientUnits="userSpaceOnUse"><stop stop-color="#F84119"/><stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/></linearGradient></defs></svg>
            </li>
            <li class="starbar_star">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="star-half"><path id="Vector" d="M22.5 9.75H14.4375L12 2.25L9.5625 9.75H1.5L8.0625 14.25L5.53125 21.75L12 17.0625L18.4688 21.75L15.9375 14.25L22.5 9.75Z" stroke="url(#paint0_linear_4641_29511)" stroke-linejoin="round"/><path id="Vector_2" d="M12 2.25V17.0625L5.53125 21.75L8.0625 14.25L1.5 9.75H9.5625L12 2.25Z" fill="url(#paint1_linear_4641_29511)"/></g><defs><linearGradient id="paint0_linear_4641_29511" x1="4.06503" y1="3.64334" x2="17.9707" y2="22.2833" gradientUnits="userSpaceOnUse"><stop stop-color="#F84119"/><stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/></linearGradient><linearGradient id="paint1_linear_4641_29511" x1="2.78251" y1="3.64334" x2="16.2008" y2="12.6366" gradientUnits="userSpaceOnUse"><stop stop-color="#F84119"/><stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/></linearGradient></defs></svg>
            </li> 
          </ul>
        </div>
      </li>
    `;
    filmsLayout.appendChild(ul);
  }
}




const url = 'https://ott-details.p.rapidapi.com/advancedsearch?start_year=2000&end_year=2020&min_imdb=7&language=english&type=movie&sort=latest';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'aec9dc9bf0msh733dd408533b5b4p1baea9jsn1d8f1a6fb9fd',
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
  }
};

getResource(url, options).then((data) => {
  // console.log(data.results);
  let trendsFilmsCounter = 0;

  for (let i = 0; i < data.results.length; i++) {

    if (data.results[i].imageurl.length == 1 && trendsFilmsCounter < 3) {
      new Film(
        data.results[i].title,
        data.results[i].released,
        data.results[i].genre,
        data.results[i].imageurl,
        data.results[i].imdbrating
      ).render();
      trendsFilmsCounter += 1;
    }

  }
});