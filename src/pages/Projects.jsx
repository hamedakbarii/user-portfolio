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

        <p className="text-white text-[10px] md:text-sm xl:text-lg text-justify">
          An advanced classification unit was engineered to categorize dried
          fruits by analyzing their standard RGB color profiles. The
          establishment of this standard RGB range involved the utilization of a
          dataset comprising both rotten and damp dried fruits, employing the
          powerful transfer learning technique (MobileNet)alongside a CNN model.
          This classification unit effectively segregates these fruits by
          employing a somple RGB module, thereby ensuring accurate and efficient
          sorting based on their color characteristics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-[#57848A] border-b-2 pb-10">
          <div>
            <ProjectItem
              src={"/images/projects/projectImg1.jpg"}
              text={
                "Adjusting the RGB range, regulating fan speed, switching fruits, and altering the travel belt speed"
              }
            />
          </div>

          <div>
            <ProjectItem
              src={"/images/projects/projectImg2.jpg"}
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

        <div className="w-full flex flex-col justify-center items-start gap-4 border-[#57848A] border-b-2 pb-10">
          <div className="flex flex-col">
            <h2 className="text-white text-2xl">Master’s Thesis:</h2>
            <span className="text-[#C1F6ED] text-[8px] md:text-[10px]">
              Feb 2023
            </span>
          </div>
          <p className="text-white text-justify 2xl:w-full w-5/6">
            Data generation and predictive models for thermal performance of
            Direct Expansion solar-assisted heat pumps. <br /> <br /> +Employing
            the CTAB-GAN+ for data generation. <br /> <br />
            +Leveraging both Random Search and Bayesian Optimization techniques.{" "}
            <br /> <br />
            +Achieving regression metrics comparable to conventional simulation
            methods with only 50 generated data points, bypassing the need for
            full simulations. <br />
            <br />
            +Recognized with the 'Best Thesis of the Year' award in the
            Mechanical Engineering department at K. N. Toosi University of
            Technology.
          </p>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-4 border-[#57848A] border-b-2 pb-10">
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-white text-2xl">
              Enhanced SAHP thermal performance prediction: A Comparative Study
              on two-stage Data Generation Approaches
            </h2>
            <span className="text-[#C1F6ED] text-[8px] md:text-[10px]">
              April 2023
            </span>
          </div>

          <p className="text-white text-justify w-full flex justify-start items-start">
            + Comparison of TVAE and CTGAN for predicting thermal efficiency.{" "}
            <br /> <br />+ Enhanced COP prediction for solar-assisted PVT pumps
            using mixed datasets. <br /> <br />+ Fine-tuned TVAE outperforms
            one-stage models in RMSE metrics. <br />
            <br /> + TVAE excels with hyperparameter tuning, especially on small
            datasets.
          </p>

          <div className="flex flex-col justify-center items-center gap-2 bg-[#086775] p-4 w-2/3">
            <img src="/images/projects/Architecture.png" alt="Architecture" />
            <span className="bg-[#C1F6ED] w-[50%] h-[2px] rounded-lg"></span>
            <span className="text-[#C1F6ED] text-xl">Model Architecture</span>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-4 border-[#57848A] border-b-2 pb-10">
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-white text-2xl">
              ProactiveGuard (Hamrah Kargah) Predictive Maintenance System for
              Advanced Manufacturing Equipment (Baharestan Dairy Factory)
            </h2>
            <span className="text-[#C1F6ED] text-[8px] md:text-[10px]">
              Aug 2020
            </span>
          </div>

          <p className="text-white text-justify w-full flex justify-start items-start">
            + Employing more than 50 sensors in the manufacturing conveyor
            including continuous and image data. <br /> <br /> + Successfully
            decreased unexpected equipment downtime (fault detection) by almost
            25% leading to improved production efficiency and reduced
            manufacturing halts. <br />
            <br /> + My role: Develop a predictive model for various datasets
            and integrate it into the system's core to identify line defects
          </p>

          <div className="flex flex-col justify-center items-center gap-2 bg-[#086775] p-4 w-2/3">
            <img src="/images/projects/prediction.png" alt="prediction" />
            <span className="bg-[#C1F6ED] w-[50%] h-[2px] rounded-lg"></span>
            <span className="text-[#C1F6ED] text-xl">Model Accuracy</span>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-4 pb-10">
          <div className="w-full flex flex-col justify-start items-start">
            <h2 className="text-white text-2xl">
              Battery Thermal Management System
            </h2>
            <span className="text-[#C1F6ED] text-[8px] md:text-[10px]">
              Sep 2023
            </span>
          </div>

          <p className="text-white text-justify w-full flex justify-start items-start">
            + Utilizing a variety of sensors (including those for air quality,
            barometric pressure, temperature, humidity, and vibration) to
            collect data, which is then transmitted to a mobile application
            through an Arduino with a WiFi module. <br />
            <br /> + Developed a predictive model for the time-series datasets
            of the Tesla 2170 battery across various driving cycles <br />{" "}
            <br />+ Integrated the gathered data and the predictive model to
            control the activation and deactivation of cooling and heating
            circuits, all visualized within a mobile app interface.
          </p>

          <div className="flex flex-col justify-center items-center gap-2 bg-[#086775] p-4 w-2/3">
            <img src="/images/projects/bms.jpg" alt="bms" />
            <span className="bg-[#C1F6ED] w-[50%] h-[2px] rounded-lg"></span>
            <span className="text-[#C1F6ED] text-xl">BMS System</span>
          </div>
        </div>
      </div>
    </div>
  );
}
