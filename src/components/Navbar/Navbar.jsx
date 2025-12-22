import React from 'react';
import './Navbar.css';

const Navbar = ({ scrolled, onLogoClick }) => {
    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-content">
                <img
                    src="logode.png"
                    alt="MedHive Logo"
                    className="nav-logo-image"
                    onClick={onLogoClick}
                />
                <div className="nav-links">
                    <a href="#problems" onClick={(e) => handleNavClick(e, 'problems')}>Problems</a>
                    <a href="#ai" onClick={(e) => handleNavClick(e, 'ai')}>Solutions</a>
                    <a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
