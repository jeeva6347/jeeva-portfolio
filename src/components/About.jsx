import { FaCode, FaCertificate } from "react-icons/fa";
function About()
{
    return (
<section id="about" className="min-h-screen text-white flex flex-col items-center text-center justify-center px-5 pt-22 scroll-mt-24">

   <div className="mb-10 text-center">
  <h2
    className="text-4xl sm:text-5xl font-sans
    bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500
    bg-clip-text text-transparent
    tracking-tight"
  >
    About Me
  </h2>

  <div
    className="mx-auto mt-4 h-1 w-20 rounded-full
    bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500"
  />
</div>
    <p className="max-w-3xl text-lg text-gray-300">
        I’m a Full Stack Web Developer focused on building responsive, user-friendly, and practical web applications. I work with modern frontend and backend technologies to create clean, reliable solutions for businesses, individuals, and personal projects. I enjoy turning ideas into functional web experiences
         while continuously improving my development skills.
    </p>
   <a href="#projects"> 
    <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 max-w-6xl mx-auto mt-8 justify-items-center">
        
             <div className="glass-card relative w-full max-w-sm">
                
                <FaCode className="text-3xl text-purple-400"/>
                <h3 className="absolute top-6 right-6 text-4xl font-bold text-white">7</h3>
              
                <div className="mt-10 text-center">
                <p className="uppercase text-sm tracking-wide">Total Projects</p>

                <span className="text-gray-400 text-sm">
                    Innovation web & mobile solutions
                </span>
                </div>
              
            </div>
             
             
            <div className="glass-card relative w-full max-w-sm">
                <FaCertificate className="text-3xl text-yellow-500"/>
                <h3 className="absolute top-6 right-6 text-4xl font-bold text-white">7</h3>
                <div className="mt-10 text-center">
                <p className="uppercase text-sm tracking-wide">Certificates</p>
                <span className="text-gray-400 text-sm">
                    Professional skills validated
                </span>
                   
                </div>

  </div>
       
        </div>
        </a>
         
</section>
    );
}
export default About;
