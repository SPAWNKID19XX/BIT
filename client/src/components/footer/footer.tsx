import styles from "./footer.module.css";

export const Footer = () => {
  const current_year = new Date().getFullYear()
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.top_footer}>
          <div className={styles.email}>
            <a href="mailto:borisisac@gmail.com">
              borisisac@gmail.com
            </a>
          </div>
          <div className={styles.github}>
            <a href="https://github.com/SPAWNKID19XX/">SPAWNKID19XX</a>
          </div>
          <div className={styles.phone}>
            <a href="tel:+351964696149">+351964696149</a>
          </div>
        </div>
        <div className={styles.botton_footer}>
          © {current_year} BIT. All rights reserved.
        </div>
      </div>

    </footer>
  )
}