import Image from 'next/image';

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
    <div id="portfolio" className="w-full min-h-screen bg-second py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-main text-3xl sm:text-4xl font-bold text-center mb-12 animate-slideInDown">
          Latest Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-bgColor rounded-xl overflow-hidden group relative shadow-lg transform hover:scale-105 transition-all duration-300 animate-fadeIn  lg:h-56">
              <div className="aspect-w-16 h-full aspect-h-9">
                <Image
                  src={`/images/${project.Image}`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-fill "
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h4 className="text-white text-lg font-semibold mb-2">{project.h4}</h4>
                <p className="text-white text-sm text-center px-4 mb-4">{project.p}
                
                </p>
                <a
                  href={project.link}
                  className="text-white text-2xl hover:text-main transition-colors duration-300"
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



