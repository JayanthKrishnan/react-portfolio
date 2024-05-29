import { CONTACT } from "../constants"
import { motion } from "framer-motion"


const Contacts = () => {
  return (
    <motion.div 
      whileInView={{opacity: 1, scale: 0.9}}
      initial={{opacity: 0, scale: 0.5}}
      transition={{duration: 0.5}}
      className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Contact Me</h1>
      <div className="text-center tracking-tight">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">{CONTACT.email}</a>
      </div>
    </motion.div>
  )
}

export default Contacts
