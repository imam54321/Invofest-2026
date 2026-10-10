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
        className="group relative flex h-full min-h-[20rem] flex-col overflow-hidden rounded-xl border border-white/70 bg-white p-6 shadow-lg shadow-invofest/10 transition-all duration-300 before:absolute before:inset-y-0 before:right-0 before:w-1 before:bg-invofest_primary hover:-translate-y-1 hover:shadow-xl hover:shadow-invofest/20"
      >
        <h5 className="mb-3 text-2xl font-bold leading-tight text-invofest">
          {title}
        </h5>
        <p className="mb-6 flex-1 leading-relaxed text-slate-600">{desc}</p>
        <div className="mt-auto pt-2">
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
    </React.Fragment>
  );
};

export default CardAbout;
