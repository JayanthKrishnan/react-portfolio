import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPython } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1}}
        className="my-20 text-center text-4xl">Technologies
      </motion.h1>

        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: -100}}
          transition={{duration: 1}}
          className="flex flex-wrap items-center justify-center gap-4">
        
          <a href="https://react.dev/learn" target="_blank">
            <motion.div 
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <RiReactjsLine className="text-5xl text-cyan-400"/>
            </motion.div>
          </a>

          <a href="https://www.mongodb.com/docs/" target="_blank">
            <motion.div
              variants={iconVariants(4)}
              initial="initial"
              animate="animate" 
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiMongodb className="text-5xl text-green-500"/>
            </motion.div>
          </a> 

          <a href="https://www.python.org/doc/" target="_blank">
            <motion.div 
              variants={iconVariants(3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaPython className="text-5xl text-sky-700"/>
            </motion.div>
          </a>

          <a href="https://nodejs.org/docs/latest/api/" target="_blank">
            <motion.div 
              variants={iconVariants(1.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaNodeJs className="text-5xl text-green-500"/>
            </motion.div>
          </a>

          <a href="https://www.postgresql.org/docs/" target="_blank">
            <motion.div 
              variants={iconVariants(2)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <BiLogoPostgresql className="text-5xl text-sky-700"/>
            </motion.div>
          </a>       

          <a href="https://www.google.com/amp/s/www.geeksforgeeks.org/html5-introduction/amp/" target="_blank">
            <motion.div 
              variants={iconVariants(4.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaHtml5 className="text-5xl text-red-500"/>
            </motion.div>
          </a>       

          <a href="https://www.w3schools.com/css/" target="_blank">
            <motion.div 
              variants={iconVariants(3.3)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaCss3 className="text-5xl text-blue-400"/>
            </motion.div>
          </a>
          
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <motion.div 
              variants={iconVariants(5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaJsSquare className="text-5xl text-yellow-400"/>
          </motion.div>
          </a>
    
        </motion.div>
    </div>
  )
}

export default Technologies
