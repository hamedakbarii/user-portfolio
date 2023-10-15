import React from "react";

function AboutIcon({ about, isMenuShow }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMenuShow ? "17" : "30"}
      height="34"
      fill="none"
      viewBox="0 0 30 34"
    >
      <path
        className={about ? "active" : ""}
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 20.232c-7.55 0-14 1.185-14 5.931 0 4.747 6.408 5.974 14 5.974 7.553 0 14-1.187 14-5.931 0-4.745-6.406-5.974-14-5.974zM15.412 16.569c3.866 0 7-3.486 7-7.785 0-4.3-3.134-7.784-7-7.784-3.865 0-7 3.484-7 7.784-.013 4.284 3.1 7.77 6.951 7.785h.05z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function EducationIcon({ education, isMenuShow }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMenuShow ? "20" : "30"}
      height="34"
      fill="none"
      viewBox="0 0 35 42"
    >
      <path
        className={education ? "active" : ""}
        stroke="#ffffff"
        strokeWidth="2"
        d="M17.747 15.005l14.652 5.743-14.787 8.003-15.048-7.943 15.183-5.803z"
      ></path>
      <path
        className={education ? "active" : ""}
        stroke="#ffffff"
        strokeWidth="2"
        d="M7.11 23.64v10.363c0 1.003.294 1.99.988 2.714 1.573 1.644 5 4.41 10.119 4.21 5.485-.214 8.118-3.507 9.077-5.1.328-.545.444-1.178.444-1.814V23.639M3.18 21.477V34.45M3.276 33.622L4.358 36H2.194l1.082-2.378z"
      ></path>
    </svg>
  );
}

function ExperienceIcon({ experience, isMenuShow }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMenuShow ? "17" : "30"}
      height="34"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        className={experience ? "active" : ""}
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.881 1.018H7.904C4.159 1.006 1.09 3.466 1.002 6.55v15.893c-.083 3.134 2.932 5.732 6.736 5.802h14.548c3.77-.126 6.74-2.693 6.714-5.802V8.845L19.88 1.018z"
        clipRule="evenodd"
      ></path>
      <path
        className={experience ? "active" : ""}
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.408 1v4.316c0 2.106 2.067 3.814 4.623 3.82h4.96M16.723 24.353H7.002M13.042 19.488H7"
      ></path>
      <path
        fill={experience ? "#000" : "#ffffff"}
        d="M11.5 11.28c2.982 0 5.5.444 5.5 2.165 0 1.72-2.534 2.15-5.5 2.15h-.203C8.404 15.575 6 15.11 6 13.429c0-1.72 2.534-2.15 5.5-2.15zm0-8.334c2.02 0 3.64 1.489 3.64 3.347 0 1.858-1.62 3.347-3.64 3.347S7.86 8.15 7.86 6.293c0-1.858 1.62-3.347 3.64-3.347z"
      ></path>
    </svg>
  );
}

