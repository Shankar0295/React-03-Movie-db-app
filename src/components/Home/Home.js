import React, { useState, useEffect } from 'react'
import { API_URL, API_KEY, } from '../../config';
import Header from '../Header/Header';
import MovieCard from '../MovieCard/MovieCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton'
import Loading from '../Loading/Loading'

const MOVIEAPI = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=`
const SEARCHAPI = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`

const Home = () => {
    const [movie, setMovie] = useState([]);
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('')

    const getMovies = async (API) => {
        // setLoading(true)
        try {
            const response = await fetch(API)
            const data = await response.json()
            setMovie((movie) => [...movie, ...data.results])
            setTotalPage(data.total_pages)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        if (searchTerm !== '') {
            getMovies(SEARCHAPI + searchTerm + '&page=' + count)
        } else {
            getMovies(MOVIEAPI + count)
        }

    }, [count, searchTerm])


    const loadMore = () => {
        setCount((count) => count + 1)
        console.log(count, "loadmore")
    }

    const searchMovie = (e) => {
        setSearchTerm(e.target.value)
        if (searchTerm !== '') {
            setMovie([])
            setCount(1)
        }
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div>
            <Header onChange={searchMovie} value={searchTerm} />
            <MovieCard movieDetails={movie} searchTerm={searchTerm} />
            {count < totalPage && !loading ? <LoadMoreButton onClick={loadMore} /> : null}

        </div>
    )
}

export default Home;