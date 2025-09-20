const About = () => {
  return (
    <section id="tentang" className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Judul */}
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6 animate-fadeInUp">
          Tentang Kami
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 animate-fadeInUp">
          Kami adalah jembatan antara kearifan alam Aceh dan kebutuhan modern.
          Hampir satu dekade kami bergerak dibidang pengolahan dan distribusi
          hasil bumi Aceh yang dipanen langsung dari tangan petani lokal,
          tentunya dengan menjaga standar kualitas. Setiap komoditas melewati
          proses sortasi untuk memenuhi standar mutu, dan juga menjaga rasa
          kepercayaan dengan komitmen yang konsisten.
        </p>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Gambar ilustrasi */}
          <img
            src="/assets/tentang.jpg"
            alt="Petani Aceh"
            className="rounded-xl shadow-lg w-full max-h-96 object-cover animate-fadeInUp"
          />

          {/* Konten teks */}
          <div className="space-y-6 animate-fadeInUp">
            <h3 className="text-2xl font-semibold text-green-700">
              Visi & Misi
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mt-1 mr-2">🌿</span>
                <span>
                  <strong>Visi:</strong> Menjadi pusat distribusi hasil bumi
                  Aceh yang unggul, berkualitas, dan terpercaya, serta mampu
                  bersaing di pasar nasional.
                </span>
              </li>

              <li className="flex items-start mt-4">
                <span className="text-green-600 mt-1 mr-2">🌱</span>
                <span>
                  <strong>Misi:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700">
                    <li>
                      Mendukung dan memberdayakan petani lokal melalui kemitraan
                      berkelanjutan.
                    </li>
                    <li>
                      Menjaga kualitas produk dengan proses sortasi dan
                      pengolahan yang sesuai standar mutu.
                    </li>
                    <li>
                      Menyediakan layanan profesional yang berorientasi pada
                      kepuasan pelanggan.
                    </li>
                    <li>
                      Menghadirkan produk hasil bumi Aceh yang bernilai tambah
                      dan berdaya saing.
                    </li>
                  </ul>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
