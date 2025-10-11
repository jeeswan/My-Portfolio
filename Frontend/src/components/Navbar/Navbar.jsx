import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {getImageUrl} from '../../utils.js'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a href="/"
        className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
            {menuOpen ? (
                <FaTimes
                    size={25}
                    className={styles.menubtn}
                    onClick={() => setMenuOpen(false)}
                />
                ) : (
                <FaBars
                    size={25}
                    className={styles.menubtn}
                    onClick={() => setMenuOpen(true)}
                />
                )}

            <ul className={`${styles.menuList} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
