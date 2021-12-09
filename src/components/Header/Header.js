import React from 'react'
import Logo from '../../logo/movieDblogo.png'
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header-wrapper">
            <Link className="title-style" to="/"><h1 className="header-title">MOVIEFLIX</h1></Link>
            <img className="movieDB-logo" src={Logo} alt="movieDB logo" />
        </div>
    )
}

export default Header