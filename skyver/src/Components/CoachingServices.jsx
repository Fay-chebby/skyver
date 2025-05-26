import React from 'react';
import styles from '../styles/Home/coachingServices.module.css';
import { FaChalkboardTeacher, FaCoins, FaUserCircle } from 'react-icons/fa';

const services = [
    {
        icon: <FaChalkboardTeacher />,
        title: 'Career Coaching',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula.',
    },
    {
        icon: <FaCoins />,
        title: 'Financial Coaching',
        description: 'Quisque diam dui, imperdiet et hendrerit in, accumsan tempus erat. Donec in nunc quam.',
    },
    {
        icon: <FaUserCircle />,
        title: 'Personal Development',
        description: 'Praesent scelerisque, felis vel fringilla tincidunt, sapien justo fermentum lorem, nec dictum eros.',
    },
];

function CoachingServices() {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.textCenter}>
                <h2>One-on-one Coaching for personal growth</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula.
                </p>
            </div>

            <div className={styles.cardContainer}>
                {services.map((service, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <button className={styles.learnMore}>Learn More</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CoachingServices;
