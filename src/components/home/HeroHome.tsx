import React from "react";
import heroInvofest1 from "/assets/Maskot-Hero-2026.webp";
import textImage from "/assets/Logo Invofest.webp";
import AOS from "aos";
import ButtonPrimary from "../custom/ButtonPrimary";

const HeroHome = () => {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="max-w-screen-xl mx-auto ">
        <div className="w-full h-fit p-4 px-8 ">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-3">
            <div className="flex flex-col gap-3 sm:gap-4 ">
              <img
                data-aos="fade-right"
                data-aos-delay="100"
                src={textImage}
                className="w-[280px] sm:w-[300px]"
                alt="text-image"
              />
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                className="text-sm md:text-base lg:text-[1.35rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600"
              >
                Invofest hadir bukan hanya sebagai festival tahunan, melainkan
                sebagai manifestasi dari semangat perubahan tersebut. Melalui
                tema <b>'Beyond the Breakthrough: The Future is Now'</b> , kami ingin
                merespon gelombang terobosan di kampus ini dengan aksi nyata.
                Kami percaya bahwa masa depan tidak ditunggu, melainkan
                diciptakan hari ini melalui karya, kompetisi, dan kolaborasi."{" "}
                .
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
                      `https://wa.me/6288232405191?text=${encodeURIComponent(
                        "Halo Kak, Saya Ingin Bertanya mengenai Invofest 2026...",
                      )}`,
                    )
                  }
                />
              </div>
            </div>
            <img
              src={heroInvofest1}
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

export default HeroHome;
