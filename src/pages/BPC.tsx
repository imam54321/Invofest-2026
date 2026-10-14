import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhiteWaveTop from "/assets/wave-top.png";
import WhiteWaveBot from "/assets/wave-bot.png";
// import { MediaPartner } from "@/components/competition/MediaPartner";
import FAQ from "@/components/home/FAQ";
// import { Sponsorship } from "@/components/home/Sponsorship";
import EventTimeline from "../components/custom/TimeLineComp";
import MaskotDf from "/assets/Maskot-Timeline-1.webp";
import MaskotWinner from "/assets/Maskot-Lomba-2026.webp";
import MaskotHp from "/assets/Maskot-Talkshow-2026.webp";
import MaskotHero from "/assets/Maskot-Hero-2026.webp";
import CardHadiah from "@/components/custom/CardHadiah";
import { dataHadiahPoster } from "@/utils/datas";
import Certificate from "/assets/certificate.svg";


const Poster: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const timelineEvents = [
    {
      id: 1,
      title: "Pendaftaran Gelombang 1",
      date: "10 - 25 Oktober 2024",
      image: MaskotDf,
    },
    {
      id: 2,
      title: "Pengumuman Seleksi Berkas",
      date: "01 November 2024",
      image: MaskotHero,
    },
    {
      id: 3,
      title: "Technical Meeting",
      date: "10 November 2024",
      image: MaskotHp,
    },
    {
      id: 4,
      title: "Grand Final & Awarding Night",
      date: "20 November 2024",
      image: MaskotWinner,
    },
  ];

  return (
    <React.Fragment>
      <div className="w-full bg-white text-slate-700 overflow-hidden">
        {/* HERO SECTION */}
        <section className="max-w-screen-xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-10">
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src="/assets/competition-card/bp.png"
              alt="UI/UX Design"
              className="rounded-2xl w-[350px] shadow-lg"
            />
          </div>

          <div data-aos="fade-left" className="w-full md:w-1/2 space-y-4">
            <h1 className="font-semibold text-invofest text-3xl sm:text-4xl lg:text-5xl">
              Bussines Plan Competition
            </h1>
            <p className="text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600">
              “From Creation to Innovation”
            </p>
            <p className="text-slate-500">Kamis, 27 November 2025</p>

            <div className="space-y-3 mt-5">
              <div className="bg-navbar border border-invofest_dark text-center rounded-md py-3 font-semibold">
                Biaya Pendaftaran Gelombang 1 : Rp. 55.000
              </div>

              {/* Tombol Register */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeb8TJNghw0FLVkR1ek0RRO6v9QVK4Ra-vQzz8T46gcOs908w/viewform"
                rel="noopener noreferrer"
                className="block w-full bg-invofest_dark hover:bg-invofest text-white font-semibold py-3 rounded-md text-center transition duration-200"
              >
                Registrasi
              </a>

              {/* Tombol Guidebook */}
              <a
                href="https://drive.google.com/drive/folders/1Ob6ISlnLNvTZiDoryCEybqZc6xxzfKuC?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full border border-invofest_dark text-invofest_dark font-semibold py-3 rounded-md text-center hover:bg-navbar transition duration-200"
              >
                Dokumen Peserta
              </a>
            </div>
          </div>
        </section>

        {/* DESKRIPSI LOMBA */}
        <section className="bg-invofest_secondary w-full relative">
          {/* Wave atas */}
          <img
            src={WhiteWaveTop}
            alt="wave"
            className="w-full relative top-0"
          />

          {/* Jarak nyata antara wave atas dan konten */}
          <div className="h-24 md:h-36"></div>

          <div className="w-full max-w-4xl mx-auto px-8 text-center">
            <h2
              data-aos="zoom-in"
              className="font-semibold text-white text-2xl sm:text-4xl lg:text-5xl mb-8"
            >
              DESKRIPSI LOMBA
            </h2>

            <div
              data-aos="fade-up"
              className="text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-white"
            >
              <p className="mb-4">
                Salah satu perlombaan dalam kegiatan{" "}
                <b>Invofest (Informatics Vocational Festival) 2025</b> adalah{" "}
                <b>National Poster Design Competition</b>. Kegiatan ini menjadi
                wadah bagi siswa untuk menyalurkan kreativitas, ide, dan
                kemampuan berpikir kritis dalam bidang desain visual, khususnya
                dalam menciptakan karya poster yang komunikatif dan inspiratif
                di era digital.
              </p>

              <p>
                Tahun ini, lomba mengusung tema{" "}
                <b>“From Creation to Innovation”</b>, yang menggambarkan proses
                perjalanan dari menciptakan ide hingga mengubahnya menjadi
                inovasi yang memiliki nilai dan dampak nyata bagi masyarakat.
                Melalui tema ini, peserta diharapkan dapat menuangkan gagasan
                kreatif mereka dalam bentuk visual yang tidak hanya menarik
                secara estetika, tetapi juga mengandung pesan yang kuat,
                relevan, dan mendorong semangat inovasi di bidang teknologi dan
                kehidupan sosial.
              </p>
            </div>
          </div>

          {/* Jarak antara konten & wave bawah */}
          <div className="h-24 md:h-36"></div>

          {/* Wave bawah */}
          <img
            src={WhiteWaveBot}
            alt="wave"
            className="w-full relative bottom-0"
          />
        </section>

        {/* KATEGORI HADIAH */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="max-w-screen-xl mx-auto px-6 text-center">
            <h2
              data-aos="zoom-in"
              className="text-2xl md:text-3xl font-bold text-invofest_dark mb-4"
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
                <span><img src={Certificate} alt="Trophy" className="w-12 h-12"/></span>
              </div>
              <div className="px-8 text-left flex flex-col justify-center h-full flex-grow">
                <h3 className="font-bold text-xl text-white mb-1">Semua Peserta</h3>
                <p className="text-sm text-[#e2e8f0]">Mendapatkan e-Sertifikat resmi INVOFEST</p>
              </div>
            </div>

          </div>
        </section>

        <EventTimeline
          title="JADWAL & TIMELINE EVENT"
          items={timelineEvents}
          defaultImage={MaskotHp}
        />
      </div>
      {/* FAQ Section */}
      <FAQ />

      {/* Sponsorship */}
      {/* <Sponsorship /> */}

      {/* MEDIA PARTNER */}
      {/* <MediaPartner /> */}
    </React.Fragment>
  );
};

export default Poster;
