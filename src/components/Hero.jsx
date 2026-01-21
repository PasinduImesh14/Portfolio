import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import profilePicLight from "../assets/pasinduProfileLight.png"; 
import profilePicDark from "../assets/pasinduProfileDark.png"; 

const Hero = () => {
  const container = useRef();
  const [theme, setTheme] = useState(document.documentElement.getAttribute("data-theme") || "light");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setTheme(currentTheme);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".animate-name", { y: 100, opacity: 0, duration: 1, ease: "power4.out" })
      .from(".animate-sub", { opacity: 0, x: -50, duration: 0.8 }, "-=0.5")
      .from(".animate-p", { opacity: 0, y: 30, duration: 0.8 }, "-=0.3")
      .from(".animate-img", { scale: 0.8, opacity: 0, duration: 1, ease: "back.out(1.7)" }, "-=0.6");
  }, { scope: container });

  return (
    <section ref={container} className="overflow-hidden cassie-section-split">
      <div className="flex flex-wrap w-full">
        
        {/* TEXT SIDE */}
        <div className="w-full lg:w-7/12 bg-[var(--bg-hero)] flex items-center px-4 sm:px-6 lg:px-24 pt-24 sm:py-20 lg:py-24 pb-16 sm:pb-20 lg:pb-24 transition-colors duration-400">
          <div className="flex flex-col items-center lg:items-start text-[var(--text-main)]">
            <h1 className="pb-6 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl animate-name font-display">
              Hello I&apos;m Pasindu
            </h1>
            <span className="pl-4 mb-6 text-base italic font-semibold border-l-4 sm:text-lg animate-sub opacity-90 border-black/20">
              Software Engineer/ Full Stack Developer...
            </span>
            
            {/* UPDATED HERO CONTENT WITH OUTLINE EFFECT */}
            <div className="max-w-4xl text-5xl font-black leading-relaxed hero-content sm:text-6xl lg:text-6xl animate-p font-display">
              <p>
                My mission is to{" "}
                <span className="outline-text hover-fill">automate</span> the{" "}
                <span className="outline-text hover-fill">boring</span> stuff and build more of the{" "}
                <span className="outline-text hover-fill">awesome</span> stuff.
              </p>
            </div>

          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="w-full lg:w-5/12 bg-[var(--bg-hero-side)] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 lg:py-24 transition-colors duration-400">
          <div className="relative">
            <img 
              src={theme === "light" ? profilePicLight : profilePicDark} 
              className="animate-img w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] aspect-[4/5] rounded-[20px] border-4 sm:border-6 lg:border-8 border-white shadow-2xl object-cover hover:rotate-2 transition-transform duration-500"
              alt="Pasindu Fernando"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;