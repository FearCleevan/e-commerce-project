// components/Header/Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <span>Free shipping on orders over $99</span>
          <div className={styles.topLinks}>
            <a href="#account">My Account</a>
            <a href="#wishlist">Wishlist</a>
            <a href="#cart">Cart (0)</a>
          </div>
        </div>
      </div>
      
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <span>PC Builder</span>
          </div>
          
          <div className={styles.search}>
            <input type="text" placeholder="Search products..." />
            <button>Search</button>
          </div>
          
          <div className={styles.headerActions}>
            <button className={styles.pcBuilderBtn}>PC Builder</button>
            <button className={styles.cartBtn}>Cart (0)</button>
          </div>
          
          <button className={styles.mobileMenuBtn} onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>
      
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
        <div className={styles.container}>
          <ul>
            <li><a href="#laptops">Laptops</a></li>
            <li><a href="#handhelds">Handhelds</a></li>
            <li><a href="#monitors">Monitors/Desktops</a></li>
            <li><a href="#gpus">Graphics Cards</a></li>
            <li><a href="#motherboards">Motherboards/Components</a></li>
            <li><a href="#peripherals">Peripherals</a></li>
            <li><a href="#networking">Networking</a></li>
            <li><a href="#servers">Servers</a></li>
            <li><a href="#automotive">Automotive/AMR</a></li>
            <li><a href="#industrial">Industrial PC/Tablet</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;