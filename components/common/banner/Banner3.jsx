import React, { useContext, useEffect, useState } from "react";
import { MainBtn } from "../buttons/MainBtn";
import { SwiperArrow } from "../swiperArrow/SwiperArrow";
import FadeIn from "../FadeIn";
import { BsPlay } from "react-icons/bs";
import Magnitizer from "../Magnitizer";
import { isMobileContext } from "@/contexts/isMobileContext";
import { MediaGalleryPopupContext } from "@/contexts/MediaGalleryPopupContex";
import { ImageContainer } from "../image/ImageContainer";
import { useRouter } from "next/router";
export const Banner3 = ({ banner_section }) => {
  const router = useRouter();
  const content = banner_section.content;
  // const images = content.find((data) => data.image_desktop).image_desktop;
  // console.log(images);
  const { setActiveVideo } = useContext(MediaGalleryPopupContext);
  const images = [
    {
      img: "/BG.png",
      body: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam`,
      title: "Skydiving 1",
      first_button: "book now",
      second_button: "secondray link",
    },
    {
      img: "/widget/gallery2.png",
      body: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam`,
      title: "Skydiving 2",
      first_button: "book now",
      second_button: "secondray link",
    },
    {
      img: "/widget/img1.png",
      body: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam`,
      title: "Skydiving 3",
      first_button: "book now",
      second_button: "secondray link",
    },
    {
      img: "/widget/img1.png",
      body: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam`,
      title: "Skydiving 3",
      first_button: "book now",
      second_button: "secondray link",
    },
    {
      img: "/widget/img1.png",
      body: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam`,
      title: "Skydiving 3",
      first_button: "book now",
      second_button: "secondray link",
    },
  ];

  const [slideNumber, setSlideNumber] = useState(1);

  const [slides, setSlides] = useState(0);
  const [prevSlide, setprevSlide] = useState(-1);
  const [canClick, setCanClick] = useState(false);
  const [sliderDir, setSliderDir] = useState(true);
  const [animationTrigger, setAnimationTrigger] = useState(true);
  setTimeout(() => {
    if (animationTrigger == false) {
      setAnimationTrigger(true);
    }
  }, 100);

  const nextSlides = () => {
    setCanClick(false);
    if (slides != images?.length - 1) {
      setSlideNumber(slideNumber + 1);
      setAnimationTrigger(false);
      setSlides(slides + 1);
      setprevSlide(prevSlide + 1);
    }
  };
  const prevSlides = () => {
    setCanClick(false);
    if (slides != 0) {
      setSlideNumber(slideNumber - 1);
      setAnimationTrigger(false);
      setSlides(slides - 1);
      setprevSlide(prevSlide - 1);
    }
  };
  const resetSlider = () => {
    setSlides(0);
    setprevSlide(-1);
    setSlideNumber(1);
    setAnimationTrigger(false);
  };
  useEffect(() => {
    if (slides == 0) {
      setSliderDir(true);
    } else if (slides == images?.length - 1) {
      setSliderDir(false);
    }
  }, [sliderDir, images]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (sliderDir) {
        nextSlides();
      } else {
        prevSlides();
      }
    }, 10150);
    return () => clearTimeout(timeOut);
  }, [sliderDir, slides]);

  return (
    <div className="banner3 _eleWrap">
      <div className="banner-swiper">
        {images?.map(
          (img, index) =>
            index <= images.length - 1 && (
              <div
                className={`
                  ${slides === index ? "active" : ""}
                  ${prevSlide === index ? "prev" : ""}
                   banner-img`}
                key={index}
              >
                {
                  <ImageContainer
                    src={img.img}
                    className={slides === index ? "zoom " : ""}
                  />
                }
                <FadeIn setCanClick={setCanClick} slideNumber={slides}>
                  <div className="banner-data">
                    <h1 className="_eleY">{img.title}</h1>
                    <p className="_eleY">{img.body}</p>
                    <div className="btns _eleY">
                      <MainBtn
                        content={img.first_button}
                        className={"mainBtn interactive_label "}
                        customClass={"_shape"}
                        onClick={() => router.push("#experience")}
                      />
                      <MainBtn
                        content={img.second_button}
                        className={"flatBtn interactive_label "}
                        customClass={"_shape"}
                      />
                    </div>
                  </div>
                  {/* {images.map((content) => (
                    <div className="banner-data">
                      <h1 className="_eleY">{content.title}</h1>
                      <p className="_eleY">{content.body}</p>
                      <div className="btns _eleY">
                        <MainBtn
                          content={content.first_button}
                          className={"mainBtn interactive_label "}
                          customClass={"_shape"}
                        />
                        <MainBtn
                          content={content.second_button}
                          className={"flatBtn interactive_label "}
                          customClass={"_shape"}
                        />
                      </div>
                    </div>
                  ))} */}
                </FadeIn>
              </div>
            )
        )}
        <div className="swiper-pagination-bullets">
          <div className="play-video">
            <Magnitizer dataDest={1.5}>
              <div
                className={`icon `}
                onClick={() =>
                  setActiveVideo(
                    "https://www.youtube.com/watch?v=157NopQ-chU&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=4"
                  )
                }
              >
                <BsPlay />
              </div>
            </Magnitizer>
            <span>Play Video</span>
          </div>
          <div className="bullets">
            {images?.map(
              (img, index) =>
                index <= images.length - 1 && (
                  <div
                    className={`
                  bullet
                  ${slides === index ? "active" : ""} ${
                      images.length - 1 < 1 ? "d-none" : ""
                    }
                  `}
                    key={index}
                  ></div>
                )
            )}
          </div>
          <div className={`banner3-arrows `}>
            <div className={images.length - 1 < 1 ? "d-none" : ""}>
              <SwiperArrow
                next={"bannerNext1"}
                prev={"bannerPrev1"}
                nextOnClick={nextSlides}
                prevOnClick={prevSlides}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
