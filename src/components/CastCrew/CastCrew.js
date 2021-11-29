import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/no_image.jpeg'
import './CastCrew.css'

const CastCrew = ({ credits }) => {
    console.log(credits)

    return (
        <div className="cast-container">
            <h1>Cast</h1>
            <div className="cast-grid">
                {
                    credits.map((item) => {
                        return item["cast"].map((item) => {
                            return (
                                <div className="card-container" key={item.id}>
                                    <div>
                                        <img className="cast-img" src={item.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}/${item.profile_path}` : NoImage} alt="actor" />
                                    </div>
                                    <div className="text-block">
                                        <span className="cast-text size-22">{item.original_name}</span>
                                        {item.character ? <span className="cast-text size-20">as {item.character}</span> : null}
                                        <span className="cast-text size-18">{item.known_for_department}</span>
                                    </div>
                                </div>
                            )

                        })
                    })
                }
            </div>
        </div>
    )
}

export default CastCrew