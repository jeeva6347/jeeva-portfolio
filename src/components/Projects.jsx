import ProjectsTab from "./ProjectsTab";

function Projects()
{
    return (
<section id="projects" className="min-h-screen bg-slate-900 text-white pt-24 px-6">
    <div className="text-center mb-14">
        <h2 className="text-4xl  sm:text-5xl font-sans
        bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500
        bg-clip-text text-transparent
        tracking-tight">Portfolio Showcase</h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-400 text-base sm:text-lg">Explore my journey through projects, certifications, and technical skills, highlighting my continuous 
            learning and growth.</p>
    </div>
    <ProjectsTab/>
</section>
    );
}
export default Projects;