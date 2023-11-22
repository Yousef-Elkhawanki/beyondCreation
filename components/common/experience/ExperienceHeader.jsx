import React from "react";
import FadeIn from "../FadeIn";

export const ExperienceHeader = ({ header, subHeader }) => {
  return (
    <FadeIn>
      <div className="header d-flex flex-column">
        <h3 className="_eleX">{header}</h3>
        <h6 className="_eleX">{subHeader}</h6>
      </div>
    </FadeIn>
  );
};
