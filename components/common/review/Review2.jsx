import React, { useState } from "react";

import { ReviewCard2 } from "./ReviewCard2";
import { SwiperArrow } from "../swiperArrow/SwiperArrow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import FadeIn from "../FadeIn";

export const Review2 = ({ reviewTitle, reviewSubTitle }) => {
  const [swiper, setSwiper] = useState(null);

  const dummyData = [
    {
      reviewer: "Name Here",
      reivew:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua irure dolor in reprehenderit",
      location: "Dubai, United Arab Emirates",
      image: "/reviewer.jpg",
    },
    {
      reviewer: "Name Here",
      reivew:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
      location: "London, United Kingdom",
      image: "/reviewer.jpg",
    },
    {
      reviewer: "Name Here",
      reivew:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
      location: "London, United Kingdom",
      image: "/reviewer.jpg",
    },
    {
      reviewer: "Name Here",
      reivew:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
      location: "Cairo, Egypt",
      image: "/reviewer.jpg",
    },
  ];
  return (
    <FadeIn>
      <section className="reivew-container reivew-container2" id="review">
        <div className="container-fluid">
          <div className="review-header2 d-flex flex-row justify-content-between align-items-center ">
            <div>
              <span className="_eleF">{reviewTitle}</span>
              <h4 className="_eleF">{reviewSubTitle}</h4>
            </div>
            <div className="_eleF">
              <SwiperArrow next="review-next-arrow" prev="review-prev-arrow" />
            </div>
          </div>
          <Swiper
            className="review-slider"
            spaceBetween={10}
            slidesPerView={1}
            onSwiper={(swiper) => setSwiper(swiper)}
            modules={[Navigation]}
            navigation={{
              prevEl: ".review-prev-arrow",
              nextEl: ".review-next-arrow",
            }}
            breakpoints={{
              920: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {dummyData.map((data, index) => (
              <SwiperSlide key={index}>
                <ReviewCard2
                  review={data.reivew}
                  reviewer={data.reviewer}
                  location={data.location}
                  reviewerImage={data.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </FadeIn>
  );
};
