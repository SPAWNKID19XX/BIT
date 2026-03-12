import styles from './AboutUs.module.css';

export const AboutUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.about_us_section}>
                <div className={styles.my_picture}>

                </div>
                <div className={styles.content}>
                    <h2>About Us</h2>
                    <p>
                        Development studio specializing in modern and reliable web applications for businesses.
                        Focused on building scalable backend systems, intuitive user interfaces, and integrations with external services.
                        Strong emphasis on clean code, performance, and maintainability.
                        Helping companies launch new digital products and improve existing solutions.
                        The goal is to deliver efficient, stable, and user-friendly web services that support business growth. 
                    </p>

                    <div className={styles.hard_skils}>
                        <div className={styles.card}>
                            <h4>Backend Development</h4>
                            <ul>
                                <li>Python</li>
                                <li>Django</li>
                                <li>DRF</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h4>Frontend Development</h4>
                            <ul>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h4>Tools</h4>
                            <ul>
                                <li>Git</li>
                                <li>Docker</li>
                                <li>GoogleCloude</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}