import React from 'react';
import styles from '../styles/navbar/Navbar.module.css';
import {Link} from "react-router-dom"


function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>SKYVER</div>
            <ul className={styles.navLinks}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
            <Link to="/contact">
                <button className={styles.contactBtn}>Contact Us</button>
            </Link>
        </nav>
    );
}

export default Navbar;
