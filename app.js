
// clave = "5b197352180c9d801b6d9d654b40a762";

const API_URL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5b197352180c9d801b6d9d654b40a762&page=1";
const IMAGE_PATH="https://image.tmdb.org/t/p/w500/";
const SEARCH_URL="https://api.themoviedb.org/3/search/movie?api_key=5b197352180c9d801b6d9d654b40a762&include_adult=false&query='";

//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5b197352180c9d801b6d9d654b40a762

const form= document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');


//obtenerPelis
async function getMovies(url){
const res= await fetch(url);
const data = await res.json()
displayMovies(data.results);
console.log(data.results);
}

function displayMovies(movies){
    main.innerHTML='';
    movies.forEach((movie)=>{
        const {title, poster_path, vote_average, overview}=movie;
        const moviesElement = document.createElement('div');
        moviesElement.classList.add('movie');
        moviesElement.innerHTML=`
        <img src="${IMAGE_PATH +poster_path}" alt="${title}" />
        <div class="movie-info">
        <h3>${title}</h3>
        <span >${vote_average}</span>
    </div>
    <div class="overview">
        <h3>Descripcion</h3>
        ${overview}
    </div>

        `
        main.appendChild(moviesElement);
    });

}



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const searchValue= search.value;
    if(searchValue && searchValue!== ''){
        getMovies(SEARCH_URL+searchValue)
        searchValue=''
    }else{
        window.location.reload()
    }
})


getMovies(API_URL)

