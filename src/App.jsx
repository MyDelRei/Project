import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Tech from "./components/Tech"


function App() {
  

  return (
    <>
    <div class="fixed top-0 -z-10 min-h-screen h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
   
   
      <main className="flex flex-col items-center px-4 md:px-8 log:px-16">
        <Navbar/>
        <Hero/>
        <Tech/>
        <Project/>
        <Contact/>

      </main>
        
    </>
  )
}

export default App
