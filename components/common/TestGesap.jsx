import React, { useEffect } from "react";
import { GsapAnimation } from "./GsapAnimation";
import FadeIn from "./FadeIn";
import { BannerAnimation } from "./BannerAnimation";
import Magnitizer from "./Magnitizer";

export const TestGesap = () => {
  const handle = () => {
    document.querySelector("._fadeIn").style.background = "red";
  };
  useEffect(() => {});

  console.log("test");
  return (
    <Magnitizer>
      <div className="_animWrap">
        <div className="_element" data-dist="3">
          TestGesap
        </div>
        <div className="_fadeIn">TestGesap</div>
        <div className="_fadeIn">TestGesap</div>
      </div>
    </Magnitizer>
  );
};
