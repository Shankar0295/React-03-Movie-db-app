import React, { useState, useEffect } from 'react'
import { API_URL, API_KEY, } from '../../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MovieCard from '../MovieCard/MovieCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton'

const Home = () => {
    const [movie, setMovie] = useState([]);
    const [count, setCount] = useState(1);

    const fetchMovieURl = async () => {
        try {
            const response = await fetch(`${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=${count}`)
            const data = await response.json()
            setMovie(data.results)
            console.log(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovieURl()
    }, [count])

    const loadMore = () => {
        setCount(count + 1)
        console.log(count, "count")
    }

    return (
        <div>
            <Header />
            <MovieCard movieDetails={movie} />
            <LoadMoreButton onClick={loadMore} />
            <Footer />
        </div>
    )
}

export default Home;