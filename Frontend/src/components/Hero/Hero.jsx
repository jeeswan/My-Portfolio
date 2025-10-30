import React from 'react'
import assets from '../../assets/assets';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Jeeswan</h1>
            <p className={styles.description}>A developer who enjoys designing intuitive interfaces and bringing ideas to life through code.</p>
            <a href="mailto:bajrajeeswan@gmail.com" className={styles.contactbtn}>Contact Me</a>
        </div>
        <img src={assets.hero} alt="heroimage" className={styles.heroimg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>
  )
}

export default Hero
