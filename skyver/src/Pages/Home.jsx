import React from 'react';
import styles from '../styles/Home/home.module.css';

import Navbar from "../Components/Navbar.jsx";


function Home() {
    return (
        <div className={styles.home}>
          <Navbar />
            <div className={styles.heroSection}>
                <div className={styles.heroText}>
                    <h1>The Power of a Growth Mindset</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula.</p>
                    <button className={styles.viewMoreBtn}>View more</button>
                </div>
                <div className={styles.heroImage}>
                    <img src="https://via.placeholder.com/400x400" alt="Speaker" />
                    <div className={styles.successBox}>
                        <div className={styles.percentage}>90%</div>
                        <div>Success<br />Result</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
