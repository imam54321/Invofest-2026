import React from "react";
import { createPortal } from "react-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import FAQInvofest from "/assets/Maskot-FAQ.webp";
import SayInvofest from "/assets/Maskot-Say.webp";
import ButtonPrimary from "../custom/ButtonPrimary";

type FAQItem = {
  id: string;
  category: string;
  header: string;
  text: string;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "01",
    category: "Tentang INVOFEST",
    header: "Apa itu INVOFEST?",
    text: "INVOFEST (Informatics Vocational Festival) adalah festival tahunan yang diselenggarakan oleh Program Studi Sarjana Terapan Teknik Informatika Universitas Harkat Negeri. Acara ini bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
  },
  {
    id: "02",
    category: "Jadwal & Lokasi",
    header: "Kapan dan di mana INVOFEST dilaksanakan?",
    text: "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan 27 November 2025. Workshop, seminar, dan talkshow diadakan secara offline di Kampus 1 Universitas Harkat Negeri, sedangkan kompetisi diadakan secara online.",
  },
  {
    id: "03",
    category: "Pendaftaran",
    header: "Apakah ada biaya pendaftaran di INVOFEST?",
    text: "Seluruh kegiatan INVOFEST dikenakan biaya pendaftaran. Informasi mengenai biaya dapat dilihat pada halaman detail masing-masing event.",
  },
  {
    id: "04",
    category: "Kompetisi",
    header: "Bagaimana cara mengetahui pemenang kompetisi?",
    text: "Informasi pemenang kompetisi akan diumumkan melalui media sosial Instagram resmi INVOFEST di @invofest_harkatnegeri.",
  },
  {
    id: "05",
    category: "Kompetisi",
    header: "Apa yang didapatkan oleh pemenang kompetisi?",
    text: "Pemenang kompetisi akan mendapatkan trofi, uang pembinaan, dan e-sertifikat sebagai bentuk apresiasi atas prestasi yang telah diraih.",
  },
  {
    id: "06",
    category: "Registrasi",
    header: "Bagaimana cara mendaftar event?",
    text: "Buka website https://www.invofest-harkatnegeri.com, kemudian pilih event yang ingin diikuti. Kamu juga bisa mencari event melalui halaman beranda. Buka detail event, lalu klik tombol Registrasi. Setelah itu, kamu akan diarahkan ke Google Form untuk melengkapi data pendaftaran.",
  },
];

