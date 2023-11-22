"use client";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import FadeIn from "../FadeIn";
import { smootherRefContext } from "@/contexts/SmootherRefContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Parallax } from "swiper/modules";
// import { galleryImages } from "@/utils/dummyData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/parallax";
// import { baseUrl } from "@/utils/dataFetching";
import ReactPlayer from "react-player";
import useGsapContext from "../useGsapContext";
import { MediaGalleryPopupContext } from "@/contexts/MediaGalleryPopupContex";

const VideoPopup = ({ img, closePopup }) => {
  const el = useRef();
  const ctx = useGsapContext(el);
  const cardTL = useRef();
  const cardExpandTL = useRef();
  const {
    // activeImage,
    // setActiveImage,
    // activeAlbum,
    activeVideo,
    setActiveVideo,
  } = useContext(MediaGalleryPopupContext);
  const { smootherRef, setSmootherState } = useContext(smootherRefContext);
  const swiperRef = useRef(null);
  const [swiper, setSwiper] = useState();

  const closeEffect = () => {
    cardTL.current.reverse();
    setTimeout(function () {
      handleCardClose();
    }, 1500);

    setTimeout(function () {
      cardExpandTL.current.timeScale(4).reverse();
    }, 1000);
  };

  const expandEffect = () => {
    cardExpandTL.current.timeScale(1).play();
  };

  useEffect(() => {
    ctx.add(() => {
      gsap.set(el.current, { autoAlpha: 0 });
      // gsap.set(el.current, { scaleY: 0 })
      cardTL.current = new gsap.timeline({ paused: true })
        .fromTo(
          el.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.00001 }
        )
        .fromTo(
          ".media_popup_container i",
          { height: 0 },
          { height: "100vh", duration: 1, ease: "power3.inOut" }
        )
        .fromTo(
          ".media_popup_container .close_button",
          {
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            duration: 0.5,
            ease: "power3.inOut",
          },
          "<=0.5"
        )
        .fromTo(
          ".media_popup_wrap",
          {
            // height: "0",
            y: "25%",
            autoAlpha: 0,
          },
          {
            // height: "auto",
            y: 0,
            autoAlpha: 1,
            ease: "power3.inOut",
            duration: 0.8,
          }
        );
    });
    activeVideo != "" && cardTL.current.play();

    // !state && closeEffect()

    return () => ctx.revert();
  }, [ctx, activeVideo]);
  return (
    <div className="media_popup_container" ref={el}>
      <i />
      <div
        className="close_button no_tip"
        onClick={() => {
          cardTL?.current?.reverse();
          smootherRef?.current?.paused(false);
          setTimeout(() => {
            setActiveVideo("");
          }, 2000);
        }}
      >
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
      <div className="media_popup_wrap ">
        <div
          className={`media_popup_content pointer ${
            activeVideo == "" ? "deactivate" : ""
          }`}
        >
          {/* <Image
						src={activeImage?.url}
						className=""
						alt=""
						sizes="100vh"
						height={0}
						width={0}
					/> */}
          <ReactPlayer
            className="video-popup"
            url={activeVideo}
            controls={true}
            playing={true}
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
