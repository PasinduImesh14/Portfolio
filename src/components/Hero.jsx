import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pasinduprofile.jpg";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition:{duration: 0.5, delay: delay},
    },
});

const Hero = () => {
  return (
    <div className="border-b border-l-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <motion.h1
            variants={container(0)}
            initial="hidden" 
            animate="visible"
            transition={{ duration: 0.5, delay: 0.75}}
            className="pb-16 mb-0 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                Pasindu Imesh</motion.h1>
            <motion.span 
            variants={container(0.25)}
            initial="hidden" 
            animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
            Undergraduate at Sabaragamuwa University of Sri Lanka
            </motion.span>
            <motion.p variants={container(0.5)}
            initial="hidden" 
            animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {HERO_CONTENT}
            </motion.p>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center">
            <motion.img 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1}}
            transition={{ duration: 1, delay: 1}}
            src={profilePic} alt="Pasindu Imesh" className="w-72 h-72 lg:w-72 lg:h-72 rounded-2xl" />

        </div>
        </div>
    </div>
    </div>
  );
};

export default Hero;