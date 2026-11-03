import React from "react";
import CustomHero from "./CustomHero";
import { GeneralLayoutProps } from "@/utils/types";
import CustomAbout from "./CustomAbout";
import FAQ from "../home/FAQ";

function GeneralLayout({
  heroTitle,
  subtitle,
  heroDescription,
  linkRegister,
  image,
  aboutTitle,
  aboutDescription,
  children,
  phoneNumber,
  waMessage,
}: GeneralLayoutProps) {
  return (
    <React.Fragment>
      <CustomHero
        title={heroTitle}
        subtitle={subtitle}
        description={heroDescription}
        linkRegister={linkRegister}
        image={image}
      />
      <CustomAbout title={aboutTitle} description={aboutDescription} />
      {children}
      <FAQ
        phoneNumber={phoneNumber} 
        waMessage={waMessage}  
      />
    </React.Fragment>
  );
}

export default GeneralLayout;
// workshop 1
// seminar 1/2
// talkshow 3
