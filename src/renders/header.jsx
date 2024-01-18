import React, { useState } from "react";
import { Link } from "react-router-dom";
import './header.scss';

function Header() {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen((prevNavOpen) => !prevNavOpen);
    };

    return (
        <div className={`header_container ${isNavOpen ? 'nav-open' : ''}`}>
            <div className="logo-container">
                <img src="/path/to/logo.png" alt="Company Logo" className="logo" />
                <span className="company-name">Lakshmi Venkatesh Enterprise</span>
            </div>
            <div className="menu-icon" onClick={toggleNav}>
                <div className={`bar ${isNavOpen ? 'bar-open' : ''}`}></div>
                <div className={`bar ${isNavOpen ? 'bar-open' : ''}`}></div>
                <div className={`bar ${isNavOpen ? 'bar-open' : ''}`}></div>
            </div>
            <nav className={`navigation ${isNavOpen ? 'nav-open' : ''}`}>
                <ul className={`nav-list ${isNavOpen ? 'nav-list-open' : ''}`}>
                    <li className="nav-home" id="nav-home"><Link to="/">HOME</Link></li>
                    <li className="nav-about" id="nav-about"><Link to="/about">ABOUT US</Link></li>
                    <li className="nav-products" id="nav-products"><Link to="/product">PRODUCTS</Link></li>
                    <li className="nav-gallery" id="nav-gallery"><Link to="/gallery">GALLERY</Link></li>
                    <li className="nav-contact" id="nav-contact"><Link to="/contactus">CONTACT US</Link></li>
                    <li className="nav-login" id="nav-login"><Link to="/login">LOGIN</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
