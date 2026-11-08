import React, { useEffect } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import AOS from "aos";

export function MediaPartner() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (
    <React.Fragment>
      <div className="h-fit mt-4 sm:mt-8 lg:mt-16 rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-8 text-[1.6rem] font-bold text-slate-600 sm:text-[40px]/[48px] text-center"
        >
          Media Partner <br className="block sm:hidden" />{" "}
          <span className="text-invofest">INVOFEST 2026</span>
        </h1>
        <InfiniteMovingCards
          items={mediaPartner}
          direction="right"
          speed="slow"
        />
      </div>
    </React.Fragment>
  );
}

const mediaPartner = [
    {
      id: 1,
      img_path: "/assets/media_partner/logo himatris .PNG",
    },
  {
    id: 2,
    img_path: "/assets/media_partner/itsnu.webp",
  },
  {
    id: 3,
    img_path: "/assets/media_partner/tkom.webp",
  },
  {
    id: 4,
    img_path: "/assets/media_partner/hmif_ups.webp",
  },
  {
    id: 5,
    img_path: "/assets/media_partner/upb.webp",
  },
  {
    id: 6,
    img_path: "/assets/media_partner/hmti_ummus.webp",
  },
  {
    id: 7,
    img_path: "/assets/media_partner/HMPS.webp",
  },
  {
    id: 8,
    img_path: "/assets/media_partner/logo info lomba IT.webp",
  },
  {
    id: 9,
    img_path: "/assets/media_partner/9.jpg",
    width: 100,
    height: 80,
  },
    {
      id: 10,
      img_path: "/assets/media_partner/10.jpg",
    },
    {
      id: 11,
      img_path: "/assets/media_partner/11.jpg",
    },
    {
      id: 12,
      img_path: "/assets/media_partner/12.jpg",
    },
    {
      id: 13,
      img_path: "/assets/media_partner/13.png",
    },
    {
      id: 14,
      img_path: "/assets/media_partner/LOGO DPM UHD.png",
    },
    {
      id: 15,
      img_path: "/assets/media_partner/ciber.jpg",
    },
    {
      id: 16,
      img_path: "/assets/media_partner/16.jpg",
    }
];
