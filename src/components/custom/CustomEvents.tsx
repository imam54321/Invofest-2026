import React from "react";
import AOS from "aos";
import WhiteWaveTop from "/assets/wave-top.png";
import WhiteWaveBot from "/assets/wave-bot.png";
import { CustomEventsProps } from "@/utils/types";
import { FaBuilding, FaLocationDot } from "react-icons/fa6";
import CardEvents from "./CardEvents";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";

const CustomEvents = ({ title, place, time, date }: CustomEventsProps) => {
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
              Pelaksanaan {title}
            </h1>
          </div>

          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 px-4 sm:px-0 mt-6 justify-items-center">
            <CardEvents
              delay={500}
              place={date}
              icon={<FaCalendarAlt className="inline" />}
            />
            <CardEvents
              delay={1000}
              place={time}
              icon={<IoMdClock className="inline" />}
            />
            <CardEvents
              delay={1500}
              place={place}
              icon={<FaLocationDot className="inline" />}
            />
            <CardEvents
              delay={2000}
              place={"Kampus 1 (Mataram) Universitas Harkat Negeri"}
              icon={<FaBuilding className="inline" />}
            />
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

export default CustomEvents;
