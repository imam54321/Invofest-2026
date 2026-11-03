import React from "react";
import heroInvofest from "/assets/Maskot-Seminar-2026.webp";
import AOS from "aos";
import ButtonPrimary from "../custom/ButtonPrimary";

const HeroSeminar = () => {
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
                IT Seminar
              </h1>
              <h2
                data-aos="fade-right"
                data-aos-delay="450"
                className="font-semibold text-invofest text-xl sm:text-2xl lg:text-3xl"
              >
                “Beyond the Classroom: Preparing for the Future of Technology
                and Industry”
              </h2>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600"
              >
                Seminar Nasional yang membahas arti “Preparing for the Future of Technology and Industry”.
                Yakni, menggambarkan pentingnya mempersiapkan diri menghadapi
                perkembangan teknologi dan kebutuhan industri di masa depan.
                Proses belajar tidak hanya terbatas pada teori di dalam kelas
                atau lingkungan akademik formal, tetapi juga dapat diperoleh
                melalui pengalaman berorganisasi dan kegiatan lainnya sebagai
                bekal untuk belajar menghadapi dunia nyata, khususnya dunia
                kerja dan industri. Hal ini menjadi semakin penting seiring
                perkembangan teknologi yang semakin cepat dan kebutuhan industri
                yang terus berkembang.
              </p>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 mt-3">
                <ButtonPrimary
                  text={"INFO SELENGKAPNYA"}
                  dataAos={"zoom-in"}
                  delayAos={"300"}
                  isOutline={false}
                  handleClick={() =>
                    window.scrollTo({
                      top: 700,
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
                      `https://wa.me/6285290100235?text=${encodeURIComponent(
                        "Halo Kak, Saya Ingin Bertanya mengenai Invofest 2026...",
                      )}`,
                    )
                  }
                />
              </div>
            </div>
            <img
              src={heroInvofest}
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

export default HeroSeminar;
