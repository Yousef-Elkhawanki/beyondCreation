import React from "react";
import FadeIn from "../FadeIn";

export const Thanks = ({ customeClass, text }) => {
  return (
    <FadeIn>
      <h4 className={customeClass}>{text}</h4>
    </FadeIn>
  );
};
