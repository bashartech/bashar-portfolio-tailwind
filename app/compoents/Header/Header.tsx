"use client";
import Link from "next/link";
import { useState } from "react";

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
     <div id="/home" className="header flex justify-around items-center bg-bgColor shadow-lg transition-all duration-300 ease-in-out z-[100] fixed w-screen h-[10vh]">
        <div className="logo  text-text text-2xl p-3 font-bold cursor-pointer">
        <Link href="/home">
          <span className="bg-gradient-to-r from-main to-text bg-clip-text text-transparent">Bashar Portfolio</span>
        </Link>
        </div>
      
        <div className="navbar text-md p-4 text-text">
            <ul className="md:flex hidden gap-10 cursor-pointer">
                {["Home", "About", "Services", "Portfolio", "Footer"].map((item, index) => (
                  <Link key={index} className="hover:text-main transition-colors duration-300 relative group" href={item === "Home" ? "/home" : item === "Portfolio" || item === "Footer" ? `/home#${item.toLowerCase()}` : `/${item.toLowerCase()}`}>
                    <li className="group-hover:transform group-hover:translate-y-[-2px] transition-transform duration-300">{item}</li>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-main transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
            </ul>
        </div>
        <div className="md:hidden  ">
          <button onClick={toggleBar} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8 light:text-white"
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
        <div
          className={`absolute top-[10vh] w-full bg-bgColor text-start text-white transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <ul className="flex flex-col items-center space-y-4 py-6 font-semibold">
            <Link href={"/"}>
              <li
                className="text-white hover:text-main cursor-pointer"
                onClick={closeMenu}
              >
                Home
              </li>
            </Link>
            <Link href={"/about"}>
              <li
                className="text-white hover:text-main cursor-pointer"
                onClick={closeMenu}
              >
                About
              </li>
            </Link>
            <Link href={"/services"}>
              <li
                className="text-white hover:text-main cursor-pointer"
                onClick={closeMenu}
              >
                Services
              </li>
            </Link>
            <Link href={"/home#portfolio"}>
              <li
                className="text-white hover:text-main cursor-pointer"
                onClick={closeMenu}
              >
                Portfolio
              </li>
            </Link>
            <Link href={"/home#footer"}>
              <li
                className="text-white hover:text-main cursor-pointer"
                onClick={closeMenu}
              >
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

