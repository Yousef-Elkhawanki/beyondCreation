import React, { useContext, useEffect, useState } from "react";
import { ImageContainer } from "../image/ImageContainer";
import { MainBtn } from "../buttons/MainBtn";
import { DefaultBtn } from "../buttons/DefaultBtn";
import { FlatBtn } from "../buttons/FlatBtn";
import { BsPlay } from "react-icons/bs";
import { SwiperArrow } from "../swiperArrow/SwiperArrow";
import { Icon } from "../icon/Icon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import FadeIn from "../FadeIn";
import Magnitizer from "../Magnitizer";
import { MediaGalleryPopupContext } from "@/contexts/MediaGalleryPopupContex";
export const Banner = ({ banner_section }) => {
  // const content = banner_section.content;
  // const images = content.find((data) => data.image_desktop).image_desktop;
  // console.log(content);
  const { setActiveVideo } = useContext(MediaGalleryPopupContext);
  const images = [
    {
      img: "/BG.png",
      body: `Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium `,
      title: "Skydiving 1",
      first_button: "book now",
      second_button: "secondray link",
    },
    {
      img: "/widget/gallery2.png",
      body: ` natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam`,
      title: "Skydiving 2",
      first_button: "book now",
      second_button: "secondray link",
    },
    {
      img: "/widget/img1.png",
      body: `Sed ut error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam`,
      title: "Skydiving 3",
      first_button: "book now",
      second_button: "secondray link",
    },
    {
      img: "/widget/gallery2.png",
      body: `Sed ut error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam`,
      title: "Skydiving 4",
      first_button: "book now",
      second_button: "secondray link",
    },
  ];
  const [isPlay, setIsPlay] = useState(false);

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
  }, [slides, images]);

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
    <div className="banner">
      <div className="banner-swiper">
        {images.map(
          (image, index) =>
            index <= images.length - 1 && (
              <div
                className={`
                    ${slides === index ? "active " : ""} 
                    ${prevSlide === index ? "prev" : ""}
                     banner-img`}
                key={index}
              >
                {
                  <ImageContainer
                    src={image.img}
                    className={slides === index ? "zoom" : ""}
                  />
                }

                <div className="banner-data">
                  <FadeIn
                    setCanClick={setCanClick}
                    slideNumber={slides}
                    customClass={"w-100"}
                  >
                    <div className={`play-video `}>
                      <Magnitizer dataDest={1.5}>
                        <div
                          className={`icon`}
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
                    <>
                      <h1 className="_eleX">{image.title}</h1>
                      <p className="_eleX">{image.body}</p>
                      <div className="d-flex align-items-center justify-content-between w-100">
                        <div className="btns _eleX">
                          <MainBtn
                            content={image.first_button}
                            className={`mainBtn interactive_label`}
                            customClass={"_shape"}
                          />
                          <MainBtn
                            content={image.second_button}
                            className={`flatBtn interactive_label`}
                            customClass={"_shape"}
                          />
                        </div>
                        <div
                          className={`banner3-arrows ${
                            index < 0 ? "d-none" : ""
                          }`}
                        >
                          <SwiperArrow
                            next={`bannerNext1 ${
                              slides == images.length - 1 &&
                              "swiper-button-disabled"
                            }`}
                            prev={`bannerPrev1 ${
                              slides == 0 && "swiper-button-disabled"
                            }`}
                            nextOnClick={() => nextSlides() && canClick}
                            prevOnClick={() => prevSlides() && canClick}
                          />
                        </div>
                      </div>
                    </>
                    {/* {images.map((content) => (
                      <>
                        <h1 className="_eleX">{content.title}</h1>
                        <p className="_eleX">{content.body}</p>
                        <div className="d-flex align-items-center justify-content-between w-100">
                          <div className="btns _eleX">
                            <MainBtn
                              content={content.first_button}
                              className={`mainBtn interactive_label`}
                              customClass={"_shape"}
                            />
                            <MainBtn
                              content={content.second_button}
                              className={`flatBtn interactive_label`}
                              customClass={"_shape"}
                            />
                          </div>
                          <div
                            className={`banner3-arrows ${
                              index == 0 ? "d-none" : ""
                            }`}
                          >
                            <SwiperArrow
                              next={`bannerNext1 ${
                                slides == content.image_desktop?.length - 1 &&
                                "swiper-button-disabled"
                              }`}
                              prev={`bannerPrev1 ${
                                slides == 0 && "swiper-button-disabled"
                              }`}
                              nextOnClick={() => nextSlides() && canClick}
                              prevOnClick={() => prevSlides() && canClick}
                            />
                          </div>
                        </div>
                      </>
                    ))} */}
                  </FadeIn>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
