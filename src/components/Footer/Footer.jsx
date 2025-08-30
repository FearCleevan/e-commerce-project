// components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>PC Builder</h3>
            <p>Building the perfect PC for your needs and budget since 2023.</p>
            <div className={styles.socialLinks}>
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#instagram">Instagram</a>
              <a href="#youtube">YouTube</a>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Shop</h4>
            <ul>
              <li><a href="#laptops">Laptops</a></li>
              <li><a href="#desktops">Desktops</a></li>
              <li><a href="#components">Components</a></li>
              <li><a href="#peripherals">Peripherals</a></li>
              <li><a href="#networking">Networking</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Support</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#shipping">Shipping & Returns</a></li>
              <li><a href="#warranty">Warranty</a></li>
              <li><a href="#support">Technical Support</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#affiliates">Affiliate Program</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Newsletter</h4>
            <p>Subscribe to get special offers, free giveaways, and product launches.</p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2023 PC Builder. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;