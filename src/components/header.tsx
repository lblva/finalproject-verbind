import '../styles/header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
            <nav>
                <Link to="/">
                    <img src="/logo.png" alt="logo" className="logo" />
                </Link>
                <Link to="/about">About me</Link>
            </nav>
    );
};

export default Header;