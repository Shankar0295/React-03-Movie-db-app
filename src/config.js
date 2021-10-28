//Configuration for TMDB
//SAMPLE URL FOR FETCHING MOVIES

// 'https://api.themoviedb.org/3/movie/top_rated?api_key=50a7b72128bc85c3696b9a86227b9d4d&language=en-US&page=1'

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '50a7b72128bc85c3696b9a86227b9d4d'

// Image URL
// SAMPLE IMAGE URL
// 'https://image.tmdb.org/t/p/w1280/5hNcsnMkwU2LknLoru73c76el3z.jpg'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/'

// Sizes Configuration
// w300,w780,w1280,Original

const BACKDROP_SIZE = "w1280";

// w92,w154,w185,w342,w500,w780, Original
const POSTER_SIZE = "w500";

export {
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
}