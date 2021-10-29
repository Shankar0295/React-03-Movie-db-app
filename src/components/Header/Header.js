import React from 'react'
import Logo from '../../logo/movieDblogo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header-wrapper">
            <h1>MOVIEFLIX</h1>
            <img className="movieDB-logo" src={Logo} alt="movieDB logo" />
        </div>
    )
}

export default Header