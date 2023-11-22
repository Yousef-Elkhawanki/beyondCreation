import React from "react";
import FadeIn from "../FadeIn";

export const Thanks = ({ customeClass }) => {
  return (
    <FadeIn>
      <h4 className={customeClass}>
        Thank You for reaching out!
        <br /> We will contact you shortly.
      </h4>
    </FadeIn>
  );
};
