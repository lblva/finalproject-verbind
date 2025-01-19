import '../styles/header.css';
import React from 'react';

function Header() {
    return (
        <header>
            <img src = "/logo.png" alt = "logo" className='logo'/>
            <nav>
                <p> About me</p>
            </nav>
        </header>
    );
};

export default Header;