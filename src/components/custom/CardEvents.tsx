import Aos from "aos";
import React from "react";

function CardEvents({
  place,
  delay,
  icon,
}: {
  place: string;
  delay: number;
  icon: JSX.Element;
}) {
  React.useEffect(() => {
    Aos.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden flex items-stretch justify-between transition-all duration-300 hover:-translate-y-1 group"
    >
      
      <div className="w-[80%] bg-gradient-to-r from-invofest to-invofest_secondary p-5 sm:p-6 pr-8 rounded-tl-2xl rounded-bl-2xl rounded-tr-lg rounded-br-[3.5rem] z-10 text-white shadow-md">
        <span className="text-[10px] font-extrabold tracking-widest text-purple-200 uppercase block mb-1">
          INVOFEST 2026
        </span>
        <h4 className="text-base sm:text-lg font-bold leading-snug">
          {place}
        </h4>
      </div>

      
      <div className="relative w-[20%] flex justify-center items-center p-3 z-10 self-center">
        
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-invofest_secondary/10 rounded-full z-0 pointer-events-none" />

        <div className="text-invofest_secondary text-3xl sm:text-4xl z-10 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default CardEvents;
