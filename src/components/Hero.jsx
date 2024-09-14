import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pasinduprofile.jpg";

const Hero = () => {
  return (
    <div className="border-b border-l-neutral-900 pb-4 lg:mb-35">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 mb-0 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                Pasindu Imesh</h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
            Undergraduate at Sabaragamuwa University of Sri Lanka
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                {HERO_CONTENT}
            </p>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center">
            <img src={profilePic} alt="Pasindu Imesh" className="w-48 h-48 lg:w-60 lg:h-60 rounded-2xl" />

        </div>
        </div>
    </div>
    </div>
  );
};

export default Hero;