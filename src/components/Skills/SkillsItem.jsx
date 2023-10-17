import React from "react";

export default function SkillsItem({
  Icon,
  title,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
}) {
  return (
    <div className="bg-white p-2 rounded-xl flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2 md:h-[100px]">
        <img src={Icon} alt="skillsIcon" />
        <h2 className="font-semibold text-sm sm:text-2xl text-[#034E40]">
          {title}
        </h2>
      </div>

      <div
        className={`bg-[#C1F6ED] p-4 rounded-xl text-justify md:w-[full] ${
          feature5
            ? "2xl:h-[279px] xl:h-[350px] lg:h-[420px] md:h-[470px]"
            : "2xl:h-[250px] xl:h-[300px] lg:h-[340px] md:h-[360px]"
        } 2xl:h-[400px]`}
      >
        <p className="text-sm font-semibold">{feature1}</p>
        <br />
        <p className="text-sm font-semibold">{feature2}</p>
        <br />
        <p className="text-sm font-semibold">{feature3}</p>
        <br />
        <p className="text-sm font-semibold">{feature4}</p>
        <br />
        <p className="text-sm font-semibold">{feature5}</p>
      </div>
    </div>
  );
}
