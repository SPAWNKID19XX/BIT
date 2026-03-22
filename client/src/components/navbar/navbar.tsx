import React, { useState } from "react"
import styles from "./navbar.module.css"

export const Navbar: React.FC = () => {
    interface NavLink {
        name: string;
        href: string;
    }

    const navLinks: NavLink[] = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        {name: "Projects", href: "/projects" },
        { name: "About Us", href: "/about" },
        { name: "Contacts", href: "/contact" }
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    return (

    <div className={styles.container}>
        <nav className={styles.navbar}>
            <div className={styles.logo_section}>
                <a href="/">
                    <img src="/src/assets/logo.png" alt="Logo" />
                </a>
             </div>

            <button
                className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`${styles.links_section} ${menuOpen ? styles.menu_open : ""}`}>
                <ul className={styles.nav_links}>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a href={link.href} onClick={() => setMenuOpen(false)}>{link.name}</a>
                        </li>
                    ))}
                </ul>
                <div className={styles.button_section}>
                    <button>Get in Touch</button>
                </div>
            </div>
        </nav>
    </div>

  )
}
