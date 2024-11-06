"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBar = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <>
     <div id="/home" className={styles.header}>
      <div className={styles.logo}>
        <Link href="/home">
          <span className={styles.logoText}>Bashar Portfolio</span>
        </Link>
      </div>
    
      <div className={styles.navbar}>
        <ul className={styles.navList}>
          {["Home", "About", "Services", "Portfolio", "Footer"].map((item, index) => (
            <Link key={index} 
              className={styles.navLink} 
              href={item === "Home" ? "/home" : item === "Portfolio" || item === "Footer" ? `/home#${item.toLowerCase()}` : `/${item.toLowerCase()}`}
            >
              <li className={styles.navItem}>{item}</li>
              <span className={styles.navUnderline}></span>
            </Link>
          ))}
        </ul>
      </div>
      <div className={styles.mobileMenuButton}>
        <button onClick={toggleBar} className={styles.menuIcon}>
          <svg
            className={styles.menuSvg}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileNavList}>
          <Link href="/">
            <li className={styles.mobileNavItem} onClick={closeMenu}>Home</li>
          </Link>
          <Link href="/about">
            <li className={styles.mobileNavItem} onClick={closeMenu}>About</li>
          </Link>
          <Link href="/services">
            <li className={styles.mobileNavItem} onClick={closeMenu}>Services</li>
          </Link>
          <Link href="/home#portfolio">
            <li className={styles.mobileNavItem} onClick={closeMenu}>Portfolio</li>
          </Link>
          <Link href="/home#footer">
            <li className={styles.mobileNavItem} onClick={closeMenu}>Contact</li>
          </Link>
        </ul>
      </div>
    </div>

    </>
  );
}

