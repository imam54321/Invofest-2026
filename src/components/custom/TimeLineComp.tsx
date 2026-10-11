import React from "react";

export interface TimelineItem {
  id?: string | number;
  title: string;
  date: string;
  image?: string; 
}

interface EventTimelineProps {
  title?: string;
  items: TimelineItem[];
  defaultImage?: string; 
}

export const EventTimeline: React.FC<EventTimelineProps> = ({
  title = "TIMELINE EVENT",
  items = [],
  defaultImage,
}) => {
  return (
    <section className="bg-[#381971] w-full relative py-20">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Title */}
        <h2
          data-aos="zoom-in"
          className="font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-16 tracking-wide drop-shadow-md"
        >
          {title}
        </h2>

        {/* Container Timeline Vertikal */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Garis Vertikal (Tengah di Desktop, Kiri di Mobile) */}
          <div className="absolute left-[38px] md:left-1/2 top-0 bottom-0 w-1 bg-[#b548f6] opacity-60 rounded-full transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {items.map((step, index) => {
              const isEven = index % 2 === 0;
              // Gunakan gambar custom item, jika tidak ada pakai defaultImage
              const currentImage = step.image || defaultImage;

              return (
                <div
                  key={step.id || index}
                  data-aos="fade-up"
                  className={`relative flex flex-col md:flex-row items-center justify-between w-full group ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Spacer Desktop agar Card berada di satu sisi */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Dot Timeline */}
                  <div className="absolute left-[24px] md:left-1/2 w-8 h-8 rounded-full border-4 border-[#00f5ff] bg-[#2a1354] shadow-[0_0_12px_rgba(0,245,255,0.7)] transform -translate-x-1/2 z-20 group-hover:scale-125 transition-transform duration-300"></div>

                  {/* Konten Card */}
                  <div
                    className={`w-full md:w-5/12 pl-24 md:pl-0 flex flex-col ${
                      isEven ? "md:items-start" : "md:items-end"
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-transparent group-hover:border-[#b548f6] transition-all duration-300 relative w-full text-center flex flex-col items-center">
                      
                      {/* Maskot / Gambar Custom */}
                      {currentImage && (
                        <div className="w-16 h-16 absolute -top-8 bg-white rounded-full p-1 border-2 border-[#b548f6] shadow-md flex items-center justify-center overflow-hidden">
                          <img
                            src={currentImage}
                            alt={step.title}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      )}

                      <h4 className="mt-6 font-bold text-[#2a1354] text-lg leading-snug">
                        {step.title}
                      </h4>
                      
                      <div className="mt-3 inline-block bg-[#df99fd]/20 text-[#2a1354] px-4 py-1.5 rounded-full font-bold text-sm border border-[#df99fd]/50">
                        {step.date}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTimeline;