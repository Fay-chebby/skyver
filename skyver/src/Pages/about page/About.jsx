import React from "react";
import styles from "./HeroImage.module.css";
import heroImg from "../";
import Navbar from "../../Components/Navbar.jsx"; // adjust path as needed

const About = () => {
    return (
        <div>
            <Navbar />
        <div className={styles.hero}>
            <img src={heroImg} alt="Speaker" className={styles.heroImage} />
        </div>
        </div>
    );
};

export default About;
