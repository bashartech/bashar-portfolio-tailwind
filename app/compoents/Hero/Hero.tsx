
"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const typedElement = useRef(null);

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
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/m-bashar-sheikh/' }, // Replace with your LinkedIn profile
    { icon: 'instagram-alt', url: 'https://instagram.com/bashartech107?igshid=MzNlNGNkZWQ4Mg==' }, // Replace with your Instagram profile
    { icon: 'gmail', url: 'https://www.google.com/search?q=bashartc14%40gmail.com&rlz=1C1KNTJ_enPK1048PK1048&sourceid=chrome&ie=UTF-8' }, // Replace with your email
  ];

  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />

      <div className="hero w-full bg-bgColor flex flex-col lg:flex-row justify-center items-center min-h-screen py-20 px-4 lg:px-8 overflow-hidden" id="/">
        <div className="heroContent w-full max-w-6xl flex flex-col lg:flex-row justify-around items-center">
          <div className="text w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center animate-fadeIn">
            <div className="content w-full max-w-lg">
              <h3 className="text-text text-2xl sm:text-3xl font-bold mb-2 animate-slideInLeft">
              Hello, It's Me
              </h3>
              <h1 className="text-text text-4xl sm:text-5xl font-bold mb-2 animate-slideInLeft animation-delay-300">M.Bashar</h1>
              <h3 className="text-text text-2xl sm:text-3xl font-bold mb-4 animate-slideInLeft animation-delay-600">
                And I am a <span className="text-main multiple-text" ref={typedElement}></span>
              </h3>
              <p className="text-text text-base sm:text-lg mb-6 animate-fadeIn animation-delay-900">
                We create dynamic websites and captivating visuals and videos to
                engage large audience effectively
              </p>
              <div className="social-media flex mb-6 animate-fadeIn animation-delay-1200">
                {socialLinks.map(({ icon, url }) => (
                  <Link
                    key={icon}
                    className="flex justify-center items-center w-10 h-10 bg-transparent border border-main hover:bg-main hover:text-bgColor rounded-full text-xl text-main mr-3 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                    href={url} // Use the individual URL here
                  >
                    <i className={`bx bxl-${icon}`}></i>
                  </Link>
                ))}
              </div>
              <div className="btn animate-fadeIn animation-delay-1500">
                <Link
                  href="https://photos.app.goo.gl/bH6xuncsKHQHdMBs8"
                  className="inline-block px-6 py-3 bg-main hover:shadow-main hover:shadow-md  text-bgColor hover:bg-opacity-80 rounded-full transition-all duration-300 transform hover:scale-105 "
                >
                  Check CV
                </Link>
              </div>
            </div>
          </div>
          <div className="img w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center animate-fadeIn animation-delay-1800">
            <img className="w-full max-w-md rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-300" src="/images/img1.png" alt="Profile" />
          </div>
        </div>
      </div>
    </>
  );
}