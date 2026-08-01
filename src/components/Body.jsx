
function Body(){
    return (
        
<section className="min-h-screen text-white top-24 flex flex-col items-center justify-center text-center" id="home">
    <img src="/images/profile.jpeg" alt="Profile Pic" className="w-36 h-36 rounded-full object-cover"/>
    <h1 className="font-mono text-3xl md:text-4xl mb-3">Hi, I'm <span className="text-blue-400 font-bold">Jeeva L</span>
    </h1>
    <h2 className="text-xl md:text-2xl font-semibold text-blue-500 typing w-[21ch]">Full Stack Web Developer</h2>
    <p className="max-w-xl text-gray-300 mb-8 leading-relaxed"> I build responsive and user-friendly web applications using modern frontend and backend technologies. Passionate about solving real-world problems through clean and efficient code.
    </p>
    <div className="mt-2 flex gap-4 justify-center">
<a href="#projects" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-800 transition">
    View Projects
</a>
<a href="/certificate/CV.pdf" target="_blank" rel="noreferrer" className="px-7 py-2 rounded-lg border-2 border-blue-600 text-white hover:bg-slate-800 hover:text-white transition">
    View CV
</a>
    </div>
</section>

    );
}
export default Body;