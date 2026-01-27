import { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import projectsData from "./ProjectsDatas";
function ProjectsGrid() {
const [visibleCount,setVisibleCount]=useState(3);
const visibleProjeccts=projectsData.slice(0,visibleCount);
    return(
        <>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto place-items-center">
{visibleProjeccts.map((project, index) => (
<ProjectsCard 
key={index}
title={project.title}
desc={project.desc}
live={project.live}
image={project.image}

/>
    ))}


</div>
{visibleCount<projectsData.length &&(
    <div className="flex justify-center mt-4">
    <button onClick={()=>setVisibleCount(visibleCount+3)}
    className="px-6 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition">
    Show More
    </button>

    </div>
    
)}

</>
    );
    
}
export default ProjectsGrid;