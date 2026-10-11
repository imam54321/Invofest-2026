import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MediaPartner } from "@/components/competition/MediaPartner";
import FAQ from "@/components/home/FAQ";
import { Sponsorship } from "@/components/home/Sponsorship";
import EventTimeline from "../components/custom/TimeLineComp";
import MaskotDf from "/assets/Maskot-Timeline-1.webp";
import MaskotWinner from "/assets/Maskot-Lomba-2026.webp";
import MaskotHp from "/assets/Maskot-Talkshow-2026.webp";
import MaskotHero from "/assets/Maskot-Hero-2026.webp";

const UiUx: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const timelineEvents = [
    {
      id: 1,
      title: "Pendaftaran Gelombang 1",
      date: "10 - 25 Oktober 2024",
      image: MaskotDf, // Gambar khusus untuk step 1
    },
    {
      id: 2,
      title: "Pengumuman Seleksi Berkas",
      date: "01 November 2024",
      image: MaskotHero, // Gambar khusus untuk step 2
    },
    {
      id: 3,
      title: "Technical Meeting",
      date: "10 November 2024",
      image: MaskotHp, // Gambar khusus untuk step 3
    },
    {
      id: 4,
      title: "Grand Final & Awarding Night",
      date: "20 November 2024",
      image: MaskotWinner, // Gambar khusus untuk step 4
    },
  ];

  return (
    <React.Fragment>
      <div className="w-full bg-white text-slate-700 overflow-hidden font-sans">
        {/* HERO SECTION */}
        <section className="max-w-screen-xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-center gap-12">
          <div
            data-aos="fade-right"
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src="/assets/competition-card/ui_ux.png"
              alt="UI/UX Design"
              className="rounded-2xl w-full max-w-[380px] shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div
            data-aos="fade-left"
            className="w-full md:w-1/2 space-y-5 text-center md:text-left"
          >
            <h1
              className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight"
              style={{ color: "#1c0941" }}
            >
              UI/UX Design <br className="hidden md:block" /> Competition
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-slate-600 italic">
              “From Creation to Innovation”
            </p>
            <p className="text-slate-500 font-medium flex items-center justify-center md:justify-start gap-2">
              <span className="text-xl">📅</span> Kamis, 27 November 2025
            </p>

            <div className="mt-8 space-y-4">
              <div
                className="border rounded-lg py-3 px-4 font-semibold shadow-sm inline-block w-full"
                style={{
                  backgroundColor: "#f6e6fe",
                  borderColor: "#2a1354",
                  color: "#2a1354",
                }}
              >
                Biaya Pendaftaran Gelombang 2: Rp. 85.000
              </div>

              {/* Tombol Aksi */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfuomobackIITWoZ4u9em8PjjZpjqtekXjs33-Ju1ll5r5xNQ/viewform?usp=preview"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 text-white font-semibold py-3 rounded-lg text-center shadow-lg hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
                  style={{ backgroundColor: "#2a1354" }}
                >
                  Registrasi Sekarang
                </a>

                <a
                  href="https://drive.google.com/drive/folders/1dzCkstPOee7pQmZr5Sbn8ugcGAMfdQlH?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 border-2 font-semibold py-3 rounded-lg text-center hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300"
                  style={{ borderColor: "#2a1354", color: "#2a1354" }}
                >
                  Dokumen Peserta
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* DESKRIPSI LOMBA */}
        <section
          className="w-full relative"
          style={{ backgroundColor: "#381971" }}
        >
          <div className="h-16 md:h-24"></div>

          <div className="w-full max-w-5xl mx-auto px-6 text-center">
            <h2
              data-aos="zoom-in"
              className="font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-8 tracking-wide drop-shadow-md"
            >
              DESKRIPSI LOMBA
            </h2>

            <div
              data-aos="fade-up"
              className="text-base md:text-lg lg:text-xl leading-relaxed text-white/90 space-y-6 text-justify md:text-center"
            >
              <p>
                Salah satu perlombaan dalam kegiatan{" "}
                <b className="text-white">
                  Invofest (Informatics Vocational Festival) 2025
                </b>{" "}
                adalah{" "}
                <b className="text-white">National UI/UX Design Competition</b>.
                Kegiatan ini menjadi wadah bagi mahasiswa/i untuk menyalurkan
                potensi, kreativitas, dan kemampuan berpikir kritis dalam bidang
                ilmu pengetahuan dan teknologi, khususnya pada ranah desain
                antarmuka dan pengalaman pengguna.
              </p>

              <p>
                Tahun ini, lomba mengusung tema{" "}
                <b className="text-white">“From Creation to Innovation”</b>,
                yang menggambarkan perjalanan dari sekadar menciptakan ide
                menuju pengembangan inovasi yang bernilai dan berdampak nyata.
                Melalui tema ini, peserta diharapkan dapat menghadirkan solusi
                digital yang tidak hanya estetis dan fungsional, tetapi juga
                mampu menjawab kebutuhan masyarakat di era transformasi digital.
              </p>

              <p>
                Kompetisi ini menjadi ajang bagi generasi muda untuk menumbuhkan
                semangat inovasi, kolaborasi, dan kreativitas dalam merancang
                produk digital yang berdaya saing, sekaligus berkontribusi pada
                kemajuan teknologi dan keberlanjutan ekosistem digital di
                Indonesia.
              </p>
            </div>
          </div>

          <div className="h-20 md:h-32"></div>
        </section>

        {/* KATEGORI HADIAH */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-screen-xl mx-auto px-6 text-center">
            <h2
              data-aos="zoom-in"
              className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
              style={{ color: "#2a1354" }}
            >
              KATEGORI HADIAH
            </h2>
            <p
              data-aos="fade-up"
              className="text-lg md:text-xl font-medium text-slate-600 mb-12"
            >
              🎉 Total Hadiah{" "}
              <span className="font-bold" style={{ color: "#2a1354" }}>
                Jutaan Rupiah
              </span>
            </p>

            {/* Grid Responsif */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Semua Peserta",
                  prize: "📜 Sertifikat",
                  bonus: ["Mendapatkan e-Sertifikat resmi"],
                },
                {
                  title: "Juara I",
                  prize: "Trophy + Uang Pembinaan",
                  bonus: ["🏆 Trophy", "💰 Uang Pembinaan", "📜 e-Sertifikat"],
                },
                {
                  title: "Juara II",
                  prize: "Trophy + Uang Pembinaan",
                  bonus: ["🏆 Trophy", "💰 Uang Pembinaan", "📜 e-Sertifikat"],
                },
                {
                  title: "Juara III",
                  prize: "Trophy + Uang Pembinaan",
                  bonus: ["🏆 Trophy", "💰 Uang Pembinaan", "📜 e-Sertifikat"],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white border-2 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center"
                  style={{ borderColor: "#2a1354" }}
                >
                  <div className="text-6xl mb-4 drop-shadow-md">🏆</div>
                  <h3
                    className="font-bold text-xl mb-2"
                    style={{ color: "#2a1354" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-700 font-semibold mb-4 text-center">
                    {item.prize}
                  </p>
                  {item.bonus.length > 0 && (
                    <ul className="text-sm text-slate-600 space-y-2 font-medium w-full text-left bg-slate-50 p-4 rounded-lg">
                      {item.bonus.map((bonus, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-[#b548f6]">✔</span> {bonus}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Komponen Eksternal */}
      <div>
        {/* Panggil komponen timeline di sini */}
        <EventTimeline
          title="JADWAL & TIMELINE EVENT" // Optional (default: TIMELINE EVENT)
          items={timelineEvents}
          defaultImage={MaskotHp} // Fallback gambar default
        />
      </div>
      <FAQ />
      <Sponsorship />
      <MediaPartner />
    </React.Fragment>
  );
};

export default UiUx;
