import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERIENCES } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const container = useRef();

  useGSAP(() => {
    const items = gsap.utils.toArray(".experience-item");
    items.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, { scope: container });

  return (
    <section 
      ref={container} 
      className="cassie-section bg-[var(--bg-experience)] text-[var(--text-main)] py-32 overflow-hidden"
    >
      <h2 className="mb-20 text-6xl tracking-tighter text-center lg:text-8xl font-display">
        Experience
      </h2>
      
      <div className="max-w-4xl mx-auto">
        {EXPERIENCES.map((experience, index) => (
          <div 
            key={index} 
            className="experience-item mb-12 flex flex-wrap lg:justify-center bg-[var(--card-bg)] p-8 rounded-[40px] backdrop-blur-sm border-2 border-[var(--border-color)] shadow-lg"
          >
            <div className="w-full mb-4 lg:w-1/4 lg:mb-0">
              <p className="text-sm font-bold tracking-widest uppercase opacity-60">
                {experience.year || "Current"}
              </p>
            </div>

            <div className="w-full lg:w-3/4 lg:pl-10">
              <h6 className="mb-3 text-2xl leading-tight font-display">
                {experience.role ? `${experience.role} ` : ""}
                {experience.company && (
                  <span className="text-xl italic opacity-70">
                    @ {experience.company}
                  </span>
                )}
              </h6>
              
              <p className="mb-6 font-medium leading-relaxed opacity-80">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {experience.technologies?.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-4 py-1 text-xs font-bold tracking-tighter text-white uppercase bg-black rounded-full"
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

export default Experience;