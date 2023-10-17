import React from "react";
import EducationItem from "../components/Education/EducationItem";

export default function Education() {
  return (
    <div
      className="w-full bg-[#034E40] px-5 py-4 gap-9 relative"
      id="Education"
    >
      <div className="flex flex-col justify-center items-start gap-10 w-full">
        <span
          className="text-[#F2F1F9] border-b-2 border-[#57848A] w-36 md:w-1/2 pb-2 font-semibold text-xl ml-4 md:m-0"
          style={{ letterSpacing: ".04rem" }}
        >
          Education
        </span>

        <div className="flex flex-col w-full sm:gap-1">
          <EducationItem
            Icon={"/images/education/desktop/educatioIcon2.png"}
            title={"K. N. Toosi University of Technology"}
            year={"2019 - 2022"}
            pos={"Master’s Degree, Mechanical Engineering"}
            desc={
              "Successfully defended my Master's thesis with the perfect grade. My research focused on data generation and the development of predictive models to forecast the thermal performance of direct-expansion solar-assisted PVT heat pumps. This accomplishment was made under the guidance of my dedicated advisor, Professor Cyrus Aghanajafi, and received an evaluation by the esteemed examiners, Dr. Madjid Soltani (Adjunct Assistant Professor, University of Waterloo) and Dr. Madjid Ghasemi (Professor of Mechanical Engineering, K. N. Toosi University of Technology)."
            }
          />
          <EducationItem
            Icon={"/images/education/desktop/educatioIcon1.png"}
            title={
              "Sari Agricultural Sciences and Naturals Resources University "
            }
            year={"2015 - 2019"}
            pos={"Bachelor’s Degree, Biosystem Mechanics"}
            desc={
              "In my Bachelor's program in Biosystem Mechanics, I immersed myself in understanding the intricate workings of energy systems like heat pumps and solar PV modules. These tools have the potential to reshape how we think about energy and sustainability. On top of that, I explored the exciting world of computer-based image processing, aimed specifically at aiding agricultural practices. This mix of technology and farming showed me how innovations can directly benefit our daily lives. My dedication and enthusiasm for these subjects helped me achieve the first rank in my batch, reflecting my commitment to both learning and excellence."
            }
          />
        </div>

        <div className="w-full flex justify-center items-center absolute -bottom-[.2%] left-0 right-0">
          <div className="w-[90%] h-[3px] bg-[#57848A] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