const FAQ = () => {
  const [selectedFAQ, setSelectedFAQ] = React.useState<FAQItem | null>(null);

  const closeButtonRef = React.useRef<HTMLButtonElement | null>(null);

  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 850,
      offset: 40,
    });

    AOS.refresh();
  }, []);

  // Lock scroll, focus the close button, and support Escape.
  React.useEffect(() => {
    if (!selectedFAQ) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedFAQ(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedFAQ]);

  const openFAQ = (item: FAQItem) => {
    setSelectedFAQ(item);
  };

  const closeFAQ = () => {
    setSelectedFAQ(null);
  };

  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-100/60 blur-3xl" />
        <div className="absolute -right-24 top-72 h-80 w-80 rounded-full bg-fuchsia-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-purple-50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-screen-xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-12 grid items-center gap-8 md:mb-16 md:grid-cols-[1fr_auto]">
          <div data-aos="fade-right" className="max-w-2xl">
            <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-invofest sm:text-4xl lg:text-5xl">
              Punya Pertanyaan?
              <br />
              <span className="text-invofest_primary_dark">
                Temukan Jawabannya.
              </span>
            </h2>

            <p className="max-w-xl text-base leading-7 text-invofest sm:text-lg">
              Bingung harus mulai dari mana? Jelajahi pertanyaan seputar
              INVOFEST dan temukan informasi yang kamu butuhkan. Klik kartu
              untuk membuka jawabannya!
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm font-medium text-invofest">
              <span className="flex -space-x-2">
                <span className="h-7 w-7 rounded-full border-2 border-white bg-invofest_light" />
                <span className="h-7 w-7 rounded-full border-2 border-white bg-invofest_primary_dark" />
                <span className="h-7 w-7 rounded-full border-2 border-white bg-invofest_dark" />
              </span>
              <span>{FAQ_ITEMS.length} pertanyaan untuk membantu kamu</span>
            </div>
          </div>

          {/* FAQ mascot */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="relative mx-auto hidden w-50 sm:block md:w-48 lg:w-80"
          >
            <div className="absolute inset-4 rounded-full bg-violet-200/60 blur-2xl" />

            <img
              src={FAQInvofest}
              alt="Maskot INVOFEST dengan simbol pertanyaan"
              className="relative z-10 h-auto w-full drop-shadow-[0_18px_25px_rgba(124,58,237,0.15)] transition-transform duration-500 hover:-translate-y-2 hover:rotate-3"
            />
          </div>
        </div>

        {/* Question cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FAQ_ITEMS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => openFAQ(item)}
              aria-haspopup="dialog"
              className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-3xl border border-invofest_secondary bg-invofest p-6 text-left shadow-[0_8px_30px_-18px_rgba(76,29,149,0.22)] transition-all duration-300 hover:-translate-y-2 hover:border-invofest_primary_light hover:shadow-[0_24px_50px_-20px_rgba(109,40,217,0.25)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-invofest_primary_light sm:p-7"
              data-aos="fade-up"
              data-aos-delay={Math.min(index * 80, 400)}
            >
              {/* Decorative accent */}
              <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-invofest_secondary transition-all duration-500 group-hover:scale-150 group-hover:bg-invofest_dark" />

              <div className="relative z-10 mb-7 flex w-full items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-extrabold text-invofest shadow-lg shadow-black/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {item.id}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-invofest_secondary text-white transition-all duration-300 group-hover:border-invofest_primary_light group-hover:bg-invofest group-hover:text-invofest_primary_light">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 17L17 7M7 7H17V17"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              <div className="relative z-10 flex flex-1 flex-col">
                <span className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-invofest_primary_light group-hover:text-invofest_light">
                  {item.category}
                </span>

                <h3 className="mb-6 text-lg font-bold leading-snug text-white transition-colors duration-300 group-hover:text-invofest_primary_light sm:text-xl">
                  {item.header}
                </h3>

                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-invofest_gay transition-all duration-300 group-hover:gap-3 group-hover:text-invofest_primary_light">
                  <span>Lihat jawaban</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12H19M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom info */}
        <div
          data-aos="fade-up"
          className="mt-12 flex flex-col items-start justify-between gap-4 rounded-3xl border border-invofest_secondary bg-invofest p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="mb-1 font-bold text-white">
              Belum menemukan jawaban?
            </p>
            <p className="text-sm leading-6 text-invofest_gay">
              Hubungi panitia INVOFEST untuk mendapatkan informasi lebih lanjut.
            </p>
          </div>

          <ButtonPrimary
            text={"HUBUNGI PANITIA"}
            dataAos={"zoom-in"}
            delayAos={"550"}
            isOutline={false}
            handleClick={() =>
              window.open(
                `https://wa.me/62895605919551?text=${encodeURIComponent(
                  "Halo Kak, Saya Ingin Bertanya mengenai Invofest 2025...",
                )}`,
              )
            }
           />
        </div>
      </div>

      {/* Answer modal */}
      {selectedFAQ &&
        createPortal(
          <div
            className="faq-modal-overlay fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overscroll-contain bg-slate-950/55 p-4 backdrop-blur-md sm:p-6"
            onClick={closeFAQ}
          >
            <section
              role="dialog"
              aria-modal="true"
              aria-labelledby="faq-modal-title"
              aria-describedby="faq-modal-answer"
              className="faq-modal-card relative my-auto w-full max-w-xl overflow-hidden rounded-[28px] border border-invofest_secondary bg-invofest shadow-[0_30px_100px_-25px_rgba(46,16,101,0.55)]"
              onClick={(event) => event.stopPropagation()}
            >
              {/* Modal accent */}
              <div className="h-2 w-full bg-invofest_primary_light" />

              <div className="relative p-6 sm:p-9">
                {/* Close button */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeFAQ}
                  aria-label="Tutup jawaban"
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-invofest_primary_light bg-invofest_secondary text-invofest_primary_light transition-all duration-300 hover:rotate-90 hover:border-invofest_primary_light hover:bg-invofest_primary_light hover:text-invofest focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-invofest_primary_light"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                {/* Modal heading */}
                <div className="mb-7 pr-10">
                  <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-invofest_secondary px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-invofest_primary_light">
                    Jawaban No.{selectedFAQ.id}
                  </span>

                  <h3
                    id="faq-modal-title"
                    className="text-2xl font-extrabold leading-tight text-white sm:text-3xl"
                  >
                    {selectedFAQ.header}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-invofest_gay">
                    {selectedFAQ.category}
                  </p>
                </div>

                {/* Answer */}
                <div className="relative rounded-2xl border border-invofest_secondary bg-invofest_secondary p-5 sm:p-6">
                  <p
                    id="faq-modal-answer"
                    className="text-base leading-8 text-white"
                  >
                    {selectedFAQ.text}
                  </p>
                </div>

                {/* Modal footer */}
                <div className="mt-7 flex items-center justify-between gap-3 border-t border-invofest_secondary pt-5">
                  <div className="flex min-w-0 items-center gap-3">
                    <img
                      src={SayInvofest}
                      alt=""
                      aria-hidden="true"
                      className="h-12 w-12 shrink-0 object-contain"
                    />
                    <p className="text-xs leading-5 text-invofest_gay sm:text-sm">
                      Semoga membantu!
                      <br />
                      Sampai jumpa di INVOFEST.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeFAQ}
                    className="shrink-0 rounded-full bg-invofest_primary_light px-5 py-3 text-sm font-bold text-invofest shadow-md shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-invofest_primary_light"
                  >
                    Mengerti
                  </button>
                </div>
              </div>
            </section>
          </div>,
          document.body,
        )}

      {/* Modal animations */}
      <style>{`
        .faq-modal-overlay {
          animation: faq-overlay-in 180ms ease-out both;
        }

        .faq-modal-card {
          animation: faq-modal-pop 260ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }

        @keyframes faq-overlay-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes faq-modal-pop {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-modal-overlay,
          .faq-modal-card {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQ;
