import React from "react";
import AOS from "aos";
import "../../index.css";
import { CardSpeakerProps } from "@/utils/types";

function CardSpeaker({ delay, name, position, image, title }: CardSpeakerProps) {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="relative w-full max-w-[260px] h-[390px] overflow-hidden group transition-all duration-300 hover:-translate-y-2"
    >
      <div className="absolute left-0 top-0 w-[70%] h-full bg-invofest_secondary rounded-tl-[45px] overflow-hidden z-0">
      
        <span className="absolute left-3 top-6 text-4xl font-extrabold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.35)] uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 select-none">
          Speakers
        </span>
      </div>
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover object-top z-10 transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-invofest_card_overlay via-invofest_card_overlay/90 to-transparent flex flex-col justify-end p-5 z-20">
        <h3 className="text-white font-bold text-xl sm:text-2xl leading-tight">
          {name}
        </h3>
        <p className="text-white/80 text-xs sm:text-sm font-medium mt-0.5">
          {position} {title ? `• ${title}` : ""}
        </p>
      </div>
    </div>
  );
}

export default CardSpeaker;
