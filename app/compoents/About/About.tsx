
// import Link from "next/link";

// export default function AboutPage() {
//   return (
//     <div id="about" className="main flex items-center justify-center w-[100vw] h-screen bg-second p-4">
//       <div className="content flex flex-col lg:flex-row items-center justify-center lg:justify-around w-full h-full max-w-5xl">
//         <div className="img w-full lg:w-[40%] flex justify-center mb-6 lg:mb-0">
//           <img src="/images/img2.png" className="w-[250px] sm:w-[350px] lg:w-[400px]" alt="" />
//         </div>
        
//         <div className="text w-full lg:w-[50%] flex items-center justify-center">
//           <div className="box text-center lg:text-left max-w-md">
//             <div className="heading text-main text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">ABOUT US</div>
//             <div className="para text-text text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
//             I am a dedicated creative professional specializing in front-end web development and UI/UX design, with expertise in HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind CSS, ShadCN UI, and Radix UI. I focus on creating visually appealing, user-friendly websites that seamlessly blend aesthetics with functionality. Additionally, I possess skills in Figma for UI design and video editing, allowing me to craft engaging visual narratives. My unique blend of technical and creative abilities enables me to deliver innovative digital solutions that captivate and inspire.
//             </div>
//             <div className="btn w-full sm:w-44 h-12 sm:h-14 mx-auto">
//               <Link
//                 href="/about"
//                 className="block w-full sm:w-auto text-center p-3 hover:shadow-main rounded-3xl bg-main text-bgColor"
//               >
//                 See More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";

export default function AboutPage() {
  return (
    <div id="about" className="main flex items-center justify-center w-full min-h-screen bg-second  p-4 overflow-hidden">
      <div className="content flex flex-col lg:flex-row items-center justify-center lg:justify-around w-full h-full max-w-5xl">
        <div className="img w-full lg:w-[40%] flex justify-center mb-6 lg:mb-0 animate-fadeIn">
          <img src="/images/img2.png" className="w-[250px] sm:w-[350px] lg:w-[400px] rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300" alt="" />
        </div>
        
        <div className="text w-full lg:w-[50%] flex items-center justify-center">
          <div className="box text-center lg:text-left max-w-md">
            <div className="heading text-main text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 animate-slideInRight">ABOUT US</div>
            <div className="para text-text text-sm sm:text-base lg:text-lg leading-relaxed mb-6 animate-fadeIn animation-delay-300">
              I am a dedicated creative professional specializing in front end web development and UI/UX design, with expertise in HTML, CSS, JavaScript, TypeScript, Next.js, Tailwind CSS, ShadCN UI, and Radix UI. I focus on creating visually appealing, user-friendly websites that seamlessly blend aesthetics with functionality. Additionally, I possess skills in Figma for UI design and video editing, allowing me to craft engaging visual narratives. My unique blend of technical and creative abilities enables me to deliver innovative digital solutions that captivate and inspire.
            </div>
            <div className="btn w-full sm:w-44 h-12 sm:h-14 mx-auto animate-fadeIn animation-delay-600">
              <Link
                href="/about"
                className="block w-full sm:w-auto text-center p-3 hover:shadow-main rounded-3xl bg-main text-bgColor transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}