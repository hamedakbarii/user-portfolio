import React from "react";

export default function AboutMe() {
  return (
    <div
      className="w-full bg-[#002328] px-5 py-8 flex flex-col justify-center items-center gap-2 relative mt-[-9px]"
      id="About"
    >
      <div className="flex flex-col justify-center items-start">
        <h2 className="text-[#F2F1F9] text-lg font-normal md:text-3xl">
          About Me
        </h2>
        <span className="text-[#C1F6ED] text-[8px] md:text-[10px]">
          27 years / Tehran{" "}
        </span>
      </div>

      <p className="text-[#C1F6ED] text-[9px] md:text-[13px] text-justify w-[250px] md:w-[700px] xl:w-[900px] 2xl:w-[1200px]">
        I hold a Master's degree in Mechanical Engineering from Khaje Nasir
        Toosi University of Technology, Tehran, Iran. I am a passionate
        researcher specializing in the application of artificial intelligence to
        drive innovation and enhance efficiency in real-world solutions. My
        expertise lies at the intersection of cutting-edge technology and
        practical engineering challenges, with a focus on energy storage,
        thermal storage, and agriculture sectors. <br /> <br /> My journey into
        the world of machine learning began when I explored a quality control
        system during my undergraduate project. This initial spark ignited a
        deep curiosity and passion for the possibilities of artificial
        intelligence. <br /> <br />
        During my master's studies, I delved into the study of solar-assisted
        heat pumps, which became the foundation for my research. I undertook a
        dedicated project with a central mission: to generate valuable energy
        data for the development of predictive models. This endeavor is driven
        by the goal of optimizing energy usage, strengthening grid stability,
        and accelerating the adoption of renewable energy sources. <br /> <br />{" "}
        I am committed to contributing to the advancement of sustainable and
        efficient technologies, and I look forward to leveraging my expertise to
        create practical solutions in the fields of energy, technology, and
        beyond.
      </p>

      <div className="w-full flex justify-center items-center absolute -bottom-[.5%] left-0 right-0">
        <div className="w-[90%] h-[3px] bg-[#57848A] rounded-lg"></div>
      </div>
    </div>
  );
}
