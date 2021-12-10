import React from 'react'
import Logo from '../../logo/movieDblogo.png'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';


const Header = (props) => {
    console.log(props)
    return (
        <div className="header-wrapper">
            <Link className="title-style" to="/"><h1 className="header-title">MOVIEFLIX</h1></Link>
            <div className="search-container">
                <SearchBar onChange={props.onChange} value={props.value} />
                <img className="movieDB-logo" src={Logo} alt="movieDB logo" />
            </div>
        </div>
    )
}

export default Header