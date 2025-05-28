import React from "react";
import styles from "../../styles/About/About.module.css";
import heroImg from "../../assets/speaker.jpeg";
import Navbar from "../../Components/Navbar.jsx"; // adjust path as needed

const About = () => {
    return (
        <div>
            <Navbar/>
            <div className={styles.hero}>
                <img src={heroImg} alt="Speaker" className={styles.heroImage}/>
            </div>
            <section className={styles.history}>
                <div className={styles.imageContainer}>
                    <img src={heroImg} alt="History"/>
                </div>
                <div className={styles.textContainer}>
                    <h2>
                        History of <span className={styles.highlight}>JustStay</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloremque
                        assumenda incidunt id cum. Fugiat repellat cumque delectus, at ipsum
                        ad iure explicabo perferendis. <strong>If you're still reading this, congrats, you’re officially
                        a masochist.</strong>
                    </p>
                    <p className={styles.subText}>
                        Autem temporibus, neque voluptas officiis molestias. At vero eos et
                        accusamus et iusto odio dignissimos ducimus. But hey, at least you’re not
                        stuck in traffic, or worse, listening to a never-ending sales pitch, right?
                    </p>
                    <button className={styles.readMore}>Read More</button>
                </div>
            </section>
        </div>
    );
};

export default About;
