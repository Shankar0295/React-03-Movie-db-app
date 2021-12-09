import React from 'react'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import './MovieCard.css'
import { Link } from 'react-router-dom';

const MovieCard = ({ movieDetails, searchTerm }) => {
    console.log(searchTerm, "searchTerm")
    // const setVoteClass = (vote) => {
    //     if (vote >= 8) {
    //         return "green"
    //     } else if (vote >= 6) {
    //         return "orange"
    //     } else {
    //         return "red"
    //     }
    // }
    console.log(movieDetails, "details")
    return (
        <div className="movieCard-wrapper">
            {searchTerm ? <h1 className="cardName">Search Results</h1> : <h1 className="cardName">Top Rated Movies</h1>}
            <div className="movieCard">{movieDetails.map((items, i) => {
                return (
                    <div className="moviePosterWrapper" key={i}>
                        <Link to={`${items.id}`} className="movieLink">
                            <img className="moviePoster" src={`${IMAGE_BASE_URL}${POSTER_SIZE}/${items.poster_path}`} alt="thumbnail" />
                            {/* <div className="wrapper-text">
                                <p className="card-text">{items.title}</p>
                                <p className={`card-text ${setVoteClass(items.vote_average)}`}>{items.vote_average}</p>
                            </div> */}
                        </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default MovieCard