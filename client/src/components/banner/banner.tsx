import styles from './banner.module.css';
export const Banner = () => {
  return (
    <div className={styles.bg_conteiner}>
        <div className={styles.container}>
            <div className={styles.text_section}>
                <h1 className={styles.title}>Custom Web Solutions</h1>
                <h1 className={styles.subtitle}>for Your <span className={styles.blue_text}>Business</span></h1>
                <p className={styles.description}>We are a small team of professionals delivering <br />
                high-quality web applications, SaaS, and digital products.</p>
                <div className={styles.buttons}>
                    <button className={styles.button}>View our Projects</button>
                    <button className={styles.button}>Our Services</button>
                </div>
            </div>
        </div>
    </div>
    
  );
}