
import React from 'react';

 const Navbar= () => {
    return (
        <nav className="navbar">
            <div className="logo">SKYVER</div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <button className="contact-btn">Contact Us</button>
        </nav>
    );
};

export default Navbar;
