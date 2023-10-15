import React, { useEffect, useRef, useState } from "react";
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
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(false);
  const [experience, setExperience] = useState(false);
  const [projects, setProjects] = useState(false);

  const [homePosition, setHomePosition] = useState("");
  const [aboutPosition, setAboutPosition] = useState("");
  const [educationPosition, setEducationPosition] = useState("");
  const [skillsPosition, setSkillsPosition] = useState("");
  const [experiencePosition, setExperiencePosition] = useState("");
  const [ProjectsPosition, setProjectsPosition] = useState("");

  useEffect(() => {
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
  }, []);

  const scrollIntoSection = (num) => {
    window.scrollTo({
      behavior: "smooth",
      top: num,
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setHome(scrollY < aboutPosition);
    setAbout(scrollY >= aboutPosition && scrollY < educationPosition);
    setEducation(scrollY >= educationPosition && scrollY < skillsPosition);
    setSkills(scrollY >= skillsPosition && scrollY < experiencePosition);
    setExperience(scrollY >= experiencePosition && scrollY < ProjectsPosition);
    setProjects(scrollY >= ProjectsPosition);
  };

  useEffect(() => {
    handleScroll();
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center w-full h-full" id="Home">
      <div
        className={`w-1/5 hidden md:flex flex-col justify-start items-start bg-[#02353C] pt-20 gap-10 h-screen fixed top-0 left-0 }`}
      >
        <div className="w-full">
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

        <div className="flex flex-col justify-start items-start w-full gap-2">
          <div
            onClick={() => scrollIntoSection(0)}
            className={`zz flex justify-center items-center gap-5 transition-all duration-300 font-semibold w-full p-3 text-white rounded-r-xl cursor-pointer ${
              home ? "active" : ""
            }`}
          >
            <HouseIcon home={home} />
            <span className="w-20">Home</span>
          </div>

          <div
            onClick={() => scrollIntoSection(aboutPosition)}
            className={`zz flex justify-center items-center gap-5 transition-all duration-300 font-semibold w-full p-3 text-white rounded-r-xl cursor-pointer ${
              about ? "active zhome" : ""
            }`}
          >
            <AboutIcon about={about} />
            <span className="w-20">About</span>
          </div>

          <div
            onClick={() => scrollIntoSection(educationPosition)}
            className={`zz flex justify-center items-center gap-5 transition-all duration-300 font-semibold w-full p-3 text-white rounded-r-xl cursor-pointer ${
              education ? "active" : ""
            }`}
          >
            <EducationIcon education={education} />
            <span className="w-20">Education</span>
          </div>

          <div
            onClick={() => scrollIntoSection(skillsPosition)}
            className={`zz flex justify-center items-center gap-5 transition-all duration-300 font-semibold w-full p-3 text-white rounded-r-xl cursor-pointer ${
              skills ? "active" : ""
            }`}
          >
            <SkillsIcon skills={skills} />
            <span className="w-20">Skills</span>
          </div>

          <div
            onClick={() => scrollIntoSection(experiencePosition)}
            className={`zz flex justify-center items-center gap-5 transition-all duration-300 font-semibold w-full p-3 text-white rounded-r-xl cursor-pointer ${
              experience ? "active" : ""
            }`}
          >
            <ExperienceIcon experience={experience} />
            <span className="w-20">Experience</span>
          </div>

          <div
            onClick={() => scrollIntoSection(ProjectsPosition)}
            className={`zz flex justify-center items-center gap-5 transition-all duration-300 font-semibold w-full p-3 text-white rounded-r-xl cursor-pointer ${
              projects ? "active" : ""
            }`}
          >
            <ProjectsIcon projects={projects} />
            <span className="w-20">Projects</span>
          </div>
        </div>
      </div>

      <div className="md:absolute top-0 right-0 md:w-10/12">
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
