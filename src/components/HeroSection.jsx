const HeroSection = () => {
  return (
    <section
      id="Beranda"
      className="relative bg-green-700 text-white h-[90vh] flex items-center"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/rumoh-aceh.jpg"
          alt="Hasil Bumi Aceh"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hasil Bumi Aceh <br />
          <span className="text-yellow-400">Untuk Industri Nasional</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl">
          Menyediakan jagung, kemiri, kelapa, dan kapas berkualitas langsung
          dari petani Aceh ke pabrik dan industri Nasional. Dengan mutu yang
          terjamin, pasokan yang stabil, serta komitmen terhadap kepercayaan.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#produk"
            className="bg-yellow-400 text-green-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition text-center w-fit"
          >
            Lihat Produk
          </a>
          <a
            href="#kontak"
            className="border border-white px-4 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition text-center w-fit"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
