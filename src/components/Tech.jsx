import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoPython, BiLogoTailwindCss } from "react-icons/bi"
import { SiCsharp,SiMicrosoftsqlserver } from "react-icons/si";


const Tech = () => {
  return (
    <div className="flex min-h-[70vh]w-full flex-col items-center justify-center gap-16 md:gap-32" id="tech">
        <h1 className="text-4xl font-light text-white md:text-6xl" >Techology Used</h1>
        <div className="flex flex-col items-center justify-center gap-10 p-5">
            <div className="flex">
                <BiLogoHtml5 className="cursor-pointer text-[80px] text-red-800 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"/>
                <BiLogoCss3 className="cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"/>
                <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"/>
                <SiCsharp className="cursor-pointer text-[80px] text-purple-600 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"/>
                <SiMicrosoftsqlserver className="cursor-pointer text-[80px] text-red-300 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"/>
            </div>
            <div className="flex">
                <BiLogoPython className="cursor-pointer text-[80px] text-cyan-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"/>
                <BiLogoTailwindCss className="cursor-pointer text-[80px] text-teal-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[120px]"/>
            
            </div>
            
        <p className="text-white text-xl text-center">I am able to leverage my skills in HTML, CSS, Tailwind, JavaScript, C#, SSMS, and Python, utilizing these technologies to develop responsive websites, manage databases, and build efficient applications. Currently, I am expanding my skill set by learning Java, React, and Next.js, with a focus on enhancing my ability to deliver modern, scalable solutions.</p>
        </div>
    </div>
    
  )
}

export default Tech