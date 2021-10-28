import React, { useState, useEffect } from 'react'
import { API_URL, API_KEY, } from '../../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MovieCard from '../MovieCard/MovieCard';

const Home = () => {
    const [movie, setMovie] = useState([])
    const fetchMovieURl = async () => {
        try {
            const response = await fetch(`${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            // const response = await fetch('https://image.tmdb.org/t/p/w1280/5hNcsnMkwU2LknLoru73c76el3z.jpg')
            const data = await response.json()
            setMovie(data.results)
            console.log(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovieURl()
    }, [])
    return (
        <div>
            <Header />
            <MovieCard movieDetails={movie} />
            <Footer />
        </div>
    )
}

export default Home;