import React from "react";

export default function EducationItem({ Icon, title, year, pos, desc }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col justify-center items-center gap-1">
        <div className="w-2 h-2 rounded-full bg-[#57848A]"></div>
        <div className="w-[3px] h-[550px] md:h-[315px] rounded-xl bg-[#57848A]"></div>
      </div>

      <div className="flex flex-col justify-start items-center md:w-[550px] mt-[-20px]">
        <div className="flex justify-center items-start gap-2">
          <img src={Icon} alt="Icon" className="pt-2 w-[50px]" />

          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex flex-col justify-center items-start md:w-[300px]">
              <h2 className="text-[#FFFFFF] text-lg">{title}</h2>
              <span className="text-[#C1F6ED] text-[11px]">{year}</span>
              <span className="text-[#C1F6ED] text-[11px]">{pos}</span>
            </div>

            <div>
              <p className="text-[#FFFFFF] text-sm font-normal w-[200px] md:w-[500px] text-justify">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
