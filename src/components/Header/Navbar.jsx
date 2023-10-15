import React, { useEffect, useState } from "react";
import {
  AboutIcon,
  EducationIcon,
  ExperienceIcon,
  HouseIcon,
  ProjectsIcon,
  SkillsIcon,
} from "../../Icons";

export default function Navbar() {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const fixScroll = () => {
      window.scrollY > 20 ? setIsScrolling(true) : setIsScrolling(false);
    };

    window.addEventListener("scroll", fixScroll);

    return () => {
      window.removeEventListener("scroll", fixScroll);
    };
  }, []);

  console.log(isScrolling);

  return (
    <div
      className={`w-full bg-[#02353C] flex justify-between items-center p-3 md:hidden fixed top-0 z-10 
      
      `}
    >
      <div className={`flex justify-center items-center sm:gap-6 gap-2`}>
        <img
          src="/images/header/navbar/hamburger.png"
          alt="Menu"
          onClick={() => setIsMenuShow(!isMenuShow)}
          className={`${
            isMenuShow ? "rotate-90" : ""
          } transition-all duration-300 cursor-pointer`}
        />

        {isMenuShow && (
          <div className="flex justify-center items-center gap-4">
            <HouseIcon isMenuShow={isMenuShow} />
            <AboutIcon isMenuShow={isMenuShow} />
            <EducationIcon isMenuShow={isMenuShow} />
            <SkillsIcon isMenuShow={isMenuShow} />
            <ExperienceIcon isMenuShow={isMenuShow} />
            <ProjectsIcon isMenuShow={isMenuShow} />
          </div>
        )}
      </div>

      <div className="flex justify-center items-center gap-1">
        <img
          src="/images/header/navbar/skype.png"
          alt="skype"
          className="cursor-pointer"
        />
        <img
          src="/images/header/navbar/linkedin.png"
          alt="linkedin"
          className="cursor-pointer"
        />
        <img
          src="/images/header/navbar/mail.png"
          alt="mail"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}
