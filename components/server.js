export default async function server(url, settings = {}) {
  const defaultPath = 'https://api.themoviedb.org/3/movie';
  const imagePath = 'https://api.themoviedb.org/t/p/w500/';
  const API_KEY = '588fb476abf169e262da7c4a96cef3c6';
  const language = 'en-US';
  const _url = `${defaultPath}/${url}?api_key=${API_KEY}&language=${language}`;
  return await fetch(_url).then(res => {
    return res.json();
  })
}
//discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2022&sort_by=popularity.desc