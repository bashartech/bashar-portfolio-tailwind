import Header from "../compoents/Header/Header";
import Link from "next/link"
import styles from './about.module.css';

export default function About() {
  return (
    <>
    <div className={styles.main}>
      <Header />
      <div className={`${styles.heading} ${styles.h1}`}>
        <h2>About</h2>
      </div>
      <div className={styles.heading}>
        <h2>About Us</h2>
      </div>
      <div className={styles.box}>
        <div className={styles.para}>
          <p>
            I am a passionate and skilled creative professional with a robust background in front end web development specializing in crafting exceptional user experiences through coding and design. My expertise lies in HTML CSS JavaScript and TypeScript alongside advanced frameworks like Next.js Tailwind CSS ShadCN UI and Radix UI. This strong coding foundation enables me to build dynamic visually appealing and highly functional websites that not only meet technical requirements but also prioritize performance and usability.
            <br />
            <br />
            My way to deal with web improvement accentuates perfect, viable code and responsive plan, guaranteeing that each undertaking adjusts flawlessly across gadgets and stages. Im focused on involving best practices in coding, permitting me to convey proficient and versatile arrangements that upgrade client commitment and fulfillment.
            <br />
            <br />
            Notwithstanding my specialized abilities, I have a sharp eye for UI/UX configuration, utilizing devices like Figma to conceptualize and make client focused interfaces. My plan theory rotates around mixing feel with usefulness, it is instinctive and outwardly convincing to guarantee that each advanced item. I center around understanding client needs and ways of behaving to make plans that reverberate with main interest groups.
            <br />
            <br />
            Besides, my experience in video altering enhances my abilities to narrate, permitting me to change ideas into charming visual stories, whether for special substance or true to life projects. This mix of coding ability, UI/UX plan capability, and sight and sound narrating enables me to convey inventive computerized arrangements that raise brand character and make enduring impressions. I constantly endeavor to refine my abilities and remain refreshed on industry patterns to guarantee that my work stays significant and lined up with the developing necessities of clients and clients the same
          </p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/home#footer">
          <button className={styles.contactButton}>
            Contact Us
          </button>
        </Link>
      </div>
    </div>
    </>
  )
}
