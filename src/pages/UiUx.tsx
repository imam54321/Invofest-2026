import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { MediaPartner } from "@/components/competition/MediaPartner";
import FAQ from "@/components/home/FAQ";
// import { Sponsorship } from "@/components/home/Sponsorship";
import EventTimeline from "../components/custom/TimeLineComp";
import MaskotDf from "/assets/Maskot-Timeline-1.webp";
import MaskotWinner from "/assets/Maskot-Lomba-2026.webp";
import MaskotHp from "/assets/Maskot-Talkshow-2026.webp";
import MaskotHero from "/assets/Maskot-Hero-2026.webp";

import { dataHadiahPoster } from "@/utils/datas";
import Certificate from "/assets/certificate.svg";
import CardHadiah from "@/components/custom/CardHadiah";
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
              src="/assets/competition-card/uiux.png"
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
                Biaya Pendaftaran : Rp. 75.000
              </div>

              {/* Tombol Aksi */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSffQ14uPaPHjFcZii27zvL7lqj8tlU-6B7YpDyEKqPPbMDLkQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-white font-semibold bg-invofest py-3 rounded-lg text-center shadow-lg hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
                  
                >
                  Registrasi Sekarang
                </a>

                <a
                  href="https://drive.google.com/drive/folders/1b2bl9Ei4mmGYv-_1lUjupdmpkCVifCRH?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full border-2 font-semibold py-3 rounded-lg text-center hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300"
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
        <section className="py-16 bg-white overflow-hidden">
          <div className="max-w-screen-xl mx-auto px-6 text-center">
            <h2
              data-aos="zoom-in"
              className="text-2xl md:text-3xl font-bold text-invofest mb-10"
            >
              KATEGORI HADIAH
            </h2>

            <div className="flex flex-nowrap sm:flex-wrap items-end justify-center gap-2.5 sm:gap-6 md:gap-8 px-1 sm:px-0 mb-8 sm:mb-12">
              {dataHadiahPoster.map((item) => (
                <CardHadiah
                  key={item.rank}
                  rank={item.rank}
                  title={item.title}
                  benefits={item.benefits}
                  delay={item.delay}
                />
              ))}
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="max-w-3xl mx-auto relative flex items-center bg-gradient-to-b from-invofest_secondary to-invofest rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300 h-[120px]"
            >
              <div className="w-[100px] h-full bg-white flex items-center justify-center rounded-r-[50px] shrink-0 shadow-[2px_0_10px_rgba(0,0,0,0.1)] z-10">
                <span>
                  <img src={Certificate} alt="Trophy" className="w-12 h-12" />
                </span>
              </div>
              <div className="px-8 text-left flex flex-col justify-center h-full flex-grow">
                <h3 className="font-bold text-xl text-white mb-1">
                  Semua Peserta
                </h3>
                <p className="text-sm text-purple-200">
                  Mendapatkan e-Sertifikat resmi INVOFEST
                </p>
              </div>
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
      <FAQ 
        phoneNumber="6285700865047" 
        waMessage="Halo Kak, Saya Ingin Bertanya mengenai UI/UX Design Competition Invofest 2026..."  />
      {/* <Sponsorship /> */}
      {/* <MediaPartner /> */}
    </React.Fragment>
  );
};

export default UiUx;
