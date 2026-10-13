import React from "react";
import AOS from "aos";
import WhiteWaveTop from "/assets/wave-top.png";
import WhiteWaveBot from "/assets/wave-bot.png";

const DescComp = () => {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="bg-invofest_dark w-full h-fit relative">
        <img src={WhiteWaveTop} alt="wave" className="w-full relative top-0" />

        <div className="max-w-screen-xl mx-auto py-20">
          <div className="w-full h-fit p-4 px-8">
            <h1
              data-aos="zoom-in-up"
              data-aos-delay="300"
              className="font-semibold text-gray-300 text-center text-2xl sm:text-4xl lg:text-5xl mb-5"
            >
              DESKRIPSI KOMPETISI
            </h1>
            <p
              data-aos="zoom-in-up"
              data-aos-delay="450"
              className="text-center text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-gray-300"
            >
              Kompetisi tahun ini mengusung tema <b>"Smart Ecosystems: Digital
              Solutions for a Sustainable Future"</b> (Ekosistem Pintar: Solusi
              Digital untuk Masa Depan yang Berkelanjutan). Tema ini
              bertujuan untuk mendorong generasi muda agar mampu merancang
              ide dan model bisnis yang tidak sekadar menguntungkan, tetapi
              juga berfungsi sebagai solusi digital yang tepat guna. Peserta
              dituntut untuk membangun ekosistem bisnis yang cerdas,
              inklusif, dan relevan dalam menjawab tantangan keberlanjutan
              lingkungan, sosial, maupun ekonomi di tengah masyarakat.
            </p>
          </div>
        </div>
        <img
          src={WhiteWaveBot}
          alt="wave"
          className="w-full relative bottom-0"
        />
      </div>
    </React.Fragment>
  );
};

export default DescComp;
