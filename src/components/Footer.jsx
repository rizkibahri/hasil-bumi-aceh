const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-8">
        {/* Logo & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Hasil Bumi Aceh</h2>
          <p className="text-gray-200">
            Menghadirkan komoditas unggulan Nusantara dengan mutu terjaga dan
            terpercaya.
          </p>
        </div>

        {/* Navigasi Cepat */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Navigasi</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="#Beranda"
                className="hover:text-yellow-400 transition-colors"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#produk"
                className="hover:text-yellow-400 transition-colors"
              >
                Produk
              </a>
            </li>
            <li>
              <a
                href="#tentang"
                className="hover:text-yellow-400 transition-colors"
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                href="#kontak"
                className="hover:text-yellow-400 transition-colors"
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak & Sosial Media */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Kontak</h3>
          <p className="text-gray-200">
            Jl. Medan- Banda Aceh, Jeumpa, Bireuen
          </p>
          <p className="text-gray-200 mt-1">+62 821-2553-1159</p>
          <p className="text-gray-200 mt-1">rizkiayman5@gmail.com</p>

          <div className="flex space-x-4 mt-4">
            <a
              href="https://wa.me/6282125531159"
              target="_blank"
              className="hover:text-green-300 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.52 3.478A11.994 11.994 0 0012 0C5.372 0 0 5.372 0 12c0 2.12.552 4.09 1.52 5.822L0 24l6.478-1.52A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12 0-3.196-1.25-6.164-3.48-8.522zM12 22.062c-1.88 0-3.738-.496-5.34-1.428l-.383-.228-3.844.902.814-3.744-.25-.395A9.96 9.96 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.07-7.87c-.248-.124-1.466-.725-1.693-.808-.228-.083-.394-.124-.56.124s-.642.808-.785.975c-.143.165-.286.186-.534.062-.248-.124-1.046-.385-1.993-1.22-.737-.657-1.234-1.467-1.378-1.715-.143-.248-.015-.383.11-.507.114-.114.248-.286.372-.43.124-.143.165-.248.248-.413.083-.165.041-.31-.02-.434-.062-.124-.56-1.353-.768-1.855-.202-.484-.41-.418-.56-.425l-.478-.009c-.165 0-.434.062-.662.31s-.866.844-.866 2.055.887 2.38 1.012 2.548c.124.165 1.747 2.667 4.238 3.738.593.256 1.054.408 1.414.522.595.193 1.137.166 1.565.101.477-.071 1.466-.598 1.673-1.176.207-.577.207-1.073.145-1.176-.062-.103-.228-.165-.476-.288z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/rizki_bahri"
              target="_blank"
              className="hover:text-rose-400 transition"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.428.403a4.92 4.92 0 011.77 1.15 4.918 4.918 0 011.15 1.77c.163.458.347 1.258.403 2.428.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.428a4.918 4.918 0 01-1.15 1.77 4.918 4.918 0 01-1.77 1.15c-.458.163-1.258.347-2.428.403-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.428-.403a4.92 4.92 0 01-1.77-1.15 4.92 4.92 0 01-1.15-1.77c-.163-.458-.347-1.258-.403-2.428C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.428a4.918 4.918 0 011.15-1.77 4.918 4.918 0 011.77-1.15c.458-.163 1.258-.347 2.428-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.765.131 4.672.31 3.678.657 2.687 1.004 1.845 1.58 1.09 2.337c-.757.755-1.333 1.597-1.68 2.588-.347.994-.526 2.087-.585 3.374C-.013 8.332 0 8.741 0 12s.013 3.668.072 4.948c.059 1.287.238 2.38.585 3.374.347.991.923 1.833 1.68 2.588.755.757 1.597 1.333 2.588 1.68.994.347 2.087.526 3.374.585C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.287-.059 2.38-.238 3.374-.585.991-.347 1.833-.923 2.588-1.68.757-.755 1.333-1.597 1.68-2.588.347-.994.526-2.087.585-3.374.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.287-.238-2.38-.585-3.374-.347-.991-.923-1.833-1.68-2.588-.755-.757-1.597-1.333-2.588-1.68C19.328.31 18.235.131 16.948.072 15.668.013 15.259 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-green-700 pt-4 text-center text-gray-300">
        © 2025 Hasil Bumi Aceh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
