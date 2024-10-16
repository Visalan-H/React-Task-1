import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header_main padded">
            <div className="logo">
                <h2>LOGO</h2>
            </div>
            <div className="nav_links">
                <h3><a href='#home'>Home</a></h3>
                <h3><a href='#about'>About</a></h3>
                <h3><a href='#services'>Services</a></h3>
                <h3><a href='#portfolio'>Portfolio</a></h3>
                <h3><a href='#pricing'>Pricing</a></h3>
                <h3><a href='#blogs'>Blog</a></h3>
                <h3><a href='#contact'>Contact</a></h3>
            </div>
            <div className="ham_menu padded" onClick={toggleMenu}>
                <i className="fa fa-align-right"></i>
            </div>
            <div className={`menu_items ${menuOpen ? 'show' : ''} padded`}>
                <a href='#home' onClick={toggleMenu}>
                    <h3>Home</h3>
                </a>
                <a href='#about' onClick={toggleMenu}>
                    <h3>About</h3>
                </a>
                <a href='#services' onClick={toggleMenu}>
                    <h3>Services</h3>
                </a>
                <a href='#portfolio' onClick={toggleMenu}>
                    <h3>Portfolio</h3>
                </a>
                <a href='#pricing' onClick={toggleMenu}>
                    <h3>Pricing</h3>
                </a>
                <a href='#blogs' onClick={toggleMenu}>
                    <h3>Blog</h3>
                </a>
                <a href='#contact' onClick={toggleMenu}>
                    <h3>Contact</h3>
                </a>
            </div>

        </div>
    );
}

export default Header;
