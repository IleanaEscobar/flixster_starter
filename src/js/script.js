const imageBaseUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=336ab2e023e28be34655b19be0fd9c48&language=en-US'
const posterImageurl = 'https://image.tmdb.org/t/p'
const searchResultsElement = document.querySelector('#search-results');
const movieElement = document.getElementById("movieGrid");
const api_key = "336ab2e023e28be34655b19be0fd9c48"
const search_url = 'https://api.themoviedb.org/3/search/movie?api_key=336ab2e023e28be34655b19be0fd9c48&query=' 
var movies = [];
var page_number = 0;
var searched = false;
var past_searched = '';

async function fetchMovies() {
    page_number += 1;
    const response = await fetch(imageBaseUrl + '&page=' + page_number);
    const results = await response.json()
    current_index = movies.length
    for (let i = 0; i < results['results'].length; i++) {
        movies[current_index] = [results['results'][i].id, results['results'][i].poster_path, results['results'][i].title, results['results'][i].vote_average, results['results'][i].overview]
        current_index += 1;
    }
    updateGrid(movies);
}

async function fetchSearch(search_results) {
    page_number += 1;
    const response = await fetch(search_url + search_results + '&page=' + page_number);
    const results = await response.json()
    current_index = movies.length
    for (let i = 0; i < results['results'].length; i++) {
        movies[current_index] = [results['results'][i].id, results['results'][i].poster_path, results['results'][i].title, results['results'][i].vote_average, results['results'][i].overview]
        current_index += 1;
    }
    updateGrid(movies);
}

function updateGrid(movies){
    for( let i = 0; i < movies.length; i++ ) {
        movieElement.innerHTML += `<div class="movie-card">
        <h4 class="movie-title">${movies[i][2]}</h4>
        <img onclick="openNavigation()" onmouseover="this.height = 560" onmouseout="this.height = 500" class="movie-poster" src="${posterImageurl}/w342${movies[i][1]}" alt="${movies[i][2]}" title="${movies[i][2]}"/>
        <div class="movie-vote">
        <img class="pop-corn" src="FlixsterIcons/Popcorn_icon.png" width = 20px height = 30px alt="popcorn"/>
        <h4 class="movie-voteAverage"> ${movies[i][3]}</h4>
        </div>`;
    }
}
function openNavigation() {
    document.getElementById("Navigation").style.height = "100%";
  }
  
  function closeNavigation() {
    document.getElementById("Navigation").style.height = "0%";
  }

window.onload = function() {
    movies = [];
    movieElement.innerHTML = ''
    page_number = 0;
    fetchMovies();
}

document.querySelector('#search').addEventListener('submit', (event) => {
    page_number = 0
    event.preventDefault();
    movieElement.innerHTML = ''
    movies = [];
    const search_results = document.getElementById("search-input").value;
    searched = true;
    past_searched = search_results
    fetchSearch(search_results);
})

document.querySelector('#load-more').addEventListener('click', (event) => {
    event.preventDefault();
    movies = [];
    if (searched){
        fetchSearch(past_searched);
        console.log(movies)
    }
    else {
        fetchMovies()
    }
    console.log(page_number)
})