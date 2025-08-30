// components/Main/Banner/Banner.jsx
import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.bannerContent}>
          <h1>Build Your Dream PC</h1>
          <p>Customize your perfect setup with our advanced PC Builder tool and AI assistant</p>
          <div className={styles.bannerActions}>
            <button className={styles.primaryBtn}>Start Building</button>
            <button className={styles.secondaryBtn}>Shop Components</button>
          </div>
        </div>
        <div className={styles.bannerImage}>
          <div className={styles.placeholder}>
            <span>3D PC Preview</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;