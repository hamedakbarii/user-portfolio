import React from "react";
import ProjectItem from "../components/Projects/ProjectItem";

export default function Projects() {
  return (
    <div className="w-full bg-[#002328] p-6" id="Projects">
      <div className="flex flex-col gap-4">
        <span
          className="text-[#F2F1F9] border-b-2 border-[#57848A] w-36 pb-2 font-semibold text-xl md:text-2xl"
          style={{ letterSpacing: ".04rem" }}
        >
          Projects
        </span>

        <div className="flex flex-col justify-center items-start">
          <p className="text-white text-[10px] md:text-sm">
            Bachelor's project
          </p>
          <span className="text-[#C1F6ED] text-[8px] md:text-[10px]">
            May 2019 - Jul 2019
          </span>
        </div>

        <p className="text-white text-[10px] md:text-[14px] text-justify">
          An advanced classification unit was engineered to categorize dried
          fruits by analyzing their standard RGB color profiles. The
          establishment of this standard RGB range involved the utilization of a
          dataset comprising both rotten and damp dried fruits, employing the
          powerful transfer learning technique (MobileNet)alongside a CNN model.
          This classification unit effectively segregates these fruits by
          employing a somple RGB module, thereby ensuring accurate and efficient
          sorting based on their color characteristics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ProjectItem
              src={"/images/projects/projectImg1.png"}
              text={
                "Adjusting the RGB range, regulating fan speed, switching fruits, and altering the travel belt speed"
              }
            />
          </div>

          <div>
            <ProjectItem
              src={"/images/projects/projectImg2.png"}
              text={"Overall architecture of the classification unit."}
            />
          </div>

          <div className="md:col-span-2">
            <ProjectItem
              video={"/videos/video1.mp4"}
              text={
                "Adjusting the RGB range, regulating fan speed, switching fruits, and altering the travel belt speed"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
