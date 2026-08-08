const services = [
  {
    icon: "</>",
    title: "Website Development",
    description:
      "I build responsive and modern websites for businesses, startups and individuals with clean and optimized code.",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    icon: "⚛",
    title: "React Development",
    description:
      "I create fast, interactive and dynamic web applications using React.js and modern development tools.",
    tags: ["React", "Vite", "JavaScript", "API"],
  },
  {
    icon: "dj",
    title: "Django Development",
    description:
      "I build secure and scalable web applications using Python Django with powerful admin panels and APIs.",
    tags: ["Django", "Python", "SQLite / MySQL"],
  },
  {
    icon: "</>",
    title: "Full-Stack Web Applications",
    description:
      "I develop end-to-end web applications with frontend, backend, database and deployment.",
    tags: ["React", "Django", "MySQL", "API"],
  },
  {
    icon: "⚒",
    title: "Website Fix & Improvement",
    description:
      "I fix bugs, improve performance, enhance UI/UX and make your website fully responsive.",
    tags: ["Bug Fix", "Speed", "UI/UX", "SEO"],
  },
  {
    icon: "♙",
    title: "Portfolio Websites",
    description:
      "I build professional portfolio and resume websites to showcase your work, skills and experience.",
    tags: ["Personal", "Developer", "Modern Design"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-900  px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <h2 className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl">
            My Services
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            I provide modern, responsive and scalable web solutions to help
            businesses and individuals build their digital presence.
          </p>
        </div>

      
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:shadow-lg hover:shadow-violet-500/10"
            >
              
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl border border-violet-400/20 bg-slate-800 text-2xl font-bold text-violet-400 transition-all duration-300 group-hover:border-pink-400/40 group-hover:text-pink-400">
                {service.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {service.title}
              </h3>

              
              <p className="mb-6 min-h-[84px] text-sm leading-6 text-slate-300">
                {service.description}
              </p>

             
              <div className="mb-6 flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="rounded-md border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

             
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors duration-300 hover:text-pink-400"
              >
                Get Started
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ))}

        </div>

       
        <div className="mt-10 rounded-2xl border border-slate-700/70 bg-slate-900/70 px-6 py-8 md:px-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

           
            <div>
              <h3 className="bg-gradient-to-r from-violet-400 to-pink-500 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
                Let’s Work Together!
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300 md:text-base">
                Have a project in mind? I’m available for freelance work.
                Let’s discuss how I can help you achieve your goals.
              </p>
            </div>

            <a
              href="#contact"
              className="whitespace-nowrap rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 px-7 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20"
            >
              Contact Me →
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}