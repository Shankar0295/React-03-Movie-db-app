import React from 'react'
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import './MovieCard.css'
import { Link } from 'react-router-dom';

const MovieCard = ({ movieDetails }) => {
    console.log(movieDetails, "details")
    return (
        <div className="movieCard-wrapper">
            <h1 className="cardName">Top Rated Movies</h1>
            <div className="movieCard">{movieDetails.map((items, i) => {
                return (
                    <div className="moviePosterWrapper" key={i}>
                        <Link to={`${items.id}`} className="movieLink">
                            <img className="moviePoster" src={`${IMAGE_BASE_URL}${POSTER_SIZE}/${items.poster_path}`} alt="thumbnail" />
                        </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default MovieCard