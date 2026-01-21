import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import working from "../assets/working.jpg";
import { ABOUT_TEXT } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".about-title", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 90%",
      },
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".about-animate", {
      scrollTrigger: {
        trigger: ".about-animate",
        start: "top 80%",
      },
      x: (index) => index === 0 ? -100 : 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, { scope: container });

  return (
    <div ref={container} className="cassie-section bg-[var(--bg-about)] text-[var(--text-main)] pb-4">
      <h2 className="my-20 text-5xl text-center about-title font-display">
        About <span className="opacity-50">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full about-animate lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img 
              className="transition-all duration-500 w-90 h-72 rounded-2xl grayscale hover:grayscale-0" 
              src={working} 
              alt="About" 
            />
          </div>
        </div>
        <div className="w-full about-animate lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-3xl py-6 my-2 text-lg font-light tracking-tighter lg:text-2xl">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;