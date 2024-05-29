import {HERO_CONTENT} from "../constants";
import profilepic from "../assets/JKProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="font-thin pb-16 text-4xl tracking-tight lg:mt-16 lg:text-7xl">Jayanth Krishnan</motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-teal-600 via-emerald-400 to-teal-600 bg-clip-text text-2xl tracking-tight text-transparent lg:text-3xl">
              Full Stack Developer
            </motion.span>
            <motion.p 
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
              variants={container(1.5)}
              initial={{x: 100, opacity:0}}
              animate="visible"
              src={profilepic} 
              alt="profile" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
