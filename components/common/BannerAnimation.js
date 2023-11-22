import gsap from "gsap";
// import { TweenMax } from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";

export function BannerAnimation({ customClass, children, fraged }) {
  const el = useRef();
  const selector = gsap.utils.selector(el);
  useEffect(() => {
    const tl = gsap.timeline({});
    gsap.set(selector("._animWrap"), { autoAlpha: 1 }, 0);
    gsap.set(selector("._fadeIn"), { y: 40, autoAlpha: 0, color: "red" });
    tl.to(selector("._fadeIn"), {
      autoAlpha: 1,
      delay: 1,
      y: 0,
      stagger: 0.28,
      color: "#000",
    });
    const handle = () => {
      tl.to(selector("._fadeIn"), {
        autoAlpha: 1,
        delay: 1,
        y: 0,
        stagger: 0.28,
        color: "red",
      });
    };
    gsap.set(selector("._fadeIn")).addEventListener("click", handle);
  });

  if (fraged) {
    return (
      <Fragment className={customClass} ref={el}>
        {children}
      </Fragment>
    );
  } else {
    return (
      <div className={customClass} ref={el}>
        {children}
      </div>
    );
  }
}
