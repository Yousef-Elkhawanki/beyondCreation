import React from "react";
import { ExperienceHeader } from "./ExperienceHeader";
import { ExperienceCard3 } from "./ExperienceCard3";
import { SwiperArrow } from "../swiperArrow/SwiperArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export const Experience3 = () => {
  const dummyData = [
    {
      title: "Wave Surfing",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ",
      subTitle: "Starting from",
      price: "AED 650",
      time: "20",
      timeType: "Minutes",
      image: "/1.jpg",
    },
    {
      title: "Scuba Diving",
      description: "Sed ut perspiciatis unde omnis iste natus error sit ",
      subTitle: "Starting from",
      price: "AED 1.200",
      time: "40",
      timeType: "Minutes",
      image: "/2.jpg",
    },
    {
      title: "Wakeboarding",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      subTitle: "Starting from",
      price: "AED 700",
      time: "25",
      timeType: "Minutes",
      image: "/IMG3.png",
    },
    {
      title: "Wakeboarding",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
      subTitle: "Starting from",
      price: "AED 700",
      time: "30",
      timeType: "Minutes",
      image: "/IMG3.png",
    },
  ];
  console.log(dummyData.length);
  return (
    <section className="experience3" id="experience">
      <div className="experienceHeader d-flex align-items-center justify-content-between ">
        <ExperienceHeader
          header="The Experiences"
          subHeader="Our experiences are 100% customizable to fit your exact needs"
        />

        <div className={dummyData.length <= 3 ? "d-none" : ""}>
          <SwiperArrow next="ExperienceNext" prev="ExperiencePrev" />
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.05}
        onSlideChange={() => console.log("slide change")}
        modules={[Navigation]}
        navigation={{
          prevEl: ".ExperiencePrev",
          nextEl: ".ExperienceNext",
        }}
        breakpoints={{
          920: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {dummyData.map((data, index) => {
          return dummyData.length == 0 ? (
            <div className="emptyData text-center">
              No Experiences Created Yet
            </div>
          ) : (
            <SwiperSlide>
              <ExperienceCard3
                image={data.image}
                price={data.price}
                subTitle="from Per Person"
                header={data.title}
                cardDescription={data.description}
                time={data.time + " " + data.timeType}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
