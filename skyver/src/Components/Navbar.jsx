import React from 'react';
import styles from '../styles/navbar/Navbar.module.css';



function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>SKYVER</div>
            <ul className={styles.navLinks}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <button className={styles.contactBtn}>Contact Us</button>
        </nav>
    );
}

export default Navbar;
