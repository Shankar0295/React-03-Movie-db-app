import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import './MovieInfo.css'
import { Link } from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CastCrew from '../CastCrew/CastCrew';
import MovieProviders from '../MovieProviders/MovieProviders';
import Loading from '../Loading/Loading'


const MovieInfo = (props) => {
    const movieInfo = props.match.params.id
    const [movieDetails, setMovieDetails] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getInfo = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${API_URL}movie/${movieInfo}?api_key=${API_KEY}&language=IN&append_to_response=credits,watch/providers`)
                const data = await response.json()
                setMovieDetails([data])
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
        getInfo()
    }, [])


    const genres = movieDetails.map((item) => {
        return (
            item.genres.map((genre, index) => {
                return (<span key={genre.id}>{(index ? ', ' : '') + genre.name}</span>)
            })
        )
    })

    const Director = () => {
        let DirectorArray = []
        for (let key in movieDetails) {
            movieDetails[key].credits.crew.forEach((item) => {
                DirectorArray.push(item)
            })
            return DirectorArray.filter((member) => member.job === "Director")
        }
    }

    const minutesToHours = (mints) => {
        let hours = Math.floor(mints / 60);
        let minutes = mints % 60;
        return `${hours}h ${minutes}m`
    }

    const convertMoney = (money) => {
        var formatter = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
        });
        return formatter.format(money);
    }

    const setVoteClass = (vote) => {
        if (vote >= 8) {
            return "green"
        } else if (vote >= 6) {
            return "orange"
        } else {
            return "red"
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
            <Link to="/"><h4 className="movieInfo-homebtn">Back to Home</h4></Link>
            <div className="movieInfo-container">{movieDetails.map((item) => {
                return (
                    <div key={item.id} className="movieInfo-backdrop" style={{ background: `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}/${item.backdrop_path})` }}>
                        <section className="movieInfo-section">
                            <img className="movieInfo-poster" src={`${IMAGE_BASE_URL}${POSTER_SIZE}/${item.poster_path}`} alt="thumbnail" />
                            <div>
                                <div>
                                    <h2>{item.title}({new Date(item.release_date).toLocaleDateString()})</h2>
                                </div>
                                <div className="movieInfo-secondContainer">
                                    <p className="movieInfo-vote">
                                        <span className={`movieInfo-votePadding ${setVoteClass(item.vote_average)}`}>{item.vote_average}</span></p>
                                    <span className="movieInfo-genres">{genres}</span>
                                    <span className="movieInfo-genres">{minutesToHours(item.runtime)}</span>
                                </div>
                                <section>
                                    <div className="movieInfo-tagline"><h3>{item.tagline}</h3></div>
                                    <div>
                                        <h2>OVERVIEW</h2>
                                        <p className="movieInfo-overview">{item.overview}</p>
                                    </div>
                                </section>
                                <div className="movieInfo-details">
                                    {item.budget > 0 ? <div className="budget">
                                        <h2>Budget</h2>
                                        <h3>{convertMoney(item.budget)}</h3>
                                    </div> : null}
                                    {item.revenue > 0 ? <div className="budget">
                                        <h2>Revenue</h2>
                                        <h3>{convertMoney(item.revenue)}</h3>
                                    </div> : null}
                                    <div>
                                        <h2>Streaming On</h2>
                                        <span><MovieProviders watchproviders={movieDetails.map((item) => { return (item["watch/providers"]) })} /></span>
                                    </div>
                                </div>
                                <div>
                                    <h2>{Director().length > 1 ? 'DIRECTOR\'S' : 'DIRECTOR'}</h2>
                                    <div>{Director().map((item, index) => {
                                        return (<span style={{ fontWeight: 500 }} key={item.id}>{(index ? ', ' : '') + item.name}</span>)
                                    })}</div>
                                </div>
                            </div>
                        </section>
                    </div>
                )
            })}
            </div>
            <CastCrew credits={movieDetails.map((item) => { return (item["credits"]) })} />
            <Footer />
        </div>

    )
}

export default MovieInfo