import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <header>
            <img className="logo" src="./assets/logo-reptiles.png" alt="logo reptiles shop" />
            <Navbar />
        </header>
    )
}

export default Header;