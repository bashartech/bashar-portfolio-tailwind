
"use client";
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from './hero.module.css';


export default function Hero() {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: ["Front-end Developer", "UI/UX Designer", "Video Editor"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  const socialLinks = [
    { icon: 'github', url: 'https://github.com/bashartech' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/m-bashar-sheikh/' },
    { icon: 'instagram-alt', url: 'https://instagram.com/bashartech107?igshid=MzNlNGNkZWQ4Mg==' },
    { icon: 'gmail', url: 'mailto:bashartc14@gmail.com' },
  ];

  return (
    <>
    <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
     <div className={styles.hero} id="/">
      <div className={styles.heroContent}>
        <div className={styles.text}>
          <div className={styles.content}>
            <h3 className={styles.greeting}>
              Hello, It's Me
            </h3>
            <h1 className={styles.name}>M.Bashar</h1>
            <h3 className={styles.role}>
              And I am a <span className={styles.typedText} ref={typedElement}></span>
            </h3>
            <p className={styles.description}>
              We create dynamic websites and captivating visuals and videos to
              engage large audience effectively
            </p>
            <div className={styles.socialMedia}>
              {socialLinks.map(({ icon, url }) => (
                <Link
                  key={icon}
                  className={styles.socialLink}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`bx bxl-${icon}`} aria-hidden="true"></i>
                  <span className={styles.srOnly}>{icon}</span>
                </Link>
              ))}
            </div>
            <div className={styles.btn}>
              <Link
                href="https://photos.app.goo.gl/bH6xuncsKHQHdMBs8"
                className={styles.cvButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Check CV
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.img}>
          <Image 
            className={styles.profileImage} 
            src="/images/img1.png" 
            alt="Profile of M.Bashar" 
            width={500} 
            height={500}
            priority
          />
        </div>
      </div>
    </div>
    </>
  );
}