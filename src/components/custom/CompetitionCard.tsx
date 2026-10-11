import React from "react";
// import ButtonPrimary from './ButtonPrimary';
import "../../index.css";
import AOS from "aos";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "../ui/dialog";
import { Link } from "react-router-dom";
// import { FaBook } from "react-icons/fa6";
// import { FaTrophy } from "react-icons/fa6";
// import { IoSend } from "react-icons/io5";

type compCard = {
  ImageCard: any;
  TitleCard: string;
  DescCard: string;
  dataAos: string;
  delayAos: string;
  linkGuideBook: string;
  linkReg: string;
  linkPengumpulan: string;
  linkRedirect: string;
};

const CompetitionCard = ({
  TitleCard,
  DescCard,
  ImageCard,
  dataAos,
  delayAos,
  // linkGuideBook,
  linkRedirect
  // linkReg,
  // linkPengumpulan
}: compCard) => {
  // const [openDialog, setOpenDialog] = React.useState<boolean>(false);

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
        className="flip-card group"
      >
        <div className="flip-card-inner">
          {/* FRONT SIDE */}
          <div className="flip-card-front">
            <img
              src={ImageCard}
              alt={TitleCard}
              className="flip-card-image"
            />

            {/* Gradient untuk kontras teks */}
            <div className="flip-card-gradient" />

            {/* Bagian teks + blur bawah sekitar 1/4 card */}
            <div className="flip-card-overlay">
              <h5 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                {TitleCard}
              </h5>

              <p className="text-sm text-white/90 line-clamp-2 mb-4">
                {DescCard}
              </p>
            </div>
          </div>

          {/* BACK SIDE */}
          <div className="flip-card-back">
            <div className="flip-card-back-content">
              <span className="flip-card-label">
                INVOFEST COMPETITION
              </span>

              <h5 className="text-2xl font-bold text-[#dffffc] mb-4">
                {TitleCard}
              </h5>

              <div className="flip-card-divider" />

              <p className="text-sm sm:text-base leading-relaxed text-white/85">
                {DescCard}
              </p>

              <Link
                to={linkRedirect}
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "auto",
                  })
                }
                className="flip-card-button mt-6"
              >
                LIHAT DETAIL
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CompetitionCard;
