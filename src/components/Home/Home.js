import React, { useState, useEffect } from 'react'
import { API_URL, API_KEY, } from '../../config';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MovieCard from '../MovieCard/MovieCard';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton'
import Loading from '../Loading/Loading'

const Home = () => {
    const [movie, setMovie] = useState([]);
    const [count, setCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [visible, setVisible] = useState(20);
    console.log(visible)

    useEffect(() => {
        const fetchMovieURl = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=${count}`)
                const data = await response.json()
                setMovie((movie) => [...movie, ...data.results])
                setTotalPage(data.total_pages)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error)

            }
        }

        fetchMovieURl();

    }, [count])


    const loadMore = () => {
        setCount((count) => count + 1)
        setVisible((visible) => visible + movie.length)
    }



    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div>
            <Header />
            <MovieCard movieDetails={movie} visible={visible} />
            {count <= totalPage ? <LoadMoreButton onClick={loadMore} /> : null}
            <Footer />
        </div>
    )
}

export default Home;