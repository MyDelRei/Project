import { useState } from "react"
import { BsFacebook } from "react-icons/bs"
import { BsTelegram } from "react-icons/bs"
import { BiX } from "react-icons/bi" 
import { BiMenu } from "react-icons/bi" 
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => { 
        setIsOpen(!isOpen);
    }
  return (
<nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b bprder-b-slate-600 bg-black/70 px-8 py-6 text-white backdrop-blur-md md:justify-evenly">
<a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">My Portfolio</a>


<ul className="hidden md:flex gap-10">
    <a href="#home" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Home</li>
    </a>
    <a href="#tech" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Tech</li>
    </a>
    <a href="#projects" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Project</li>
    </a>
    <a href="#contact" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Contact</li>
    </a>
</ul>
<ul className="hidden md:flex gap-10">
    <a href="https://www.facebook.com/share/18BG9wfHXT/?mibextid=LQQJ4d" target="_blank"><li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100 text-2xl">
        <BsFacebook/>
    </li></a>
    <a href="https://t.me/vordiii" target="_blank"><li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-cyan-500 hover:opacity-100 text-2xl">
       <BsTelegram/>
    </li></a>
</ul>

{isOpen ? (
     <BiX className="block md:hidden text-4xl" onClick={menuOpen}/>
 ) : (<BiMenu className="block md:hidden text-4xl" onClick={menuOpen}/>
 )}
    {isOpen && (
        <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 bprder-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col gap-10">
            <a href="#home" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Home</li>
    </a>
    <a href="#tech" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Tech</li>
    </a>
    <a href="#projects" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Project</li>
    </a>
    <a href="#Contact" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
        <li>Contact</li>
    </a>
            </ul>
            <ul className="flex flex-wrap gap-5">
            <a href="https://www.facebook.com/share/18BG9wfHXT/?mibextid=LQQJ4d" target="_blank"><li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100 text-2xl">
                 <BsFacebook/>
            </li></a>
        <a href="https://t.me/vordiii" target="_blank"><li className="cursor-pointer opacity-70 transition-all duration-300 hover:text-cyan-500 hover:opacity-100 text-2xl">
             <BsTelegram/>
              </li>
        </a>
</ul>
        </div>
    )}
</nav>
  )
}

export default Navbar