 import TechstackCard from "./TechstackCard";
 import Techstackdata from "./TechstackData";
function TechstackGrid() {
    return(
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 sm:gap-x-8  max-w-6xl mx-auto place-items-center">

{Techstackdata.map((tech, index)=>(
<TechstackCard 
key={index}
image={tech.image}
title={tech.title}
/>
)
)}

</div> 
    ); 
}   
export default TechstackGrid;