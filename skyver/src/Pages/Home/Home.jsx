import React from 'react';
import styles from '../../styles/Home/home.module.css';
import speaker from '../../assets/speaker.jpeg'
import Navbar from "../../Components/Navbar.jsx";
import CoachingServices from "../../Components/CoachingServices.jsx";
import Testimonials from "../../Components/Testimonials.jsx";


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
                <div className={styles.image}>
                <div className={styles.heroImage}>
                    <img src={speaker} alt="Speaker" />
                    <div className={styles.successBox}>
                        <div className={styles.percentage}>90%</div>
                        <div>Success<br />Result</div>
                    </div>
                </div>
                </div>
            </div>
            < div className={styles.valuess}>
            <div className={styles.values}>
                <div>
                    <div className={styles.heroImages}>
                        <img src={speaker} alt="Speaker"/>
                    </div>
                    </div>
                <div>
                    <div className={styles.text}>
                        <p> Our mission and vision</p>
                        <div className={styles.value}>

                            <div className={styles.mission}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis
                                    euismod
                                    vehicula.</p>

                            </div>
                            <div className={styles.vision}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis
                                    euismod
                                    vehicula.</p>

                            </div>

                        </div>
                        <button className={styles.viewMoreBtn}>View more

                        </button>
                    </div>

                </div>

            </div>
                <CoachingServices/>
            </div>
            <Testimonials/>
        </div>
    );
}

export default Home;
