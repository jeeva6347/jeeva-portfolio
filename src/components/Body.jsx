function Body() {
    return (
        <section
            id="home"
            className="min-h-screen text-white pt-24 px-6 flex flex-col items-center justify-center text-center"
        >

           <div className="group relative">

    {/* Gradient Ring */}
    <div
        className="
            absolute
            -inset-1
            rounded-full
            bg-gradient-to-r
            from-indigo-500
            via-purple-500
            to-pink-500
            opacity-70
            blur-[2px]
            transition-all
            duration-500
            group-hover:opacity-100
            group-hover:blur-[3px]
        "
    />

    {/* Photo */}
    <img
        src="/images/profile.jpeg"
        alt="Jeeva L"
        className="
            relative
            w-36
            h-36
            rounded-full
            object-cover
            object-[center_15%]
            border-2
            border-slate-900
            transition-all
            duration-500
            group-hover:scale-105
        "
    />

</div>
            <h1
                className="
                    font-mono
                    text-3xl
                    md:text-5xl
                    mt-6
                    mb-3
                    font-semibold
                "
            >
                Hi, I'm{" "}
                <span className="text-blue-400 ">
                    Jeeva L
                </span>
            </h1>

            <h2
                className="
                    text-xl
                    md:text-2xl
                    font-semibold
                    text-blue-500
                    typing
                    w-[21ch]
                "
            >
                Full Stack Web Developer
            </h2>

            <p
                className="
                    max-w-xl
                    mt-5
                    text-gray-300
                    leading-relaxed
                    text-base
                    md:text-lg
                "
            >
                I build responsive and user-friendly web applications using
                modern frontend and backend technologies. Passionate about
                solving real-world problems through clean and efficient code.
            </p>

         <div className="mt-8 flex flex-col items-center">

   
    <div className="flex flex-wrap justify-center gap-4">

        
        <a
            href="#contact"
            className="
                px-6
                py-2.5
                rounded-lg
                bg-gradient-to-r
                from-indigo-500
                via-purple-500
                to-pink-500
                text-white
                font-medium
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-lg
                hover:shadow-purple-500/20
            "
        >
            Hire Me
        </a>

        <a
            href="#projects"
            className="
                px-6
                py-2.5
                rounded-lg
                border
                border-blue-500
                text-white
                font-medium
                transition-all
                duration-300
                hover:bg-blue-500/10
                hover:-translate-y-0.5
            "
        >
            View Projects
        </a>

    </div>

   
   <a
    href="/certificate/CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
        mt-5
        text-sm
        text-gray-400
        underline
        underline-offset-4
        transition-colors
        duration-300
        hover:text-blue-400
    "
>
    View My CV →
</a>
</div>

        </section>
    );
}

export default Body;