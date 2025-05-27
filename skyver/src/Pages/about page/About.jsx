import React from "react";
import styles from "./HeroImage.module.css";
import heroImg from "../"; // adjust path as needed

const About = () => {
    return (
        <div className={styles.hero}>
            <img src={heroImg} alt="Speaker" className={styles.heroImage} />
        </div>
    );
};

export default About;
