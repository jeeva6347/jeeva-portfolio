function Certificate({ image, link }) {
  return (
    <div className="group relative w-full h-64 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/10 p-4 flex items-center justify-center hover:-translate-y-2 transition duration-300">

      <img
        src={image}
        alt="Certificate"
        className="w-full h-full object-contain"
      />

      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-white text-lg font-semibold hover:underline"
        >
          View Certificate
        </a>
      </div>

    </div>
  );
}

export default Certificate;