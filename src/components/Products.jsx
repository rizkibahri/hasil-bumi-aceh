import { useState, useEffect } from "react";

const premiumProducts = [
  {
    name: "Kopi Arabika Aceh",
    image: "/assets/kopi.jpg",
    description:
      "Green Beans Kopi Gayo merupakan salah satu komoditas unggulan kami. Kami menjalin kemitraan dengan petani pilihan yang terpercaya untuk memastikan kualitas tetap terjaga. Meski sebagian petani kami memiliki produksi dengan kuantitas terbatas, mereka konsisten menghadirkan mutu terbaik sehingga setiap biji kopi tetap memiliki cita rasa khas yang bernilai tinggi.",
  },
  {
    name: "Kakao Fermentasi",
    image: "/assets/kakao.jpg",
    description:
      "Kakao Aceh yang kami kelola berasal dari kebun sendiri dengan luasan terbatas. Untuk memastikan ketersediaan pasokan di pasar, kami menjalin kemitraan dengan petani-petani daerah yang mampu menghasilkan dalam jumlah cukup, sekaligus memberdayakan petani kecil dengan membeli hasil panen mereka berapa pun jumlah kuantitas hasil panen mereka. Meski kuantitas total tidak sebesar kopi, pasokan kakao kami tetap konsisten tersedia.",
  },
  {
    name: "Pala Aceh",
    image: "/assets/pala.jpg",
    description:
      "Pala Aceh merupakan salah satu rempah unggulan yang memiliki aroma khas dan kualitas yang diakui sejak lama. Kami bekerja sama dengan petani lokal di sentra-sentra penghasil pala untuk menjaga mutu dan kontinuitas pasokan. Sebagian besar panen berasal dari perkebunan rakyat dengan jumlah beragam, namun melalui proses sortasi kami mampu menghadirkan biji pala yang konsisten dalam kualitas. Meski produksi tidak sebesar komoditas lain, ketersediaan pala kami tetap terjaga untuk memenuhi kebutuhan pasar.",
  },
  {
    name: "Minyak Sereh & Nilam",
    image: "/assets/sereh-nilam.jpg",
    description:
      "Minyak sereh dan nilam dari Aceh dikenal dengan kemurnian serta aroma khas yang kuat. Kami bermitra dengan penyuling lokal untuk menghasilkan minyak atsiri berkualitas melalui proses penyulingan tradisional yang tetap memenuhi standar modern. Pasokan kami tersedia secara konsisten untuk kebutuhan pasar dalam skala kecil maupun besar. Khusus untuk kuantitas yang lebih besar, saat ini kami lebih mengandalkan minyak sereh, karena ketersediaannya lebih melimpah dibandingkan nilam.",
  },
];

const volumeProducts = [
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
    name: "Serat & Biji Kapas",
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
    }, 250);
  };

  const renderGrid = (products) => (
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
  );

  return (
    <section id="produk" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Produk Kami
        </h2>

        {/* Section Premium */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">
            🌿 Komoditas Premium
          </h3>
          {renderGrid(premiumProducts)}
        </div>

        {/* Section Volume */}
        <div>
          <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">
            🌾 Komoditas Volume
          </h3>
          {renderGrid(volumeProducts)}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className={`bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative transform transition-all ${
              isClosing ? "animate-fade-out" : "animate-fade-in"
            }`}
            onClick={(e) => e.stopPropagation()}
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
