import React from 'react'
import './LoadMoreButton.css'

const LoadMoreButton = (props) => {
    console.log(props)
    return (
        <div className="button-wrapper">
            <button className="loadmore" onClick={props.onClick}>Load More</button>
        </div>
    )
}

export default LoadMoreButton