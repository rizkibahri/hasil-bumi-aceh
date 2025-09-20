import { useState, useEffect } from "react";

const products = [
  {
    name: "Jagung",
    image: "/assets/jagung.jpg",
    description:
      "Jagung pipilan utuh atau jagung giling berkualitas dan bermutu dari Aceh dengan kadar air yang rendah, dengan memalui proses pengeringan yang sesuai standar. Kami tidak hanya menjaga kualitas dan mutu, tetapi juga konsisten dari segi kuantitasnya. Kami mampu memasok ±50 ton per-bulannya. Kami siap memenuhi kebutuhan pasar secara berkelanjutan.",
  },
  {
    name: "Kemiri",
    image: "/assets/kemiri-aceh.png",
    description:
      "Kemiri adalah salah satu hasil bumi terbesar di Aceh, dan ini menjadi komoditas utama kami. Dengan proses pengeringan yang terkontrol, baik melalui blower maupun penjemuran alami di bawah sinar matahari, dilakukan untuk mencapai kadar air yang optimal. Untuk kemiri utuh(hitam) kami mampu memasoknya kurang lebih 50-70 tons per-bulannya, dan untuk kulitnya kami mampu -50 ton per-bulannya.",
  },
  {
    name: "Kelapa",
    image: "/assets/kelapa.jpg",
    description:
      "Kelapa segar & kering untuk kebutuhan industri pangan & minyak. Dari sisi kuantitas kuantitas kami mampu memasok 20-30 tons untuk kelapa muda, dan kelapa kupas 40-60 tons per-bulannya, dan tempurung kelapa kami hanya mampu 10-20 tons per-bulannya.",
  },
  {
    name: "Biji Kapas",
    image: "/assets/kapas.jpg",
    description:
      "Serat dan biji kapas dari petani lokal Aceh memiliki kualitas yang sesuai untuk kebutuhan tekstil dan industri lainnya. Untuk komoditas ini kapasitas suplai kami 8-10 konteiner per-tahunnya.",
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  // 🔒 Kunci scroll body saat modal terbuka
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProduct]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProduct(null);
      setIsClosing(false);
    }, 250); // durasi sama dengan animate-fade-out
  };

  return (
    <section id="produk" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Produk Kami
        </h2>

        {/* Grid produk */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {product.description}
                </p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="inline-block bg-green-700 text-white px-4 py-2 text-sm rounded-lg hover:bg-yellow-500 transition"
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={handleClose} // klik overlay tutup modal
        >
          <div
            className={`bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative transform transition-all ${
              isClosing ? "animate-fade-out" : "animate-fade-in"
            }`}
            onClick={(e) => e.stopPropagation()} // cegah modal ketutup kalau klik isi modal
          >
            {/* Tombol Close */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-xl"
            >
              ✕
            </button>

            {/* Isi Modal */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
