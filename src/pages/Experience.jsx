import React from "react";

export default function Experience() {
  return (
    <div
      className="w-full  bg-[#034E40] px-5 py-4 gap-6 relative flex flex-col justify-center items-start"
      id="Experience"
    >
      <div className="flex flex-col gap-10">
        <span
          className="text-[#F2F1F9] border-b-2 border-[#57848A] w-36 pb-2 font-semibold text-xl"
          style={{ letterSpacing: ".04rem" }}
        >
          Experience
        </span>
      </div>

      <div className="flex flex-col justify-center items-start gap-8">
        <div className="flex justify-center items-start gap-4">
          <div className="flex flex-col justify-center items-center gap-2">
            <img src="/images/experience/experienceIcon1.png" alt="Icon1" />
            <div className="w-2 h-2 rounded-full bg-[#57848A]"></div>
            <div className="w-[3px] h-28 rounded-xl bg-[#57848A]"></div>
            <div className="w-2 h-2 rounded-full bg-[#57848A]"></div>
          </div>

          <div className="flex flex-col justify-center items-start h-full w-full gap-20">
            <div className="flex flex-col justify-center items-start pt-5">
              <h2 className="text-white font-semibold text-xl">Co-Founder</h2>
              <span className="text-[10px] text-[#C1F6ED]">
                Aug 2023 - Present{" "}
              </span>
            </div>

            <div className="flex flex-col justify-center items-start gap-5">
              <div className="flex flex-col justify-center items-start">
                <h2 className="text-white font-semibold text-xl">
                  Machine Learning Engineer
                </h2>
                <span className="text-[10px] text-[#C1F6ED]">
                  Aug 2023 - Present{" "}
                </span>
              </div>

              <div className="text-white text-sm text-justify-last lg:w-[700px] md:w-[540px]">
                + Design and develop state-of-the-art object detection models to
                identify and locate objects of interest within complex images{" "}
                <br /> + Collaborated with a cross-functional team to integrate
                the model into a real-time image processing application for
                quality control <br /> + Using state-of-the-art architectures
                such as YOLO, MobileNet, and VGG-16
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-6">
          <div className="flex justify-center items-center gap-4">
            <img src="/images/experience/experienceIcon2.png" alt="Icon1" />

            <div className="flex flex-col justify-center items-start">
              <h2 className="text-xl font-semibold text-white">
                K. N. Toosi University of Technology
              </h2>
              <span className="text-[#C1F6ED] text-[10px]">Part-time</span>
            </div>
          </div>

          <div className="flex justify-start items-start gap-5 w-full h-full ">
            <div className="flex flex-col justify-center items-center gap-2 pl-1.5 pt-3">
              <div className="w-2 h-2 rounded-full bg-[#57848A]"></div>
              <div className="w-[3px] h-[340px] rounded-xl bg-[#57848A]"></div>
            </div>

            <div className="flex flex-col justify-center items-start gap-4">
              <div className="flex flex-col justify-center items-start ">
                <h2 className="text-white text-2xl">Researcher</h2>
                <span className="text-[#C1F6ED] text-[10px]">
                  May 2022 - Jul 2023
                </span>
              </div>

              <p className="text-sm font-normal text-white text-justify lg:w-[700px] md:w-[540px]">
                + Modeling and Developing PVT Heat Pump Performance Predictive
                Models + Two-Stage Data Generation Approaches for generating
                premium-quality energy data + EV Battery Thermal Management : -
                Developed machine learning models to predict battery temperature
                dynamics in electric vehicles. - Developed anomaly detection
                algorithms to identify thermal system faults and malfunctions. -
                Spearheaded the development of a cutting-edge reinforcement
                learning control system for EV battery thermal management. -
                Leveraged reinforcement learning algorithms, including Proximal
                Policy Optimization (PPO) and Deep Deterministic Policy Gradient
                (DDPG), to optimize temperature regulation strategies.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-6">
          <div className="flex justify-center items-center gap-4">
            <img src="/images/experience/experienceIcon3.png" alt="Icon1" />

            <div className="flex flex-col justify-center items-start">
              <h2 className="text-xl font-semibold text-white">
                Tarnamaye Parsian
              </h2>
              <span className="text-[#C1F6ED] text-[10px]">Part-time</span>
            </div>
          </div>

          <div className="flex justify-start items-start gap-5 w-full h-full ">
            <div className="flex flex-col justify-center items-center gap-2 pl-1.5 pt-3">
              <div className="w-2 h-2 rounded-full bg-[#57848A]"></div>
              <div className="w-[3px] h-[250px] rounded-xl bg-[#57848A]"></div>
            </div>

            <div className="flex flex-col justify-center items-start gap-4">
              <div className="flex flex-col justify-center items-start ">
                <h2 className="text-white text-2xl">Data Analsty </h2>
                <span className="text-[#C1F6ED] text-[10px]">
                  Oct 2019 - Oct 2021
                </span>
              </div>

              <p className="text-sm font-normal text-white text-justify lg:w-[700px] md:w-[540px]">
                + Created and followed processes to keep data confidential +
                Created visually compelling and insightful data visualizations
                using custom Python scripts + Conducted statistical analysis to
                uncover trends, patterns, and correlations within datasets +
                Collaborated with cross-functional teams to transform data
                insights into actionable business recommendations. + Predicted
                customer churn, sales forecasts, and other key business metrics
                with high accuracy
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-6">
          <div className="flex justify-center items-center gap-4">
            <img src="/images/experience/experienceIcon3.png" alt="Icon1" />

            <div className="flex flex-col justify-center items-start">
              <h2 className="text-xl font-semibold text-white">
                Tarnamaye Parsian
              </h2>
              <span className="text-[#C1F6ED] text-[10px]">Full-time</span>
            </div>
          </div>

          <div className="flex justify-start items-start gap-5 w-full h-full ">
            <div className="flex flex-col justify-center items-center gap-2 pl-1.5 pt-3">
              <div className="w-2 h-2 rounded-full bg-[#57848A]"></div>
              <div className="w-[3px] h-[250px] rounded-xl bg-[#57848A]"></div>
            </div>

            <div className="flex flex-col justify-center items-start gap-4">
              <div className="flex flex-col justify-center items-start ">
                <h2 className="text-white text-2xl">Solar Technician </h2>
                <span className="text-[#C1F6ED] text-[10px]">
                  Jun 2019 - Sep 2019
                </span>
              </div>

              <p className="text-sm font-normal text-white text-justify lg:w-[700px] md:w-[540px]">
                + Proficiently installed solar panels on residential and
                commercial rooftops, ensuring optimal positioning for maximum
                energy capture. + Expertly connected solar panels to inverters
                and electrical systems, complying with local electrical codes
                and safety standards + Configured monitoring systems to track
                solar energy production and system performance + Generated
                reports on system performance and presented findings to clients
                and management
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center absolute -bottom-0 left-0 right-0">
        <div className="w-[90%] h-[3px] bg-[#57848A] rounded-lg"></div>
      </div>
    </div>
  );
}
