import logo from '../assets/JKlogo.png';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa6';
import { FaGoogle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt='logo' />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href='https://www.linkedin.com/in/jayanth-krishnan-a8bb32264' target='_blank'><FaLinkedin /></a>
        <a href='https://www.github.com/JayanthKrishnan' target='_blank'><FaGithub /></a>
        <FaDiscord />
        <a href='mailto: jayanthpalani28@gmail.com' ><FaGoogle /></a>
      </div>
    </nav>
  )
}

export default Navbar
