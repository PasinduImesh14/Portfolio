import { PROJECTS } from "../constants";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef();

  useGSAP(() => {
    const projectCards = gsap.utils.toArray(".project-card");
    projectCards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "back.out(1.7)",
      });
    });
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="cassie-section bg-[var(--bg-projects)] text-[var(--text-main)] py-16 sm:py-24 lg:py-32 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      <h2 className="mb-12 sm:mb-18 lg:mb-24 text-center text-3xl sm:text-4xl lg:text-6xl font-display tracking-tighter">
        Featured Work
      </h2>
      
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="project-card flex flex-col lg:flex-row lg:items-center bg-[var(--card-bg)] p-6 sm:p-8 lg:p-12 rounded-3xl lg:rounded-[50px] backdrop-blur-md border-2 border-[var(--border-color)] hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-500 shadow-xl"
          >
            <div className="w-full lg:w-1/3 mb-6 sm:mb-8 lg:mb-0">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full object-cover aspect-video hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="w-full lg:w-2/3 lg:pl-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-display mb-4 sm:mb-6 leading-tight">
                {project.title}
              </h3>
              <p className="opacity-80 mb-6 sm:mb-8 leading-relaxed font-medium text-sm sm:text-base">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-black text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;