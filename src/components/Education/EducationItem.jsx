import React from "react";

export default function EducationItem({ Icon, title, year, pos, desc }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col justify-center items-center gap-1">
        <div className="w-2 h-2 rounded-full bg-[#57848A]"></div>
        <div className="w-[3px] h-[300px] md:h-[200px] 2xl:h-[200px] rounded-xl bg-[#57848A]"></div>
      </div>

      <div className="flex flex-col justify-start items-center mt-[-20px]">
        <div className="flex justify-center items-start gap-2">
          <img src={Icon} alt="Icon" className="pt-2 w-[50px]" />

          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex flex-col justify-center items-start">
              <h2 className="text-[#FFFFFF] text-lg">{title}</h2>
              <span className="text-[#C1F6ED] text-[11px]">{year}</span>
              <span className="text-[#C1F6ED] text-[11px]">{pos}</span>
            </div>

            <div
              className="text-[#FFFFFF] text-sm font-normal w-full xl:w-900px max-w-[1300px] text-justify xl:text-[17px]"
              style={{ lineHeight: "25px" }}
            >
              {desc}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
