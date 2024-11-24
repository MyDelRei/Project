import images from "/public/imgTeam2.jpg"
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-52 md:px-32" >
        <div className="flex flex-col items-center justify-center gap-10 text-white">
            <div>
               <img src={images} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"/>
            </div>
            <div className="Flex max-w-[600px] flex-col items-center justidy-center gap-3 text-center">
                <h1 className=" bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-4xl font-semibold transition-all duration-300 hover:opacity-100">
                    Leang Panhasaovordy
                </h1>
                <p className=" text-slate-400  opacity-80 text-l transition-all duration-300 hover:opacity-100 pb-2">
                    AUB year-2 , developer
                </p>
                <p className=" text-white  opacity-80 text-xl transition-all duration-300 hover:opacity-100">
                Hi !!!! I also goes by the name Myko, a 19-year-old Computer Science and Engineering (CSE) major in my second year at ACLEDA University of Business (AUB). I'm passionate about technology, problem-solving, and continuously improving my skills in the ever-evolving world of software and computing.
On this website, you'll find a collection of my work, projects, and experiences. I'm always eager to learn, collaborate, and create innovative solutions. Whether you're here to check out my projects or just to learn more about me, I’m thrilled to have you here.
                </p>
            </div>

        </div>

    </div>
  )
}

export default Hero