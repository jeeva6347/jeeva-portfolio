function ProjectsCard({title,desc,live,image})
{
    return (
      
            
<div className="w-full max-w-sm bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-5 hover:border-indigo-700 hover:-translate-y-2 transition duration-300">

<img src={image} alt={title} className="object-cover hover:-translate-y-2 transition duration-300" />
<h3 className="text-xl font-semibold mb-2">{title}</h3>
<p className="text-gray-400 text-sm mb-4">{desc}</p>

<div className="flex justify-center items-center">
    <a href={live} 
    target="_blank"
    rel="noreferrer"
      className="text-blue-400 text-sm hover:underline">
        Live Demo ↗</a>     

</div>


</div>

    );
}
export default ProjectsCard;