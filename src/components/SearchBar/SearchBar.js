import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    console.log(props)
    // console.log({ handleSearch })
    // const onChange = (e) => {
    //     // Here, we invoke the callback with the new value
    //     handleSearch(e.target.value);
    //     console.log(e.target.value)
    // }
    return (
        <div className="search-wrapper">
            <input type="text" placeholder="Search a Movie" onChange={props.onChange} value={props.value} className="search-input"></input>
        </div>
    )
}

export default SearchBar;