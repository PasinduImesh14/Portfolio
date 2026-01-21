import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiRedis } from "react-icons/di";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".tech-title", {
      scrollTrigger: {
        trigger: ".tech-title",
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.to(".tech-icon", {
      y: 20,
      rotation: (i) => (i % 2 === 0 ? 5 : -5),
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        each: 0.2,
        from: "random"
      }
    });
  }, { scope: container });

  const techStack = [
    { Icon: RiReactjsLine, color: "text-cyan-400" },
    { Icon: TbBrandNextjs, color: "" },
    { Icon: SiMongodb, color: "text-green-500" },
    { Icon: FaNodeJs, color: "text-green-500" },
    { Icon: DiRedis, color: "text-red-700" },
  ];

  return (
    <section 
      ref={container} 
      className="cassie-section bg-[var(--bg-tech)] text-[var(--text-main)] py-24 overflow-hidden"
    >
      <h2 className="tech-title mb-20 text-center text-5xl lg:text-6xl font-display">
        Toolbox
      </h2>
      
      <div className="flex flex-wrap items-center justify-center gap-8">
        {techStack.map((tech, index) => (
          <div 
            key={index}
            className="tech-icon bg-[var(--card-bg)] rounded-3xl border-2 border-[var(--border-color)] p-6 hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 group"
          >
            <tech.Icon className={`text-6xl lg:text-7xl ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;