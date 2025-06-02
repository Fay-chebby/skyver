import React from "react";
import styles from "../../styles/About/About.module.css";
import heroImg from "../../assets/speaker.jpeg";
import Navbar from "../../Components/Navbar.jsx";
import Footer from "../../Components/Footer.jsx";
import { FaBuilding, FaBullseye, FaUserTie, FaChartLine } from "react-icons/fa";

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
            <div className={styles.wrapper}>
                {/* Why Choose Us Section */}
                <section className={styles.whyChoose}>
                    <div className={styles.text}>
                        <h2>Why Choose us?</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Doloremque assumenda incidunt id
                            cum.
                            <strong> Why do we press harder on the remote control when we know the batteries are
                                weak?</strong>
                        </p>
                        <p>
                            Autem temporibus, neque voluptates officiis molestias. At vero eos et accusamus et iusto
                            odio.
                        </p>
                        <button className={styles.readMore}>Read More</button>
                    </div>
                    <div className={styles.imageBox}>
                        <img src={heroImg} alt="Why Choose Us"/>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className={styles.stats}>
                    <div>
                        <h3>8</h3>
                        <p>Years of Service</p>
                    </div>
                    <div>
                        <h3>459</h3>
                        <p>Sq. Meter Area</p>
                    </div>
                    <div>
                        <h3>50</h3>
                        <p>Nice Rooms</p>
                    </div>
                    <div>
                        <h3>&nbsp;</h3>
                        <p>&nbsp;</p>
                    </div>
                </section>

                {/* Services Section */}
                <section className={styles.services}>
                    <p className={styles.serviceTag}>— Our Services —</p>
                    <h2>
                        Explore Our <span>Services</span>
                    </h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <FaBuilding  className={styles.icon}/>
                            <h4>Aligned and Connected.</h4>
                            <p>Figma ipsum  layer.</p>
                        </div>
                        <div className={`${styles.card} ${styles.highlight}`}>
                            <FaBullseye className={styles.icon}/>
                            <h4>Purpose Unlocked</h4>
                            <p>Figma ipsum component variant mask layer.</p>
                        </div>
                        <div className={styles.card}>
                            <FaUserTie className={styles.icon}/>
                            <h4>Legacy Leadership</h4>
                            <p>Figma ipsum component variant mask layer.</p>
                        </div>
                        <div className={styles.card}>
                            <FaChartLine className={styles.icon}/>
                            <h4>The Financial Shift</h4>
                            <p>Figma ipsum component variant mask layer.</p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    );
};

export default About;
