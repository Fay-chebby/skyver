import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <div>
                    <h3>Support</h3>
                    <ul>
                        <li>Help Center</li>
                        <li>Privacy Policy</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>Jl. Umalas 1 No.3, Kerobokan<br />Kelod, Badung, Bali</p>
                    <p>+62 (522) 9805084</p>
                    <p>support@domain.com</p>
                </div>
                <div>
                    <h3>Connect With Us</h3>
                    <div className={styles.socials}>
                        <a href="#">🐦</a>
                        <a href="#">📸</a>
                        <a href="#">📘</a>
                        <a href="#">💼</a>
                    </div>
                </div>
            </div>
            <p className={styles.copyright}>
                © Skyver. All rights reserved. Designed by Fay-chebby
            </p>
        </footer>
    );
};

export default Footer;
