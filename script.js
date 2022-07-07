const imageBaseUrl =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=336ab2e023e28be34655b19be0fd9c48&language=en-US";
const posterImageurl = "https://image.tmdb.org/t/p";
const movieElement = document.getElementById("movie-grid");
const searchUrl =
  "https://api.themoviedb.org/3/search/movie?api_key=336ab2e023e28be34655b19be0fd9c48&query=";
const videoSearchUrl = "https://api.themoviedb.org/3/movie/";
var movies = [];
var pageNumber = 0;
var searched = false;
var pastSearched = "";

async function fetchMovies() {
  pageNumber += 1;
  const response = await fetch(imageBaseUrl + "&page=" + pageNumber);
  const results = await response.json();
  currentIndex = movies.length;
  for (let i = 0; i < results["results"].length; i++) {
    movies[currentIndex] = [
      results["results"][i].id,
      results["results"][i].posterPath,
      results["results"][i].title,
      results["results"][i].voteAverage,
      results["results"][i].overview,
    ];
    currentIndex += 1;
  }
  updateGrid(movies);
}

async function fetchSearch(searchResults) {
  pageNumber += 1;
  const response = await fetch(
    searchUrl + searchResults + "&page=" + pageNumber
  );
  const results = await response.json();
  currentIndex = movies.length;
  for (let i = 0; i < results["results"].length; i++) {
    movies[currentIndex] = [
      results["results"][i].id,
      results["results"][i].posterPath,
      results["results"][i].title,
      results["results"][i].voteAverage,
      results["results"][i].overview,
    ];
    currentIndex += 1;
  }
  updateGrid(movies);
}

function updateGrid(movies) {
  for (let i = 0; i < movies.length; i++) {
    overview = movies[i][4].replace(/'/g, "&sbquo;");
    movieElement.innerHTML += `<div class="movie-card">
        <h4 class="movie-title">${movies[i][2]}</h4>
        <img onclick="openNavigation(), embedVideo(${movies[i][0]}, '${overview}')" onmouseover="this.height = 560" onmouseout="this.height = 500" class="movie-poster" src="${posterImageurl}/w342${movies[i][1]}" alt="${movies[i][2]}" title="${movies[i][2]}"/>
        <div class="movie-votes-stack">
        <img class="pop-corn" src="FlixsterIcons/Popcorn_icon.png" width = 20px height = 30px alt="popcorn"/>
        <h4 class="movie-votes"> ${movies[i][3]}</h4>
        </div>`;
  }
}
function openNavigation() {
  document.getElementById("Navigation").style.height = "100%";
}

function closeNavigation() {
  document.getElementById("Navigation").style.height = "0%";
}

async function embedVideo(id, overview) {
  const response = await fetch(
    videoSearchUrl + id + "/videos?api_key=336ab2e023e28be34655b19be0fd9c48"
  );
  const results = await response.json();
  if (!results["results"].isEmpty) {
    videoUrl = results["results"][0]["key"];
    document.querySelector(".popup-content").innerHTML = `
            <div class="iframe-wrap">
            <p id="trailer-header">Trailer</p>
            <iframe id="trailer_video" src = "https://www.youtube.com/embed/${videoUrl}" width = "550" height = "340" frameborder="0" allowfullscreen></iframe>
            <p id="description-header">Description:</p>
            <div class="caption">${overview}</div>
            </div>
            `;
  }
}

window.onload = function () {
  movies = [];
  movieElement.innerHTML = "";
  pageNumber = 0;
  fetchMovies();
};

document.querySelector("#search").addEventListener("submit", (event) => {
  pageNumber = 0;
  event.preventDefault();
  movieElement.innerHTML = "";
  movies = [];
  const searchResults = document.getElementById("search-input").value;
  searched = true;
  pastSearched = searchResults;
  fetchSearch(searchResults);
});
document.querySelector("#search").addEventListener("reset", (event) => {
  movies = [];
  movieElement.innerHTML = "";
  pageNumber = 0;
  fetchMovies();
});

document.querySelector("#load-more").addEventListener("click", (event) => {
  event.preventDefault();
  movies = [];
  if (searched) {
    fetchSearch(pastSearched);
  } else {
    fetchMovies();
  }
});
