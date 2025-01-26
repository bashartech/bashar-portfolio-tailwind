

export default function PortfolioPage() {
  const projects = [
    { Image: 'blog2.PNG', link: 'https://bashar-blogs.vercel.app/', h4: "Blogs Website", p: "The blog website allows users to easily browse and read various blog posts. Additionally, it provides an interactive commenting feature. " },
    
    { Image: 'bashar-motors.PNG', link: 'https://bashar-motors.vercel.app/',h4: "Bashar Motors",p:"A professional car purchase website featuring top-tier vehicles, expertly crafted using Next.js, React, CSS, and TypeScript for a seamless browsing and buying experience." },
    
    { Image: 'homehack.PNG', link: 'https://marketplace-by-bashar.vercel.app/', h4: "E-Commerce Website", p: "An E-Commerce Website built with Next.js, React, and Tailwind CSS. This website allows customers to purchase products based on their needs.." },

    { Image: 'bandage.PNG', link: 'https://hackhaton-2-virid.vercel.app/', h4: " UI/UX Design Of E-Commerce Website ", p: "An E-Commerce website for purchase clothes of mens and womens crafted with Next.js, React, and Tailwind CSS for a seamless user experience." },

    { Image: 'image-generator.PNG', link: 'https://ai-image-developer-by-bashar.netlify.app/', h4: "Ai Image Generator", p: "An advanced AI image generator website, meticulously crafted with JavaScript, delivering high-quality, dynamic visuals through seamless and intuitive user interactions. " },


    { Image: 'hangman-game.PNG', link: 'https://e-commerce-website-amber-eight.vercel.app/', h4: "Hangman Game", p: "An interactive Hangman Game built with JavaScript, offering an engaging word-guessing experience through intuitive gameplay and dynamic features. " },


  ];

  return (
    <div id="portfolio" className="w-full min-h-screen bg-second py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-main text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-slideInDown">
          Latest Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-bgColor rounded-xl overflow-hidden group relative shadow-lg transform hover:scale-105 transition-all duration-300 animate-fadeIn h-64 sm:h-72 md:h-60 lg:h-64">
              <div className="w-full h-full">
                <img
                  src={`/images/${project.Image}`}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="absolute inset-0 w-full h-full bg-gray-900 bg-opacity-75 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h4 className="text-white text-lg sm:text-xl font-semibold mb-2 text-center">{project.h4}</h4>
                <p className="text-white text-xs sm:text-sm text-center px-2 sm:px-4 mb-4 overflow-y-auto max-h-32 sm:max-h-40">{project.p}</p>
                <a
                  href={project.link}
                  className="text-white text-xl sm:text-2xl hover:text-main transition-colors duration-300"
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