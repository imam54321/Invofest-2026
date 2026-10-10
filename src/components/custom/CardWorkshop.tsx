import React from "react";
import AOS from "aos";
import { EventWorkshopProps } from "@/utils/types";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function CardWorkshop({
  icon,
  id,
  title,
  place,
  date,
  time,
}: EventWorkshopProps) {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);
  return (
    <div
      className="bg-white box-border w-full max-w-lg flex flex-col sm:flex-row items-center sm:items-stretch  mx-2 rounded-lg overflow-hidden justify-center"
      data-aos="fade-up"
      data-aos-delay={id * 500}
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-full text-3xl flex items-center justify-center self-center my-auto">
        {icon}
      </div>
      <div className="w-full bg-gradient-to-r from-invofest_secondary to-invofest sm:p-6 pr-8 rounded-tl-2xl rounded-br-lg rounded-tr-lg rounded-bl-[3.8rem] text-white shadow-md">
        <h2 className="text-2xl font-semibold mb-3 text-white">{title}</h2>
        <div className="flex items-center gap-5 text-lg`">
          <FaCalendarAlt className="inline text-xl text-white" />
          <p className="text-white">{date}</p>
        </div>
        <div className="flex items-center gap-5 text-lg`">
          <IoMdClock className="inline text-xl text-white" />
          <p className="text-white">{time}</p>
        </div>
        <div className="flex items-center gap-5 text-lg`">
          <FaLocationDot className="inline text-xl text-white" />
          <p className="text-white">{place}</p>
        </div>
      </div>
    </div>
  );
}

export default CardWorkshop;
