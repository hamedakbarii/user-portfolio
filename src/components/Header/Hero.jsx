import React from "react";
import HeroFeature from "./HeroFeature";

export default function Hero() {
  return (
    <>
      <div className="mt-8 sm:m-0">
        <div className="flex flex-col justify-center items-center relative md:hidden">
          <img
            src="/images/header/hero/heroImg.png"
            alt="heroImg"
            className="w-full"
          />
          <img
            src="/images/header/hero/heroImg2.png"
            alt="heroImg2"
            className="absolute w-full"
          />
          <img
            src="/images/header/hero/desktop/HeroImg1.png"
            alt="heroImg2"
            className="absolute -bottom-20 right-5 w-36 headerCharacter"
          />

          <div className="HeaderTitle absolute left-2 bottom-10 text-white flex flex-col justify-center items-start">
            <h2 className="font-bold text-5xl sm:text-2xl">Mostafa Zare</h2>
            <span className="text-[12px]">Machine Learning Engineer </span>
          </div>
        </div>

        <div className="flex-col justify-center items-center relative hidden md:flex md:h-[400px]">
          <img
            src="/images/header/hero/desktop/HeroImg2.png"
            alt="bg"
            className="w-full h-full xl:object-cover"
          />
          <img
            src="/images/header/hero/desktop/HeroImg3.png"
            alt=""
            className="absolute w-full h-full"
          />
          <img
            src="/images/header/hero/desktop/HeroImg1.png"
            alt="HeroImg"
            className="absolute w-64 -bottom-10 right-[10%] md:right-[15%] h-full"
          />
          <div className="absolute left-10 bottom-16 text-white flex flex-col justify-center items-start">
            <h2 className="font-bold xl:text-8xl lg:text-7xl md:text-5xl">
              Mostafa Zare
            </h2>
            <span className="xl:text-2xl ">
              Machine Learning Engineer - Green Energy Solutions
            </span>
          </div>
        </div>

        <div
          className="flex flex-col justify-center items-center w-full gap-14 relative py-8 md:py-8 sm:mt-[-40px] mt-[-25px] rounded-t-3xl"
          style={{
            backgroundImage: "url(/images/header/hero/heroImg4.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <HeroFeature
            Icon={"/images/header/hero/heroIcon1.png"}
            title={"Research and Development"}
            desc={
              "Designing and developing machine learning algorithms tailored to renewable energy systems and energy storage solutions"
            }
            className={
              "bg-[#C1F6ED] py-2 rounded-lg w-[70%] sm:w-[85%] xl:w-[55%] sm:ml-4 xl:m-0 relative flex justify-center items-center xl:left-[200px]"
            }
          />
          <HeroFeature
            Icon={"/images/header/hero/heroIcon2.png"}
            title={"Data Analytics"}
            desc={
              "Predictive analytics for renewable energy outputs Time series analysis for energy consumption and prediction"
            }
            className={
              "bg-[#C1F6ED] py-2 rounded-lg w-[70%] sm:w-[85%] xl:w-[55%] sm:ml-4 xl:m-0 relative flex justify-center items-center"
            }
          />
          <HeroFeature
            Icon={"/images/header/hero/heroIcon3.png"}
            title={"Simulation and Optimization"}
            desc={
              "Simulating thermal energy storage processes Optimizing battery thermal management for longevity and safety"
            }
            className={
              "bg-[#C1F6ED] py-2 rounded-lg w-[70%] sm:w-[85%] xl:w-[55%] sm:ml-4 xl:m-0 relative flex justify-center items-center xl:left-[-200px]"
            }
          />

          <div className="absolute bottom-[8px] w-full flex justify-center items-center z-10">
            <div className="bg-[#57848A] w-[90%] h-[3px] rounded-xl"></div>
          </div>
        </div>
      </div>
    </>
  );
}
