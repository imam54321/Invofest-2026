import { useState, useEffect } from "react";
import { LuRocket } from "react-icons/lu";

const BtnBackTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Tampilkan tombol hanya jika halaman di-scroll ke bawah > 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-7 right-5 z-50 transition-all duration-500 sm:bottom-5 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-10 opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Kembali ke atas"
        onClick={scrollToTop}
        className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/30 bg-invofest/70 text-invofest_light shadow-lg shadow-invofest/30 ring-1 ring-invofest_light/40 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-invofest_light hover:bg-invofest_secondary/80 hover:shadow-xl hover:shadow-invofest_light/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-invofest_light focus-visible:ring-offset-2 active:scale-95"
      >
        {/* Semburan Api / Thruster Flame (Muncul & Membesar Saat Hover) */}
        <span className="absolute bottom-2 h-5 w-2 rounded-full bg-gradient-to-t from-orange-500 via-amber-400 to-invofest_light opacity-0 blur-[1px] transition-all duration-300 group-hover:translate-y-2 group-hover:scale-y-125 group-hover:opacity-100" />

        {/* Ikon Roket dengan Efek Terangkat & Miring */}
        <LuRocket className="relative z-10 h-6 w-6 transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:-rotate-12 active:-translate-y-3" />
      </button>
    </div>
  );
};

export default BtnBackTop;