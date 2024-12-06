const API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG = "https://image.tmdb.org/t/p/w500";
const searchInput = document.querySelector("input");
let moviesList = [];

async function fetchMovies() {
  const res = await fetch(API);
  const data = await res.json();
  moviesList = data.results;
  displayMovies(moviesList);
}

function displayMovies(movies) {
  const main = document.querySelector("main") || document.createElement("main");
  if (!main.classList.contains("movie-container")) {
    main.classList.add("movie-container");
    document.body.appendChild(main);
  }
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie-card");
    movieEl.innerHTML = `
      <img src="${IMG + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="rating">${vote_average}</span>
      </div>
    `;
    main.appendChild(movieEl);
  });
}

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filterM = moviesList.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );
  displayMovies(filterM);
});

fetchMovies();
