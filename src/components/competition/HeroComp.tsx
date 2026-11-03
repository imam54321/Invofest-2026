import React from "react";
import AOS from "aos";
import heroITCompetition from "/assets/Maskot-Lomba-2026.webp";
import ButtonPrimary from "../custom/ButtonPrimary";

const HeroComp = () => {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full h-fit p-4 px-8">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-3">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h1
                data-aos="fade-right"
                data-aos-delay="300"
                className="font-semibold text-invofest text-3xl sm:text-4xl lg:text-5xl"
              >
                IT Competition
              </h1>
              <h1
                data-aos="fade-right"
                data-aos-delay="450"
                className="font-semibold text-invofest text-xl sm:text-2xl lg:text-3xl"
              >
                "Smart Ecosystems: Digital Solutions for a Sustainable Future"
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="550"
                className="text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600"
              >
                Kompetisi tahun ini mengusung tema {""} <b>"Smart Ecosystems: Digital
                Solutions for a Sustainable Future"</b> <i> (Ekosistem Pintar: Solusi
                Digital untuk Masa Depan yang Berkelanjutan)</i>. Tema ini bertujuan
                untuk mendorong generasi muda agar mampu merancang ide dan model
                bisnis yang tidak sekadar menguntungkan, tetapi juga berfungsi
                sebagai solusi digital yang tepat guna.
              </p>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 mt-3">
                <ButtonPrimary
                  text={"INFO SELENGKAPNYA"}
                  dataAos={"zoom-in"}
                  delayAos={"400"}
                  isOutline={false}
                  handleClick={() =>
                    window.scrollTo({
                      top: 850,
                    })
                  }
                />
                <ButtonPrimary
                  text={"HUBUNGI PANITIA"}
                  dataAos={"zoom-in"}
                  delayAos={"550"}
                  isOutline={true}
                  handleClick={() =>
                    window.open(
                      `https://wa.me/6287719028463?text=${encodeURIComponent(
                        "Halo Kak, Saya Ingin Bertanya mengenai It Competition Invofest 2026...",
                      )}`,
                    )
                  }
                />
              </div>
            </div>
            <img
              src={heroITCompetition}
              alt="hero-landing-page"
              className="w-[320px] sm:w-[400px]"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroComp;
