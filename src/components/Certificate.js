
function Certificate({image,link})
{
    return (
<div className=" group relative w-full max-w-sm rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/10 p-5 hover:-translate-y-2 transition duration-300">
<img src={image} alt="Certificate" className="max-h-full max-w-full object-contain"/>
<div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<a href={link} target="_blank" rel="noreferrer" className="text-white text-lg font-semibold hover:underline cursor-pointer">
    View Certificate
</a>

</div>
</div>
    );
}
export default Certificate;