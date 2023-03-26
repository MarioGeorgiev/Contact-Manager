import styles from './Starter.module.css'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

export default function Starter() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id={styles['hero']}>
      <div className={styles['hero-container']}>
        <a href="index.html" className={styles['hero-logo']} data-aos="zoom-in"><img src={require("../../images/logo/logo.png")} alt="logo" /></a>
        <h1 data-aos="zoom-in">Welcome To Contact Manager</h1>
        <div>
        <Link to={`/login`}>
        <p data-aos="fade-up" data-aos-delay="200" href="#about" className={styles["btn-get-started"]}>Login</p></Link>
        </div>
      </div>
    </section>
  )
}