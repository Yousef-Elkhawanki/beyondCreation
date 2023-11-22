import React, { useEffect, useRef } from "react";
import useGsapContext from "../useGsapContext";
import gsap from "gsap";

export const GsapPopup = () => {
  const el = useRef();
  const ctx = useGsapContext(el);
  const cardTl = useRef();
  const cardExpandTl = useRef();
  useEffect(() => {
    ctx.add(() => {
      gsap.set(el.current, { autoAlpha: 0 });
      (cardTl.current = new gsap.timeline({ paused: true })).fromTo(
        el.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.0001 }
      );
    });
    // activeVideo != "" && cardTL.current.play();
    return () => ctx.revert();
  }, [ctx, ]);
  return (
    <div className="media_popup" ref={el}>
      <div className="close_btn">
        <svg
          width="10"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7656 15.3125C15.4844 15.5938 14.9688 15.5938 14.6875 15.3125L8.5 9.07812L2.26562 15.3125C1.98438 15.5938 1.46875 15.5938 1.1875 15.3125C0.90625 15.0312 0.90625 14.5156 1.1875 14.2344L7.42188 8L1.1875 1.8125C0.90625 1.53125 0.90625 1.01562 1.1875 0.734375C1.46875 0.453125 1.98438 0.453125 2.26562 0.734375L8.5 6.96875L14.6875 0.734375C14.9688 0.453125 15.4844 0.453125 15.7656 0.734375C16.0469 1.01562 16.0469 1.53125 15.7656 1.8125L9.53125 8L15.7656 14.2344C16.0469 14.5156 16.0469 15.0312 15.7656 15.3125Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
