function TechstackGrid({ image, title }) {
  return (
    <div className="relative group">

  
      <div
        className="
          absolute -inset-2
          rounded-2xl
          bg-indigo-500
          opacity-0
          blur-2xl
          group-hover:opacity-90
          transition duration-300
        "
      ></div>

     
      <div
        className="
          relative
          h-52 w-48
          bg-slate-900
          backdrop-blur-xl
          rounded-2xl
          border border-white/10
          p-5
          flex flex-col items-center justify-center
          transition duration-300
          group-hover:-translate-y-2
        "
      >
       
        <div className="h-32 flex items-center justify-center mb-3">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

    
        <h3 className="text-lg font-semibold text-center text-white">
          {title}
        </h3>
      </div>

    </div>
  );
}

export default TechstackGrid;