function ProjectsIcon({ projects, isMenuShow }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMenuShow ? "17" : "30"}
      height="34"
      fill="none"
      viewBox="0 0 31 31"
    >
      <rect
        width="26"
        height="26"
        x="1"
        y="4"
        className={projects ? "active" : ""}
        stroke="#ffffff"
        strokeWidth="2"
        rx="4"
      ></rect>
      <path
        className={projects ? "active" : ""}
        stroke="#ffffff"
        fill="#ffffff"
        fillRule="evenodd"
        d="M16.39 21.346c1.86-1.868 3.943-4.055 5.01-5.477.93-1.24 1.362-3.206 1.339-5.087-.012-.924-.134-1.771-.328-2.431-.207-.705-.449-1.033-.574-1.127-.125-.094-.508-.234-1.242-.236-.689-.002-1.536.118-2.427.365-1.812.504-3.579 1.469-4.509 2.708-1.067 1.422-2.584 4.034-3.858 6.342a184.197 184.197 0 00-1.857 3.455l5.649 4.238a185.499 185.499 0 002.797-2.75zm-2.719 4.059s.823-.78 1.98-1.915l1.48 2.328c.063.099.108.207.133.322l.385 1.75a1 1 0 001.777.384l1.677-2.235a1 1 0 00.184-.78l-.598-3.29a1 1 0 00-.143-.363l-.938-1.456a.995.995 0 00-.342-.326c1.163-1.228 2.243-2.435 2.934-3.355 2.23-2.973 1.794-8.877.237-10.045-1.557-1.168-7.347.064-9.578 3.037-.69.92-1.547 2.295-2.4 3.755a.995.995 0 00-.409-.237l-1.66-.493A.999.999 0 008 12.45l-3.327.346a1 1 0 00-.696.395l-1.677 2.236a1 1 0 00.867 1.597l1.787-.12a.998.998 0 01.346.038l2.65.77c-.768 1.429-1.285 2.437-1.285 2.437l7.005 5.256zm4.955 2.27l1.677-2.236-.598-3.291-.938-1.457-2.35 2.141 1.558 2.45c.126.197.216.414.266.643l.385 1.75zM4.778 13.79l-1.677 2.236 1.787-.12a2 2 0 01.692.075l2.787.81 1.399-2.854-1.66-.494-3.328.347z"
        clipRule="evenodd"
      ></path>
      <path
        className={projects ? "active" : ""}
        stroke="#ffffff"
        d="M19.465 14.417c-.865 1.152-2.425 1.39-3.476.601-1.05-.788-1.26-2.352-.395-3.505.865-1.152 2.425-1.389 3.476-.6 1.05.787 1.26 2.351.395 3.504z"
      ></path>
    </svg>
  );
}

function SkillsIcon({ skills, isMenuShow }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMenuShow ? "17" : "30"}
      height="34"
      fill="none"
      viewBox="0 0 22 21"
    >
      <path
        className={skills ? "active" : ""}
        stroke="#ffffff"
        fillRule="evenodd"
        d="M20.983 2.02L18.86 0l-1.59 1.516 2.12 2.02 1.592-1.515zm-2.387 2.274l-2.121-2.02-6.099 5.809L6.78 4.656a3.222 3.222 0 00-.823-3.478A3.556 3.556 0 003.901.226C3.154.14 2.927.987 3.46 1.494c.4.38.405 1.003.005 1.384l-.673.641c-.4.381-1.053.376-1.453-.004-.532-.507-1.421-.29-1.332.42a3.26 3.26 0 001 1.958c.988.94 2.418 1.202 3.651.784l3.598 3.427-6.099 5.81 2.121 2.02 6.1-5.81 4.656 4.437a3.222 3.222 0 00.822 3.477c.577.55 1.304.867 2.055.953.747.085.974-.762.443-1.268a.949.949 0 01-.006-1.385l.673-.641c.4-.38 1.054-.376 1.454.005.532.507 1.421.29 1.331-.421a3.26 3.26 0 00-1-1.958c-.987-.94-2.417-1.201-3.65-.783l-4.658-4.436 6.1-5.81zM.83 19.197l2.709-.83-1.837-1.75-.872 2.58z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function HouseIcon({ home, isMenuShow }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMenuShow ? "17" : "30"}
      height="34"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        className={home ? "active" : ""}
        stroke="#ffffff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.81 26.572v-4.178c0-1.063.938-1.926 2.099-1.933h4.253c1.167 0 2.112.865 2.112 1.933v4.19c0 .903.787 1.64 1.773 1.661h2.835c2.827 0 5.118-2.097 5.118-4.683V11.677c-.015-1.017-.537-1.973-1.418-2.595l-9.697-7.148c-1.699-1.245-4.114-1.245-5.813 0L2.418 9.095C1.534 9.715 1.01 10.672 1 11.69v11.872c0 2.586 2.291 4.683 5.118 4.683h2.835c1.01 0 1.83-.75 1.83-1.673"
      ></path>
    </svg>
  );
}

export {
  AboutIcon,
  EducationIcon,
  ExperienceIcon,
  ProjectsIcon,
  SkillsIcon,
  HouseIcon,
};
