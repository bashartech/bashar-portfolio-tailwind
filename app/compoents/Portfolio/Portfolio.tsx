
import styles from './portfolio.module.css';

export default function PortfolioPage() {
  const projects = [
    { Image: 'bashar-motors.PNG', link: 'https://bashar-motors.vercel.app/',h4: "Bashar Motors",p:"A professional car purchase website featuring top-tier vehicles, expertly crafted using Next.js, React, CSS, and TypeScript for a seamless browsing and buying experience." },

    { Image: 'image-generator.PNG', link: 'https://ai-image-developer-by-bashar.netlify.app/', h4: "Ai Image Generator", p: "An advanced AI image generator website, meticulously crafted with JavaScript, delivering high-quality, dynamic visuals through seamless and intuitive user interactions. " },

    { Image: 'clone-pic.PNG', link: 'https://bashars-clone.vercel.app/', h4: "Netflix Search Bar", p: "A sophisticated Movie Search Netflix Clone, developed with JavaScript, enabling users to effortlessly find and view detailed information on any movie." },

    { Image: 'hangman-game.PNG', link: 'https://hang-men-game.netlify.app', h4: "Hangman Game", p: "An interactive Hangman Game built with JavaScript, offering an engaging word-guessing experience through intuitive gameplay and dynamic features. " },

    { Image: 'resume-builder.PNG', link: 'https://builder-your-resume.vercel.app/', h4: "Resume Builder", p: "A streamlined resume builder website developed with TypeScript, designed to simplify creating professional resumes with ease and efficiency. " },

    { Image: 'tailwind-css.PNG', link: 'https://tailwind-css-app-ivory.vercel.app/?__vercel_draft=1', h4: " UI/UX Design Of Bashar Tech Website ", p: "A sleek UI/UX design for the Bashar Tech website, crafted with Next.js, React, and Tailwind CSS for a seamless user experience." },
  ];

  return (
    <div id="portfolio" className={styles.portfolioSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Latest Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={styles.projectCard}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={`/images/${project.Image}`}
                  alt={`Project ${index + 1}`}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.overlay}>
                <h4 className={styles.projectTitle}>{project.h4}</h4>
                <p className={styles.projectDescription}>{project.p}</p>
                <a
                  href={project.link}
                  className={styles.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bx-link-external"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}