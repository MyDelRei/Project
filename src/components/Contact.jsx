
import { BsFacebook } from "react-icons/bs"
import { BsTelegram } from "react-icons/bs"
const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
            <h1 className="text-center text-5xl md:text-7xl">
                <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Get in Touch
                </span>
            </h1>
            <p className="text-white text-lg font-semibold text-center">
            Got a question, project idea, or just want to say hi? Feel free to reach out! Whether it’s about tech, coding, or the latest in web design, I’d love to chat. You can find me on [Telegram] or drop me an email — I’m always happy to connect with like-minded folks or anyone who’s curious about my work.

Let’s make something awesome together!
            </p>
        <ul className="hidden md:flex gap-10">
             <a href="https://www.facebook.com/share/18BG9wfHXT/?mibextid=LQQJ4d" target="_blank"><li className="text-blue-500 cursor-pointer opacity-70 transition-all duration-300 hover:text-blue-700 hover:opacity-100 text-4xl">
                   <BsFacebook/>
            </li></a>
             <a href="https://t.me/vordiii" target="_blank"><li className="text-cyan-400 cursor-pointer opacity-70 transition-all duration-300 hover:text-cyan-700 hover:opacity-100 text-4xl">
                <BsTelegram/>
             </li></a> 
        </ul>
        </div>
    </div>
  )
}

export default Contact