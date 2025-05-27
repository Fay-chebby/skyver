import React from "react";
import styles from '../styles/testimonial/Testimonials.module.css';
import chichiImg from "../assets/chichi.jpg";
import queenRitaImg from "../assets/queen.jpg";
import gloriaImg from "../assets/gloria.jpg";

const testimonials = [
    {
        name: "ChiChi",
        country: "South Africa",
        image: chichiImg,
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et",
    },
    {
        name: "Queen Rita",
        country: "USA",
        image: queenRitaImg,
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et",
    },
    {
        name: "Gloria Uko",
        country: "Nigeria",
        image: gloriaImg,
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et",
    },
];

const Testimonials = () => {
    return (
        <div className={styles.testimonialSection}>
            <h2 className={styles.title}>What our customers say <br /> about us</h2>
            <div className={styles.cardContainer}>
                {testimonials.map((item, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.userInfo}>
                            <img src={item.image} alt={item.name} className={styles.avatar} />
                            <div>
                                <strong>{item.name}</strong>
                                <p>{item.country}</p>
                            </div>
                        </div>
                        <p className={styles.quote}>{item.quote}</p>
                        <span className={styles.quoteIcon}>❝❞</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
