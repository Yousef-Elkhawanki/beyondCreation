import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const GsapAnimation = ({ fraged, children, customClass, onLoad }) => {
  gsap.registerPlugin(ScrollTrigger);
  const el = useRef();
  const gsapSelector = gsap.utils.selector(el);
  useEffect(() => {
    const tl = gsap.timeline({});
    gsap.set(gsapSelector("._eleWrap"), { autoAlpha: 1 }, 0);
    gsap.set(gsapSelector("._eleX"), { x: 40, autoAlpha: 0 });
    gsap.set(gsapSelector("._eleY"), { y: -40, autoAlpha: 0 });
    gsap.set(gsapSelector("._eleF"), { autoAlpha: 0 }, 0);
    tl && tl.progress(0).kill();
    tl.to(gsapSelector("._eleX"), {
      x: 0,
      autoAlpha: 1,
      ease: "bounce",
      stagger: 0.1,
      duration: 1,
    })
      .to(gsapSelector("._eleY"), {
        y: 0,
        autoAlpha: 1,
        ease: "bounce",
        stagger: 0.1,
        duration: 1,
      })
      .to(gsapSelector("._eleF"), {
        y: 0,
        autoAlpha: 1,
        ease: "power3.out",
        stagger: 0.1,
        duration: 1,
      });
    {
      !onLoad &&
        ScrollTrigger.create({
          trigger: el.current,
          animation: tl,
          // markers: true,
          // scrub: true,
          start: "top center",
          end: "bottom bottom",
          invalidateOnRefresh: true,
          smoothChildTiming: true,
        });
    }
  }, [onLoad]);

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
};
