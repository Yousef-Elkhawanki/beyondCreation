import React, { useContext, useState } from "react";
import { SwiperArrow } from "../swiperArrow/SwiperArrow";
import { ExperienceCard } from "./ExperienceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { GsapAnimation } from "../GsapAnimation";
import FadeIn from "../FadeIn";
import { ExperienceId } from "@/contexts/handleWadgetId";
import { HandleWidget } from "@/contexts/activeWidget";
export const Experience = () => {
  const dummyData = [
    {
      title: "Wave Surfing",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ",
      subTitle: "Starting from",
      price: "AED 650",
      time: "20",
      timeType: "Min",
      image: "/1.jpg",
    },
    {
      title: "Scuba Diving",
      description: "Sed ut perspiciatis unde omnis iste natus error sit ",
      subTitle: "Starting from",
      price: "AED 1.200",
      time: "40",
      timeType: "Min",
      image: "/2.jpg",
    },
    {
      title: "Wakeboarding",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      subTitle: "Starting from",
      price: "AED 700",
      time: "25",
      timeType: "Min",
      image: "/IMG3.png",
    },
    {
      title: "Wakeboarding",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      subTitle: "Starting from",
      price: "AED 700",
      time: "30",
      timeType: "Min",
      image: "/IMG3.png",
    },
  ];
  const [swiper, setSwiper] = useState(null);
  const { experienceID, setExperienceID } = useContext(ExperienceId);
  const { setActiveWidget, activeWidget } = useContext(HandleWidget);
  console.log(experienceID);
  return (
    <FadeIn>
      <section className="experience" id="experience">
        <div className="containers">
          <div className="experience-head box _eleY">
            <div className="headers ">
              <h4>The Experiences</h4>
              <p>
                Our experiences are 100% customizable to fit your exact needs
              </p>
            </div>
            <SwiperArrow
              arrows={swiper}
              next={"expereinceNext"}
              prev={"expereincePrev"}
            />
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1.1}
            // onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => setSwiper(swiper)}
            modules={[Navigation]}
            navigation={{
              prevEl: ".expereincePrev",
              nextEl: ".expereinceNext",
            }}
            breakpoints={{
              920: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {dummyData.map((dummy, index) => (
              <SwiperSlide key={index}>
                <ExperienceCard
                  title={dummy.title}
                  subTitle={dummy.subTitle}
                  price={dummy.price}
                  time={dummy.time}
                  timeType={dummy.timeType}
                  description={dummy.description}
                  image={dummy.image}
                  onClick={() => {
                    setExperienceID("9a59ee8e-627f-4a93-a2d4-582b5c3c6010");
                    setActiveWidget(!activeWidget);
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </FadeIn>
  );
};
