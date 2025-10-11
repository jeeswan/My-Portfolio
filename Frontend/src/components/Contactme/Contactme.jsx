import React from 'react'
import styles from './Contactme.module.css'
import assets from '../../assets/assets'

const Contactme = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2 className={styles.title}>Contact Me</h2>
            <p className={styles.description}>Feel free to reach out for collaborations or just a chat!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={assets.email} alt="Email" />
                <a href="mailto:bajrajeeswan@gmail.com">bajrajeeswan@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={assets.github} alt="GitHub" />
                <a href="https://github.com/jeeswan">github.com/jeeswan</a>
            </li>
            <li className={styles.link}>
                <img src={assets.linkedin} alt="LinkedIn" />
                <a href="https://www.linkedin.com/in/jeeswan-bajracharya/">linkedin.com/in/jeeswan-bajracharya</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contactme
