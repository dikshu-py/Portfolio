import React, { useEffect, useState } from 'react'

const Header = () => {

    const [scolled,setIsScrolled] =useState(false);

   
    // used event Listner to notice if Page is creooled or nOt
    useEffect(() => {
        const handleScroll = () =>{
            if (window.scrollY > 50) {
                setIsScrolled(true); 
              } else {
                setIsScrolled(false); 
              }

        }
        window.addEventListener("scroll", handleScroll);

    // Cleanup scroll listener to save the Memeory 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    });

    //to scroll to that section upon click
    const handleScroll1 = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };




  return (
    <header className={`w-[100vw] flex   justify-center fixed  top-0 opacity-100 z-50
        ${
            scolled
              ? "bg-gradient-to-r from-blue-50 to-purple-50  shadow-lg" 
              : " bg-gradient-to-r from-blue-100 to-purple-100 z-50"
          }
    `}>
   
   
   
   
   
    <div className="container mx-auto px-4 py-4 flex items-center justify-center mt-4 text-[16px] z-10">
      {/* Navigation Menu */}
      <nav className="hidden md:flex space-x-8 text-[16px] font-medium text-gray-800 ">
        <a
          onClick={() => handleScroll1("landing")}
          href="#home"
          className="text-blue-600 hover:text-blue-800 transition-colors "
        >
          HOME
        </a>
        <a href="#about" onClick={() => handleScroll1("slide-window")}    className="hover:text-blue-600 transition-colors">
          Skills
        </a>
        <a href="#resume"  onClick={() => handleScroll1("skills")}   className="hover:text-blue-600 transition-colors">
          Experience
        </a>
        <a href="#experi" onClick={() => handleScroll1("experience")}      className="hover:text-blue-600 transition-colors">
          Projects
        </a>
        
        <a href="#rr"  onClick={() => handleScroll1("chat-frame")}      className="hover:text-blue-600 transition-colors">
          CONTACT
        </a>
      </nav>

      {/* Hire Me Button */}
      {/* <a
        href="#hire"
        className="bg-blue-600 text-white py-2 px-6 rounded-full text-sm font-semibold hover:bg-blue-700 transition"
      >
        HIRE ME
      </a> */}

      {/* Mobile Menu (Hidden by Default) */}
        <div className="md:hidden">
            <button
            type="button"
            className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
            </button>
      </div>
    </div>
  </header>
  )
}

export default Header
