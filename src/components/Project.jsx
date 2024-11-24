import img from "/public/img1.jpg";
import img1 from "/public/img2.jpg";
import img2 from "/public/img3.jpg";

const projectData = [
    {
        image: img2,
        tittle:"E-learning web-design",
        description:"This project marks a significant milestone in my journey of learning web design. It is a culmination of the concepts and techniques I’ve been studying, including HTML, CSS, and responsive design principles. ",
        tech:["HTML","CSS","Tailwindcss"]
    },
    {
        image: img,
        tittle:"Point of Sale System",
        description:"This project is a Point of Sale (POS) system designed to streamline transactions and inventory management for businesses. Using C# for the application’s logic and SQL Server (SSMS) for database management, this system allows for real-time tracking of sales, inventory, and customer data.",
        tech:["C#","Sql Server","SSMS"]
    },
    {
        image: img1,
        tittle:"Crud desktop app",
        description:"This project is a CRUD (Create, Read, Update, Delete) application developed using C# and SQL Server. The application allows users to interact with a database through a simple and intuitive interface, enabling them to perform basic operations such as adding, viewing, modifying, and removing data entries.",
        tech:["C#","Sql Server","SSMS"]
    },
]

const ProjectCard = ({project}) => {
    return (
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
            <div className="w-1/2">
            <img src={project.image} alt=""  className=" rounded-2xl" />
            </div>
            <div className="flex flex-col gap-5 w-1/2">
                <div className="flex flex-col gap-3">
                    <div className="text-xl font-semibold">{project.tittle}</div>
                    <p className="text-gray-400">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-5">
                    {
                       project.tech.map((tech, index) => (
                        <span key={index} className="rounded-lg bg-black p-3 cursor-pointer opacity-70 transition-all duration-300 hover:text-black hover:bg-slate-200 hover:opacity-100 ">
                            {tech}
                        </span>
                    ))
                    
                 
                    }
                    
                </div>
            </div>
        </div>
    )
}

const Project = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24 ">
        <h1 className="text-4xl font-light text-white md:text-6xl "> 
            My Project
        </h1>
        <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
            {
                projectData.map((project, index)=>(
                    <ProjectCard key={index} project={project}/>
                ))
                
            }
        </div>
    </div>
    
  )
}

export default Project