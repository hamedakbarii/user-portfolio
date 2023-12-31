import React from "react";

export default function HeroFeatures({ Icon, title, desc, className }) {
  return (
    <div className={className}>
      <div className="flex flex-col justify-center items-center gap-2">
        <div
          className="
      bg-white rounded-full w-[100px] h-[100px] flex justify-center items-center md:hidden"
        >
          <img src={Icon} alt="heroIcon1" className="w-[50px]" />
        </div>
        <h2 className="text-[#2A3C38] md:text-xl font-[750]">{title}</h2>
        <p className="text-[#2A3C38] sm:text-sm text-[12px] text-justify font-bold sm:w-[400px] xl:w-[75%] xl:ml-[100px] 2xl:w-[85%] 2xl:ml-[100px] p-2">
          {desc}
        </p>
      </div>

      <div
        className="
      bg-white rounded-full w-[100px] h-[100px] md:w-[140px] md:h-[140px] justify-center items-center absolute -left-0 ml-[-35px] hidden md:flex"
      >
        <img src={Icon} alt="heroIcon1" className="w-[40px] xl:w-[80px]" />
      </div>
    </div>
  );
}
