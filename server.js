//const API_KEY = 'a5dff3c3-e38e-4bb7-a860-83fbe9880d0f';
const API_URL_FILMS = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const IMAGES_URL = 'https://image.tmdb.org/t/p/w500';
const GENRES_URL = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
getMovies(API_URL_FILMS);





async function getMovies(url) {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODhmYjQ3NmFiZjE2OWUyNjJkYTdjNGE5NmNlZjNjNiIsInN1YiI6IjY1NzM2N2QxMWM2MzViMDBlMDQ4NjljNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AtPAvEfX_-tNDMES48k83LAe0KM9bB2LecBiG3quijE'
    }
  };

  const guestId = await fetch('https://api.themoviedb.org/3/authentication/guest_session/new', options);

  const responseGuestId = await guestId.json();

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `${responseGuestId.guest_session_id}`
    }
  });
  const responseData = await response.json();
  //console.log(responseData.results);

  if (getUrl() === 'Layout.html') {
    showTrendsMovies(responseData.results);
  } else if (getUrl() === 'catalog/Catalog.html') {
    showAllMovies(responseData.results);
    listenerForFilms(responseData.results);
  }
}

function getUrl() {
  const siteUrl = '/app/components/';
  const currentUrl = window.location.pathname;
  const url = currentUrl.split(siteUrl).join('');

  return url;
}

function showTrendsMovies(data) {
  const filmsLayout = document.querySelector(".films_layout");
  const movieElement = document.createElement("ul");
  movieElement.classList.add("films", "trends_section");

  data.forEach((movie, index) => {
    if (index < 3) {

      movieElement.innerHTML += `
      <li class="film" style="background-image: url('${IMAGES_URL + movie.poster_path}');">

      <div class="film_info">
        <span>
          <p class="film_name">${movie.title}</p>
          <p class="film_genre">Action | <span class="film_year">${movie.year}</span></p>
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
    }
  });
  filmsLayout.appendChild(movieElement);
}


function showAllMovies(data) {
  const filmsLayout = document.querySelector(".films_layout");
  const movieElement = document.createElement("ul");
  movieElement.classList.add("films");

  data.forEach((movie, index) => {
    if (index < 18) {


      movieElement.innerHTML += `
        <li class="film" style="background-image: url('${IMAGES_URL + movie.poster_path}');">

          <div class="film_info">
            <span>
              <p class="film_name">${movie.title}</p>
              <p class="film_genre">${getGenres(movie.genre_ids)} | <span class="film_year">${movie.release_date.slice(0, 4)}</span></p>
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
    }
  });
  filmsLayout.appendChild(movieElement);
}

function listenerForFilms(data) {
  const filmArr = document.querySelectorAll(".film");
  //console.log(filmArr);
  filmArr.forEach((film, index) => {
    film.addEventListener("click", () => {
      createDetails(index, data);
    });
  });
}

const detailsElement = document.createElement("div");
detailsElement.classList.add("details", "disable_overflow");

function createDetails(index, data) {
  detailsElement.classList = ("details");
  document.body.classList.add("disable_overflow");
  data.forEach((movie, movieIndex) => {
    if (movieIndex == index) {
      //const genre = getGenres(movie.genre_ids);
      console.log(getGenres(movie.genre_ids));

      detailsElement.innerHTML = `
      <div class="details_mask"></div>
      <div class="details_container">
        <svg class="details_close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="close-outline"><path id="Vector" d="M17.25 17.25L6.75 6.75M17.25 6.75L6.75 17.25"  stroke-linecap="round" stroke-linejoin="round"/></g></svg>
      
        <div class="details_image">
          <img src="${IMAGES_URL + movie.poster_path}" alt="Dungeons & Dragons: Honor Among Thieves poster">
        </div>
      
        <div class="details_info">
          <p class="details_film_name">${movie.title}</p>
          <div class="details_rating">
            <div>
              <p>Vote / Votes</p>
              <p>Popularity</p>
              <p>Genre</p>
            </div>
      
            <div>
              <p><span class="vote">${movie.vote_average.toFixed(1)}</span> / <span class="vote">${movie.vote_count}</span></p>
              <p>${movie.popularity.toFixed(1)}</p>
              <p>${getGenres(movie.genre_ids)}</p>
            </div>
      
          </div>
      
          <div class="details_description">
            <p>About</p>
            <p>${movie.overview}</p>
          </div>
      
          <button class="btn_unfilled_orange">Add to my library</button>
      
        </div>
      </div>
    `;

    }
  });

  document.body.appendChild(detailsElement);
  addDetailsListener();
}

async function getGenres(data) {
  const response = await fetch(GENRES_URL, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODhmYjQ3NmFiZjE2OWUyNjJkYTdjNGE5NmNlZjNjNiIsInN1YiI6IjY1NzM2N2QxMWM2MzViMDBlMDQ4NjljNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AtPAvEfX_-tNDMES48k83LAe0KM9bB2LecBiG3quijE'
    }
  });
  const responseData = await response.json();

  let genresString = { genre: [] };
  let genresArr = [];
  data.forEach(id => {
    responseData.genres.forEach(item => {
      if (item.id === id) {
        genresArr.push(item.name);
      }
    })
  })
  genresString.genre = genresArr;

  return genresString.genre;
}



// hide / show details
function addDetailsListener() {
  const details = document.querySelector(".details");
  const closeDetailsBtn = document.querySelector(".details_close");
  const detailsMask = document.querySelector(".details_mask");

  closeDetailsBtn.addEventListener("click", () => {
    details.classList.add("details_none");
    document.body.classList.remove("disable_overflow");
  });

  detailsMask.addEventListener("click", () => {
    details.classList.add("details_none");
    body.classList.remove("disable_overflow");
  });
}


