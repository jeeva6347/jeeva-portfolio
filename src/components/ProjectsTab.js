import { FaCode, FaCertificate, FaLayerGroup } from "react-icons/fa";
import { useState } from "react";
import ProjectsGrid from "./ProjectsGrid";
import CertificateGrid from "./CertificateGrid";
import TechstackGrid from "./TechstackGrid";
function ProjectsTab()
{
    const [active,setActive]=useState("projects");
    return(
        <>
<div className="flex justify-center mt-10">
    <div className="flex w-full max-w-4xl bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 p-2">
    <button onClick={()=>setActive("projects")} className={`tab-btn ${active==="projects" ? "tab-active":""}`}>
        <FaCode/>
        <span>Projects</span>
    </button>

    <button onClick={()=>setActive("certificates")} className={`tab-btn ${active==="certificates" ? "tab-active":""}`}>
        <FaCertificate/>
        <span>Certificates</span>
    </button>

    <button onClick={()=>setActive("tech")} className={`tab-btn ${active==="tech" ? "tab-active":""}`}>
        <FaLayerGroup/>
        <span>Tech Stack</span>
    </button>
</div>
</div>
<div className="mt-14">
    {active==="projects" && <ProjectsGrid/>}
    {active==="certificates" && <CertificateGrid/>}
    {active==="tech" && <TechstackGrid/>}
</div>

</>

    );



}
export default ProjectsTab;