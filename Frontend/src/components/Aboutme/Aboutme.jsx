import React from 'react'
import assets from '../../assets/assets'
import styles from './About.module.css'

const Aboutme = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img src={assets.about} alt="About Me" className={styles.aboutImage}/>
            <ul className={styles.aboutList}>
                <li className={styles.aboutItem}>
                    <img src={assets.cursor} alt="Cursor Icon" />
                    <div className={styles.aboutInfo}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with a passion for creating beautiful and functional user interfaces.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={assets.server} alt="Server Icon" />
                    <div className={styles.aboutInfo}>
                        <h3>Backend Developer</h3>
                        <p>I'm a backend developer with a focus on building robust server-side applications.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={assets.ui} alt="UI Icon" />
                    <div className={styles.aboutInfo}>
                        <h3>UI/UX Designer</h3>
                        <p>I'm a UI/UX designer who loves creating intuitive and engaging user experiences.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Aboutme
