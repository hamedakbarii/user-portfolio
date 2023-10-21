import React, { useEffect, useState } from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";

import {
  AboutIcon,
  ExperienceIcon,
  EducationIcon,
  HouseIcon,
  ProjectsIcon,
  SkillsIcon,
} from "../Icons";

export default function Home() {
  const [activer, setActiver] = useState({ home: true });

  const [homePosition, setHomePosition] = useState(0);
  const [aboutPosition, setAboutPosition] = useState(0);
  const [educationPosition, setEducationPosition] = useState(0);
  const [skillsPosition, setSkillsPosition] = useState(0);
  const [experiencePosition, setExperiencePosition] = useState(0);
  const [ProjectsPosition, setProjectsPosition] = useState(0);

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
    setExperiencePosition(experienceScroll.top);

    const projectsScroll = document
      .querySelector("#Projects")
      ?.getBoundingClientRect();
    setProjectsPosition(projectsScroll.top);
  };

  const scrollIntoSection = (num) => {
    window.scrollTo({
      behavior: "smooth",
      top: num,
    });
  };

  const setTrueEr = (name) => {
    setActiver({ [name]: true });
  };

  useEffect(() => {
    getItemsPosition();
    document.addEventListener("scroll", () => {
      const scroll = window.scrollY;

      if (scroll === 0) {
        setTrueEr("home");
      } else if (scroll > 200 && scroll < 900) {
        setTrueEr("about");
      } else if (scroll > 900 && scroll < 1700) {
        setTrueEr("education");
      } else if (scroll > 1700 && scroll < 2800) {
        setTrueEr("skills");
      } else if (scroll > 2800 && scroll < 4300) {
        setTrueEr("experience");
      } else if (scroll > 4300) {
        setTrueEr("projects");
      }
    });
  }, []);

  return (
    <div className="flex justify-center w-full h-full" id="Home">
      <div
        className={`w-1/5 hidden lg:flex flex-col justify-start items-center bg-[#02353C] pt-20 gap-10 h-screen fixed top-0 left-0 }`}
      >
        <div className="mr-10">
          <div className="flex justify-center items-center gap-3">
            <a href="mailto:Mstafazre@gmail.com">
              <img
                src="/images/header/navbar/desktop/MenuIcon1.png"
                alt="mail"
                className="w-12 cursor-pointer"
              />
            </a>

            <a href="https://www.linkedin.com/in/mostafa-zare">
              <img
                src="/images/header/navbar/desktop/MenuIcon2.png"
                alt="linkedin"
                className="w-12 cursor-pointer"
              />
            </a>

            <a href="https://join.skype.com/invite/F4yoaBBsKxwX">
              <img
                src="/images/header/navbar/desktop/MenuIcon3.png"
                alt="skype"
                className="w-12 cursor-pointer"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full gap-2 mr-10 text-lg">
          <div
            onClick={() => scrollIntoSection(0)}
            className={`zz flex justify-center items-center gap-5 transition-all duration-300 font-semibold w-full p-3 text-white rounded-r-xl cursor-pointer ${
              activer.home ? "active" : ""
            }`}
          >
            <HouseIcon home={activer.home} />
            <span className="w-20">Home</span>
          </div>

          <div
            onClick={() => scrollIntoSection(aboutPosition)}
            className={`zz flex justify-center items-center gap-5 transition-all duration-300 font-semibold w-full p-3 text-white rounded-r-xl cursor-pointer ${
              activer.about ? "active zhome" : ""
            }`}
          >
            <AboutIcon about={activer.about} />
            <span className="w-20">About</span>
          </div>

          <div
            onClick={() => scrollIntoSection(educationPosition)}
            className={`zz flex justify-center items-center gap-5 transition-all duration-300 font-semibold w-full p-3 text-white rounded-r-xl cursor-pointer ${
              activer.education ? "active" : ""
            }`}
          >
            <EducationIcon education={activer.education} />
            <span className="w-20">Education</span>
          </div>

          <div
            onClick={() => scrollIntoSection(skillsPosition)}
            className={`zz flex justify-center items-center gap-5 transition-all duration-300 font-semibold w-full p-3 text-white rounded-r-xl cursor-pointer ${
              activer.skills ? "active" : ""
            }`}
          >
            <SkillsIcon skills={activer.skills} />
            <span className="w-20">Skills</span>
          </div>

          <div
            onClick={() => scrollIntoSection(experiencePosition)}
            className={`zz flex justify-center items-center gap-5 transition-all duration-300 font-semibold w-full p-3 text-white rounded-r-xl cursor-pointer ${
              activer.experience ? "active" : ""
            }`}
          >
            <ExperienceIcon experience={activer.experience} />
            <span className="w-20">Experience</span>
          </div>

          <div
            onClick={() => scrollIntoSection(ProjectsPosition)}
            className={`zz flex justify-center items-center gap-5 transition-all duration-300 font-semibold w-full p-3 text-white rounded-r-xl cursor-pointer ${
              activer.projects ? "active" : ""
            }`}
          >
            <ProjectsIcon projects={activer.projects} />
            <span className="w-20">Projects</span>
          </div>
        </div>
      </div>

      <div className="md:absolute top-0 right-0 lg:w-10/12">
        <Header />
        <AboutMe />
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </div>
  );
}
