import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhiteWaveTop from "/assets/wave-top.png";
import WhiteWaveBot from "/assets/wave-bot.png";
import { MediaPartner } from "@/components/competition/MediaPartner";
import FAQ from "@/components/home/FAQ";
import { Sponsorship } from "@/components/home/Sponsorship";
import EventTimeline from "../components/custom/TimeLineComp";
import MaskotDf from "/assets/Maskot-Timeline-1.webp";
import MaskotWinner from "/assets/Maskot-Lomba-2026.webp";
import MaskotHp from "/assets/Maskot-Talkshow-2026.webp";
import MaskotHero from "/assets/Maskot-Hero-2026.webp";

const WebdesignCompetition: React.FC = () => {
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
              src="/assets/competition-card/web_design.png"
              alt="UI/UX Design"
              className="rounded-2xl w-[350px] shadow-lg"
            />
          </div>

          <div data-aos="fade-left" className="w-full md:w-1/2 space-y-4">
            <h1 className="font-semibold text-invofest text-3xl sm:text-4xl lg:text-5xl">
              Web Design Competition
            </h1>
            <p className="text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600">
              “From Creation to Innovation”
            </p>
            <p className="text-slate-500">Kamis, 27 November 2025</p>

            <div className="space-y-3 mt-5">
              <div className="bg-navbar border border-invofest_dark text-center rounded-md py-3 font-semibold">
                Biaya Pendaftaran Gelombang 2: Rp. 60.000
              </div>
              {/* Tombol Register */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScVgBhnxdHi55I_H-egoeIaIxn-0I3yj4CCK9FXKUieAJ3A0A/viewform?usp=preview"
                rel="noopener noreferrer"
                className="block w-full bg-invofest_dark hover:bg-invofest text-white font-semibold py-3 rounded-md text-center transition duration-200"
              >
                Registrasi
              </a>

              {/* Tombol Guidebook */}
              <a
                href="https://drive.google.com/drive/folders/1suvD65_gH7koaejynEev8DwV6vF9KNSc?usp=drive_link"
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
              className="text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-gray-300"
            >
              <p className="mb-4">
                Salah satu perlombaan dalam kegiatan{" "}
                <b>Invofest (Informatics Vocational Festival) 2025</b> adalah{" "}
                <b>National Web Design Competition</b>. yang diharapkan melalui
                ajang ini para <b>mahasiswa/i</b> dapat menggali serta
                mengembangkan potensi diri sebagai upaya untuk menjadi sumber
                daya manusia yang unggul di bidang ilmu pengetahuan dan
                teknologi.
              </p>

              <p>
                Lomba ini mengusung tema “From Creation to Innovation”, yang
                bertujuan untuk mendorong generasi muda agar tidak hanya
                berhenti pada tahap menciptakan ide, tetapi juga mampu
                mengembangkannya menjadi inovasi yang bernilai dan berdampak
                nyata. Melalui tema ini, peserta diharapkan dapat menciptakan
                desain web yang tidak hanya menarik secara visual, tetapi juga
                inovatif, fungsional, dan relevan dengan kebutuhan masyarakat di
                era digital.
              </p>

              <p>
                Dengan semangat kreativitas dan inovasi, kompetisi ini menjadi
                wadah bagi mahasiswa/i untuk menunjukkan kemampuan terbaiknya
                dalam merancang karya digital yang berdaya saing serta
                berkontribusi terhadap kemajuan teknologi informasi di masa
                depan.
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
        <section className="py-16 bg-white">
          <div className="max-w-screen-xl mx-auto px-6 text-center">
            <h2
              data-aos="zoom-in"
              className="text-2xl md:text-3xl font-bold text-invofest_dark mb-4"
            >
              KATEGORI HADIAH
            </h2>

            {/* Keterangan Besar */}
            <p
              data-aos="fade-up"
              className="text-lg md:text-xl font-semibold text-slate-700 mb-8"
            >
              🎉 Total Hadiah{" "}
              <span className="text-invofest_dark">Jutaan Rupiah</span>
            </p>

            <div className="flex flex-wrap justify-center gap-8">
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
                  data-aos-delay={index * 150}
                  className="w-[240px] border-2 border-invofest_dark rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 bg-white"
                >
                  <div className="text-5xl mb-3 text-invofest_dark">🏆</div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-slate-600 mt-2 font-medium">
                    {item.prize}
                  </p>

                  {item.bonus.length > 0 && (
                    <ul className="mt-3 text-sm text-slate-600 space-y-1">
                      {item.bonus.map((bonus, i) => (
                        <li key={i}>{bonus}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
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
      <Sponsorship />

      {/* MEDIA PARTNER */}
      <MediaPartner />
    </React.Fragment>
  );
};

export default WebdesignCompetition;
