import React from "react";
import { BiArrowToTop } from "react-icons/bi";
import FadeIn from "../FadeIn";
import Magnitizer from "../Magnitizer";

export const ToTopIcon = ({ scroll }) => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <FadeIn>
      <div
        className={`toTop _eleF ${scroll ? "scroll" : ""}`}
        onClick={() => scrollToTop()}
      >
        <BiArrowToTop />
      </div>
    </FadeIn>
  );
};
