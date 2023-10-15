import React from "react";
import SkillsItem from "../components/Skills/SkillsItem";

export default function Skills() {
  return (
    <div
      className="w-full bg-[#002328] flex flex-col justify-center items-start p-6 gap-6 relative"
      id="Skills"
    >
      <h2 className="text-[#F2F1F9] font-semibold md:text-2xl">My Skills</h2>

      <div className="w-full bg-[#086775] p-4 md:p-12 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <SkillsItem
          Icon={"/images/skills/SkillsIcon1.png"}
          title={"Machine Learning"}
          feature1={
            "+Familiarity with popular neural network architectures such as CNNs, RNNs, LSTMs, and Transformer-based models."
          }
          feature2={
            "+Proficiency in statistical techniques such as regression, hypothesis testing, and Bayesian inference."
          }
          feature3={
            "+Expertise in image classification, object detection, and image segmentation."
          }
          feature4={
            "+Experience with techniques like data imputation, synthetic data generation, or using generative models in the energy context."
          }
          feature5={
            "+Understanding of key concepts like Q-learning, policy gradients, and multi-armed bandits."
          }
        />

        <SkillsItem
          Icon={"/images/skills/SkillsIcon2.png"}
          title={"Battery Systems"}
          feature1={
            "+Proficiency in using computational tools and software for thermal modeling and simulation of battery packs."
          }
          feature2={
            "+Ability to predict temperature distribution, hotspots, and thermal gradients in battery systems."
          }
          feature3={
            "+Expertise in various cooling methodologies, such as air cooling, liquid cooling, phase-change materials, and heat pipes."
          }
          feature4={
            "+Deep understanding of the principles behind predictive control, including model-based predictive control (MPC) methodologies."
          }
          feature5={
            "+Ability to develop accurate models of systems for use within predictive control frameworks, emphasizing system dynamics and predictive accuracy."
          }
        />

        <SkillsItem
          Icon={"/images/skills/SkillsIcon3.png"}
          title={"Heat Pumps"}
          feature1={
            "+Familiarity with the different types of heat pumps: air-source, ground-source (geothermal), water-source, and absorption heat pumps."
          }
          feature2={
            "+Experience in designing and simulating heat pump systems tailored to specific requirements."
          }
          feature3={
            "+Familiarity with software tools used for heat pump design and thermal load calculations."
          }
          feature4={
            "+Experience integrating heat pumps with other HVAC systems or renewable energy sources, such as solar PV or thermal systems."
          }
        />

        <SkillsItem
          Icon={"/images/skills/SkillsIcon4.png"}
          title={"Solar PV Technology"}
          feature1={
            "+Ability to design solar PV systems for various applications (rooftop, ground-mounted, off-grid, grid-tied, etc.)."
          }
          feature2={
            "+Knowledge of balance of system components: inverters, mounting structures, tracking systems, and other associated equipment."
          }
          feature3={
            "+Proficiency in using PV simulation tools such as PVsyst, SAM (System Advisor Model), HelioScope, or others."
          }
          feature4={
            "+Experience with hands-on installation of PV panels and related systems."
          }
        />
      </div>

      <div className="w-full bg-[#086775] p-6 rounded-xl flex flex-col justify-center items-start gap-6 ">
        <div className="gradient-background text-center py-1 px-10 rounded-lg">
          <span className="text-white font-semibold text-xl">
            Personal Qualities
          </span>
        </div>

        <div className="bg-[#C1F6ED] p-4 rounded-lg flex flex-col justify-center items-center gap-3 text-sm font-semibold w-full text-justify">
          +Proficient oral and written communication skills and fluent in
          English.
          <br />
          +Highly motivated with problem solving skills and research-oriented
          thinking.
          <br />
          +Analyzing situations critically and making decisions based on
          complete information.
          <br />
          +Prioritizing tasks to ensure that work is done efficiently within set
          deadlines.
          <br />
          +Efficiently working with others, both within teams and across
          departments.
        </div>
      </div>

      <div className="w-full flex justify-center items-center absolute -bottom-0 left-0 right-0">
        <div className="w-[90%] h-[3px] bg-[#57848A] rounded-lg"></div>
      </div>
    </div>
  );
}
