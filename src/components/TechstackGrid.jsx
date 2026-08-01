 import TechstackCard from "./TechstackCard";
 import Techstackdata from "./TechstackData";
function TechstackGrid() {
    return(
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4">


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