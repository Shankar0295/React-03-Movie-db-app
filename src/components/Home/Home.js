import React, { useState, useEffect } from 'react'
import { API_URL, API_KEY, } from '../../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MovieCard from '../MovieCard/MovieCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton'
import Loading from '../Loading/Loading'
import SearchBar from '../SearchBar/SearchBar';

const MOVIEAPI = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=`
const SEARCHAPI = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`

const Home = () => {
    const [movie, setMovie] = useState([]);
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState('')
    console.log(count, "count")



    const getMovies = async (API) => {
        setLoading(true)
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
        getMovies(MOVIEAPI + count)
    }, [count])


    const loadMore = () => {
        setCount((count) => count + 1)
        console.log(count, "loadmore")
    }

    const searchMovie = async (e) => {
        e.preventDefault()
        setSearchTerm(e.target.value)
        if (searchTerm.length > 2) {
            setMovie([])
            setCount(1)
            getMovies(SEARCHAPI + searchTerm)
        } else {
            getMovies(MOVIEAPI + count)
        }

    }



    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div>
            <Header />
            <SearchBar onChange={searchMovie} value={searchTerm} />
            <MovieCard movieDetails={movie} />
            {count <= totalPage && !loading ? <LoadMoreButton onClick={loadMore} /> : null}
            <Footer />
        </div>
    )
}

export default Home;