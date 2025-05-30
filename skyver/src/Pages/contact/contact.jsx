import React from "react";
import styles from "../../styles/contact/Contact.module.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaStar, FaShieldAlt, FaShippingFast, FaHeadset } from "react-icons/fa";

const Contact = () => {
    return (
        <div className={styles.contactWrapper}>
            {/* Header */}
            <div className={styles.heroHeader}>
                <h1>Contact</h1>
                <p>Home / Contact</p>
            </div>

            {/* Contact Section */}
            <section className={styles.contactSection}>
                <h2>Get In Touch With Us</h2>
                <p className={styles.subtitle}>
                    For more information about our products & services, please feel free to drop us
                    an email. Our staff is always here to help you out. Do not hesitate!
                </p>

                <div className={styles.contactContent}>
                    {/* Left Info */}
                    <div className={styles.infoBlock}>
                        <div className={styles.infoItem}>
                            <FaMapMarkerAlt className={styles.icon} />
                            <p><strong>Address</strong><br />236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                        <div className={styles.infoItem}>
                            <FaPhoneAlt className={styles.icon} />
                            <p><strong>Phone</strong><br />Mobile: (+84) 546-6789<br />Hotline: (+84) 456-6789</p>
                        </div>
                        <div className={styles.infoItem}>
                            <FaClock className={styles.icon} />
                            <p><strong>Working Time</strong><br />Mon-Fri: 9:00 - 22:00<br />Sat-Sun: 9:00 - 21:00</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className={styles.contactForm}>
                        <input type="text" placeholder="Your name" />
                        <input type="email" placeholder="Email address" />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Message" rows="4"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>

            {/* Feature Strip */}
            <div className={styles.featureStrip}>
                <div><FaStar /> <p>High Quality<br /><span>crafted from top materials</span></p></div>
                <div><FaShieldAlt /> <p>Warranty Protection<br /><span>Over 2 years</span></p></div>
                <div><FaShippingFast /> <p>Free Shipping<br /><span>Order over 150 $</span></p></div>
                <div><FaHeadset /> <p>24 / 7 Support<br /><span>Dedicated support</span></p></div>
            </div>
        </div>
    );
};

export default Contact;
