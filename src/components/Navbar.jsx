import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../assets/pasindulogo1.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const thumbRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Slide logic: Light (Sun) moves to left (0), Dark (Moon) moves to right (32)
    if (theme === "light") {
      gsap.to(thumbRef.current, { x: 0, duration: 0.5, ease: "back.out(1.5)" });
    } else {
      gsap.to(thumbRef.current, { x: 36, duration: 0.5, ease: "back.out(1.5)" });
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8 bg-[var(--bg-hero)] transition-colors duration-400 border-b border-[var(--border-color)]">
      <div className="flex items-center">
        <img className="w-auto h-7 sm:h-8 lg:h-10" src={logo} alt="logo" />
      </div>
      
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 text-[var(--text-main)]">
        {/* Social Icons */}
        <div className="flex gap-4 text-2xl sm:gap-6 lg:gap-8 sm:text-3xl lg:text-4xl">
          <a href="https://github.com/PasinduImesh14" target="_blank" rel="noreferrer" className="transition-all hover:scale-110 hover:text-[#6E40C9]"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/pasindu-imesh-ba001724b" target="_blank" rel="noreferrer" className="transition-all hover:scale-110 hover:text-[#0A66C2]"><FaLinkedin /></a>
          <a href="https://www.instagram.com/_pasiya.a" target="_blank" rel="noreferrer" className="transition-all hover:scale-110 hover:text-[#E4405F]"><FaInstagram /></a>
        </div>

        {/* CUSTOM SLIDING SWITCH (Based on Screenshot image_24707f.png) */}
        <div 
          onClick={toggleTheme}
          className={`relative w-[72px] h-9 flex items-center rounded-full cursor-pointer overflow-hidden transition-all duration-500 shadow-inner border-2 border-white/20
            ${theme === 'light' ? 'bg-gradient-to-b from-[#4FB6FF] to-[#8FD8FF]' : 'bg-[#1D1F2C]'}`}
        >
          {/* Background Decorative Elements (Clouds/Stars) */}
          {theme === 'light' ? (
            <div className="absolute right-0 bottom-[-4px] w-10 h-6" style={{ filter: 'url(#cloud-goo)' }}>
                <div className="absolute w-4 h-4 bg-white rounded-full right-1 bottom-1" />
                <div className="absolute bottom-0 w-6 h-6 bg-white rounded-full right-3" />
                <div className="absolute w-4 h-4 bg-white rounded-full right-6 bottom-1" />
                <div className="absolute w-3 h-3 bg-white rounded-full right-2 bottom-2" />
              </div>
          ) : (
            <div className="absolute flex gap-2 left-2">
              <div className="w-0.5 h-0.5 bg-white rounded-full animate-twinkle" />
              <div className="w-1 h-1 delay-75 bg-white rounded-full animate-twinkle" />
              <div className="w-0.5 h-0.5 bg-white rounded-full animate-twinkle delay-150" />
            </div>
          )}

          {/* Animated Sliding Thumb */}
          <div 
            ref={thumbRef}
            className={`z-20 w-8 h-8 rounded-full shadow-lg transform transition-transform flex items-center justify-center
              ${theme === 'light' 
                ? 'bg-gradient-to-tr from-[#FFD600] to-[#FFEE58] border-2 border-[#FBC02D]' 
                : 'bg-gradient-to-tr from-[#D1D5DB] to-[#F9FAFB] border-2 border-gray-400'}`}
          >
             {/* Moon Craters (Only visible in dark mode) */}
             {theme === 'dark' && (
               <div className="relative w-full h-full">
                 <div className="absolute w-2 h-2 bg-gray-300 rounded-full top-1 right-2" />
                 <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-gray-300 rounded-full" />
               </div>
             )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;