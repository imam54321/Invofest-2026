import React from "react";
import AOS from "aos";
import BusinnesPlan from "/assets/competition-card/bp.png";
import WebDesignImg from "/assets/competition-card/wd.png";
import UiUxImg from "/assets/competition-card/uiux.png";
import CompetitionCard from "../custom/CompetitionCard";

const ListComp = () => {
  React.useEffect(() => {
    AOS.init({
      once: true,
      duration: 1500,
    });
  }, []);

  return (  
    <React.Fragment>
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full h-fit p-4 px-8">
          <h1
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="font-semibold text-invofest text-center text-2xl sm:text-4xl lg:text-5xl mb-3"
          >
            DAFTAR KOMPETISI
          </h1>
          <p
            data-aos="zoom-in-up"
            data-aos-delay="450"
            className="text-sm md:text-base lg:text-[1.15rem] sm:leading-[1.5rem] lg:leading-[2rem] text-slate-600 text-center mb-7"
          >
            Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.
          </p>

          {/* List Card Competition */}
          <div className="w-full flex flex-nowrap overflow-x-auto snap-x snap-mandatory px-4 pb-6 gap-5 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <CompetitionCard
              dataAos="fade-up"
              delayAos="200"
              TitleCard="Businnes Plan Competition"
              DescCard="Kompetisi tahun ini mengusung tema Smart Ecosystems: Digital Solutions for a Sustainable Future (Ekosistem Pintar: Solusi Digital untuk Masa Depan yang Berkelanjutan). Tema ini bertujuan untuk mendorong generasi muda agar mampu merancang ide dan model bisnis yang tidak sekadar menguntungkan, tetapi juga berfungsi sebagai solusi digital yang tepat guna."
              ImageCard={BusinnesPlan}
              linkRedirect="/competition/business-plan"
              linkGuideBook="https://drive.google.com/drive/folders/1Ob6ISlnLNvTZiDoryCEybqZc6xxzfKuC?usp=drive_link"
              linkReg="https://docs.google.com/forms/d/e/1FAIpQLSeb8TJNghw0FLVkR1ek0RRO6v9QVK4Ra-vQzz8T46gcOs908w/viewform"
              linkPengumpulan="https://docs.google.com/forms/d/e/1FAIpQLScRiJofrgYoXJC7BW5XPThT6OO7muih_NueogtsYBs3bQZHGg/viewform"
            />
            <CompetitionCard
              dataAos="fade-up"
              delayAos="400"
              TitleCard="UI/UX Design Competition"
              DescCard="Kompetisi tahun ini mengusung tema Smart Ecosystems: Digital Solutions for a Sustainable Future (Ekosistem Pintar: Solusi Digital untuk Masa Depan yang Berkelanjutan). Tema ini bertujuan untuk mendorong generasi muda agar mampu merancang solusi digital yang tidak sekadar menarik secara visual, tetapi juga berfungsi sebagai solusi digital yang tepat guna."
              ImageCard={UiUxImg}
              linkRedirect="/competition/ui-ux"
              linkGuideBook="https://drive.google.com/drive/folders/1b2bl9Ei4mmGYv-_1lUjupdmpkCVifCRH?usp=drive_link"
              linkReg="https://docs.google.com/forms/d/e/1FAIpQLSffQ14uPaPHjFcZii27zvL7lqj8tlU-6B7YpDyEKqPPbMDLkQ/viewform"
              linkPengumpulan="https://docs.google.com/forms/d/e/1FAIpQLSdgWdJru8KiJWqkWJej9wVMlwnpMGurFtPZdJmjABO62TWM-g/viewform"       />
            <CompetitionCard
              dataAos="fade-up"
              delayAos="600"
              TitleCard="Web Design Competition"
              DescCard="Kompetisi tahun ini mengusung tema  Smart Ecosystems: Digital Solutions for a Sustainable Future (Ekosistem Pintar: Solusi Digital untuk Masa Depan yang Berkelanjutan). Tema ini bertujuan untuk mendorong generasi muda agar mampu merancang arsitektur web yang tidak sekadar menarik secara visual, tetapi juga berfungsi sebagai solusi digital yang tepat guna."
              ImageCard={WebDesignImg}
              linkRedirect="/competition/web-design"
              linkGuideBook="https://drive.google.com/drive/folders/1yX4Yr71nU3dARBGYy7SC25hoEYEtHv25?usp=sharing"
              linkReg="https://docs.google.com/forms/d/e/1FAIpQLSf9VAGf4xv5oRYh1WqdUoW1GoCbJv-p6ydta7j8DDm0yKlTDQ/viewform"
              linkPengumpulan="https://docs.google.com/forms/d/e/1FAIpQLSdOWzo23l4AuOpf_F1oDyrCf8yI2G6lWYN9DsFX05lGiKZn1g/viewform"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListComp;
