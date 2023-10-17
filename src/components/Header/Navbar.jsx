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

  const [homePosition, setHomePosition] = useState(0);
  const [aboutPosition, setAboutPosition] = useState(0);
  const [educationPosition, setEducationPosition] = useState(0);
  const [skillsPosition, setSkillsPosition] = useState(0);
  const [experiencePosition, setExperiencePosition] = useState(0);
  const [ProjectsPosition, setProjectsPosition] = useState(0);

  const scrollIntoSection = (num) => {
    window.scrollTo({
      behavior: "smooth",
      top: num,
    });
  };

  const getItemsPosition = () => {
    const homescroll = document.querySelector("#Home")?.getBoundingClientRect();
    setHomePosition(homescroll.top);

    const aboutscroll = document
      .querySelector("#About")
      ?.getBoundingClientRect();
    setAboutPosition(aboutscroll.top);

    const educationscroll = document
      .querySelector("#Education")
      ?.getBoundingClientRect();
    setEducationPosition(educationscroll.top);
    const skillsscroll = document
      .querySelector("#Skills")
      ?.getBoundingClientRect();
    setSkillsPosition(skillsscroll.top);

    const experienceScroll = document
      .querySelector("#Experience")
      ?.getBoundingClientRect();
    setExperiencePosition(experienceScroll.top + 100);

    const projectsScroll = document
      .querySelector("#Projects")
      ?.getBoundingClientRect();
    setProjectsPosition(projectsScroll.top + 200);
  };

  useEffect(() => {
    getItemsPosition();
  }, []);

  return (
    <div
      className={`w-full bg-[#02353C] flex justify-between items-center p-3 lg:hidden fixed top-0 z-10 
      
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
            <div onClick={() => scrollIntoSection(0)}>
              <HouseIcon isMenuShow={isMenuShow} />
            </div>

            <div onClick={() => scrollIntoSection(aboutPosition)}>
              <AboutIcon isMenuShow={isMenuShow} />
            </div>

            <div onClick={() => scrollIntoSection(educationPosition)}>
              <EducationIcon isMenuShow={isMenuShow} />
            </div>

            <div onClick={() => scrollIntoSection(skillsPosition)}>
              <SkillsIcon isMenuShow={isMenuShow} />
            </div>

            <div onClick={() => scrollIntoSection(experiencePosition)}>
              <ExperienceIcon isMenuShow={isMenuShow} />
            </div>

            <div onClick={() => scrollIntoSection(ProjectsPosition)}>
              <ProjectsIcon isMenuShow={isMenuShow} />
            </div>
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
