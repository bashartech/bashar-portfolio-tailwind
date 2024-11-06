import Image from 'next/image';
import styles from './about.module.css';
import Link from "next/link";

export default function AboutPage() {
  return (
    <div id="about" className={styles.main}>
    <div className={styles.content}>
      <div className={styles.img}>
        <Image
          src="/images/img2.png"
          className={styles.profileImage}
          alt="Description of the image"
          width={400}
          height={400}
        />
      </div>
      
      <div className={styles.text}>
        <div className={styles.box}>
          <div className={styles.heading}>ABOUT US</div>
          <div className={styles.para}>
            I am a dedicated creative professional specializing in front-end web development and UI/UX design, with expertise in HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind CSS, ShadCN UI, and Radix UI. I focus on creating visually appealing, user-friendly websites that seamlessly blend aesthetics with functionality. Additionally, I possess skills in Figma for UI design and video editing, allowing me to craft engaging visual narratives. My unique blend of technical and creative abilities enables me to deliver innovative digital solutions that captivate and inspire.
          </div>
          <div className={styles.btn}>
            <Link href="/about" className={styles.seeMoreButton}>
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}