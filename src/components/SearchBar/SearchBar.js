import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    console.log(props)

    return (
        <div className="search-wrapper">
            <input type="text" placeholder="Search a Movie" onChange={props.onChange} value={props.value} className="search-input"></input>
        </div>
    )
}

export default SearchBar;