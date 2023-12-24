let url = "https://api.themoviedb.org/3/movie/";
let category = ["now_playing", "popular", "top_rated", "upcoming"];
let apikey = "?api_key=f3577f41111807b8f9bda762049ee836";

function generateCardData(firstMovie) {
    let movieTitle = firstMovie.title;
    let releaseDate = firstMovie.release_date;
    let imdbRating = firstMovie.vote_average;
    let imgurl = "https://image.tmdb.org/t/p/w500" + firstMovie.poster_path;
    createCard(movieTitle, releaseDate, imdbRating, imgurl)
}
function createCard(movieTitle, releaseDate, imdbRating, imgurl) {
    // Create a new div element
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";

    // Create h2 element for the movie title
    let titleElement = document.createElement("h2");
    titleElement.textContent = movieTitle;

    // Create p elements for release date and IMDB rating
    let releaseDateElement = document.createElement("p");
    releaseDateElement.textContent = releaseDate;

    let ratingElement = document.createElement("p");
    ratingElement.innerHTML = `<b>IMDB Rating <span>${imdbRating}</span></b>`;

    // Create an img element for the movie image
    let imgElement = document.createElement("img");
    imgElement.src = imgurl;
    imgElement.alt = "Movie";

    // Append created elements to the card div
    cardDiv.appendChild(titleElement);
    cardDiv.appendChild(releaseDateElement);
    cardDiv.appendChild(ratingElement);
    cardDiv.appendChild(imgElement);

    // Append the card div to the body (or any other container element)
    let sectioncards = document.querySelector('.sectioncards');
    sectioncards.appendChild(cardDiv);
}

// now playing movies
function nowPlayingMovies() {
    fetch(url + category[0] + apikey)
        .then((Response) => {
            return Response.json();
        }).then((data) => {
            for(let i=0;i<data.results.length;i++){
                generateCardData(data.results[i])
            }
        })
}
clearChilds()
nowPlayingMovies()

function popularMovies() {
    fetch(url + category[1] + apikey)
        .then((Response) => {
            return Response.json();
        }).then((data) => {
            for(let i=0;i<data.results.length;i++){
                generateCardData(data.results[i])
            }
        })
}

function topRatedMovies() {
    fetch(url + category[2] + apikey)
        .then((Response) => {
            return Response.json();
        }).then((data) => {
            for(let i=0;i<data.results.length;i++){
                generateCardData(data.results[i])
            }
        })
}

function upcomingMovies() {
    fetch(url + category[3] + apikey)
        .then((Response) => {
            return Response.json();
        }).then((data) => {
            for(let i=0;i<data.results.length;i++){
                generateCardData(data.results[i])
            }
        })
}

function clearChilds() {
    let sectioncards = document.querySelector(".sectioncards");
    while (sectioncards.firstChild) {
        sectioncards.removeChild(sectioncards.firstChild);
    }
}

let nowplaying=document.querySelector("#nowplaying");
let popular=document.querySelector("#popular");
let toprated=document.querySelector("#toprated");
let upcoming=document.querySelector("#upcoming");

nowplaying.addEventListener('click',()=>{
    clearChilds()
    nowPlayingMovies()
})
popular.addEventListener('click',()=>{
    clearChilds()
    popularMovies()
})
toprated.addEventListener('click',()=>{
    clearChilds()
    topRatedMovies()
})
upcoming.addEventListener('click',()=>{
    clearChilds()
    upcomingMovies()
})

let tvseries=document.querySelector('#tvseries');
tvseries.addEventListener('click',()=>{
    clearChilds()
    fetchTvSeries()
})
function fetchTvSeries() {
    fetch("https://api.themoviedb.org/3/tv/popular"+apikey)
        .then((Response) => {
            return Response.json();
        }).then((data) => {
            for(let i=0;i<data.results.length;i++){
                generateCardData(data.results[i])
            }
        })
}