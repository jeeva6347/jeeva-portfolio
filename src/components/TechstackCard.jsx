function TechstackGrid({ image, title }) {
  return (
    <div className="relative group w-full">

     
      <div
        className="
          absolute -inset-2
          rounded-2xl
          bg-indigo-500
          opacity-0
          blur-2xl
          group-hover:opacity-80
          transition duration-300
        "
      ></div>

      {/* Card */}
      <div
        className="
          relative
          aspect-square
          bg-slate-900
          backdrop-blur-xl
          rounded-2xl
          border border-white/10
          p-4 sm:p-5
          flex flex-col items-center justify-center
          transition duration-300
          group-hover:-translate-y-2
        "
      >
    
        <img
          src={image}
          alt={title}
          className="h-16 sm:h-20 object-contain"
        />

       
        <h3 className="mt-3 text-xs sm:text-sm font-semibold text-center text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default TechstackGrid;
