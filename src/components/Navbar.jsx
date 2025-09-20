import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = ["Beranda", "produk", "tentang", "kontak"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  // Efek scroll untuk background & shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Highlight active section
      let current = "beranda";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 80; // offset navbar height
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (section) => {
    const el = document.getElementById(section);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth",
      });
      setIsOpen(false); // tutup menu mobile
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-green-700 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1
            className="text-lg sm:text-xl font-bold text-white cursor-pointer"
            onClick={() => handleLinkClick("beranda")}
          >
            Hasil Bumi Aceh
          </h1>

          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-6 text-sm text-white">
            {sections.map((section) => (
              <li key={section}>
                <button
                  className={`hover:text-yellow-400 transition-colors ${
                    activeSection === section
                      ? "text-yellow-400 font-semibold"
                      : ""
                  }`}
                  onClick={() => handleLinkClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* Tombol Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden bg-green-700 absolute w-full left-0 top-16 overflow-hidden transition-transform duration-300 origin-top ${
          isOpen ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <ul className="flex flex-col space-y-3 px-4 py-3 text-sm text-white">
          {sections.map((section) => (
            <li key={section}>
              <button
                className={`hover:text-yellow-400 transition-colors w-full text-left ${
                  activeSection === section
                    ? "text-yellow-400 font-semibold"
                    : ""
                }`}
                onClick={() => handleLinkClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
