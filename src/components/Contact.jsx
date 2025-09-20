import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = "Nama harus diisi.";

    if (!formData.email) {
      newErrors.email = "Email harus diisi.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid.";
    }

    if (!formData.message) newErrors.message = "Pesan harus diisi.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        await emailjs.send(
          "service_h2c9s0m",
          "template_cqwqq7w",
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "Ua5XVpAmxdGNG6rtk"
        );
        alert("Pesan berhasil dikirim!");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } catch (err) {
        console.error(err);
        alert("Terjadi kesalahan, coba lagi.");
      }
      setLoading(false);
    }
  };

  return (
    <section id="kontak" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Kontak Kami</h2>
        <p className="text-gray-600 mb-8">
          Hubungi kami untuk informasi lebih lanjut atau kerjasama.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Alamat */}
          <div className="p-6 bg-green-50 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-green-700 mb-2">
              Alamat
            </h3>
            <p className="text-gray-700">
              Jl. Medan – Banda Aceh, Desa Blang Cot Baroh
              <br />
              Jeumpa, Bireuen, Indonesia
            </p>
          </div>

          {/* Telepon */}
          <div className="p-6 bg-green-50 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-green-700 mb-2">
              Telepon
            </h3>
            <p className="text-gray-700">+62 821-2553-1159</p>
          </div>

          {/* Email */}
          <div className="p-6 bg-green-50 rounded-xl shadow-md">
            <h3 className="font-semibold text-lg text-green-700 mb-2">Email</h3>
            <p className="text-gray-700">rizkiayman5@gmail.com</p>
          </div>
        </div>

        {/* Form Kontak */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-2xl mx-auto space-y-4 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Nama"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-800 placeholder-gray-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-800 placeholder-gray-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <textarea
            name="message"
            rows={4}
            placeholder="Pesan"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none text-gray-800 placeholder-gray-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
          >
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
