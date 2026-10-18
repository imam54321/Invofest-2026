import DescComp from "@/components/competition/DescComp";
import HeroComp from "@/components/competition/HeroComp";
import ListComp from "@/components/competition/ListComp";
// import { MediaPartner } from "@/components/competition/MediaPartner";
import FAQ from "@/components/home/FAQ";
// import { Sponsorship } from "@/components/home/Sponsorship";
import { TitlePage } from "@/utils/TitlePage";
import React from "react";

const Competition = () => {
  TitlePage("Competition");

  return (
    <React.Fragment>
      {/* Hero Section */}
      <HeroComp />

      {/* Description */}
      <DescComp />

      {/* List Competition */}
      <ListComp />

      {/* FAQ Section */}
      <FAQ 
        phoneNumber="6287719028463" 
        waMessage="Halo Kak, Saya Ingin Bertanya mengenai IT Competition Invofest 2026..."  />

      {/* Sponsorship */}
      {/* <Sponsorship /> */}

      {/* Media Partner */}
      {/* <MediaPartner /> */}
    </React.Fragment>
  );
};

export default Competition;
