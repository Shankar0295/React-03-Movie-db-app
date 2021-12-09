import React from 'react'
import './LoadMoreButton.css'
import Footer from '../Footer/Footer';


const LoadMoreButton = (props) => {
    console.log(props)
    return (
        <div className="button-wrapper">
            <button className="loadmore" onClick={props.onClick}>Load More</button>
            <Footer />
        </div>
    )
}

export default LoadMoreButton