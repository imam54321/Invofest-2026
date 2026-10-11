import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import AOS from "aos";

type cardAbout = {
  dataAos: string;
  delayAos: string;
  title: string;
  desc: string;
  btnText: string;
  href: string;
  accentColor?: string;
};

const CardAbout = ({
  title,
  desc,
  btnText,
  href,
  dataAos,
  delayAos,
}: cardAbout) => {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      <div
        data-aos={dataAos}
        data-aos-delay={delayAos}
        className="relative max-w-sm w-full bg-invofest rounded-tl-[2rem] rounded-tr-[2rem] rounded-br-[2rem] rounded-bl-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center h-full"
      >
        <div className="relative max-w-sm w-full bg-white rounded-tl-[3rem] rounded-tr-[4rem] rounded-br-[2rem] rounded-bl-[9rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center pt-10 pb-20 px-6 h-full">

          {/* Judul */}
          <a href="#" className="relative z-10">
            <h5 className="text-2xl font-bold uppercase tracking-tight text-invofest transition-colors">
              {title}
            </h5>
          </a>

          <p className="mb-5 mt-5 font-normal text-slate-600">{desc}</p>

          <div className="w-full mt-auto pt-5">
            <ButtonPrimary
              text={btnText}
              dataAos={""}
              delayAos={""}
              isOutline={false}
              isLink={true}
              href={href}
            />
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default CardAbout;
