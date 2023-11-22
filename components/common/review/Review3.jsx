import React from "react";
import { ReviewCard } from "./ReviewCard";
import { MainBtn } from "../buttons/MainBtn";
import { ReviewCard2 } from "./ReviewCard2";
import { SwiperArrow } from "../swiperArrow/SwiperArrow";
import { ReviewCard3 } from "./ReviewCard3";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export const Review3 = ({ reviewTitle, reviewSubTitle }) => {
  const dummyReview = [
    {
      body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
      name: "Name Here",
      location: "London, United Kingdom",
      image: "/reviewer.jpg",
    },
    {
      body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
      name: "Name Here",
      location: "London, United Kingdom",
      image: "/reviewer.jpg",
    },
    {
      body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
      name: "Name Here",
      location: "London, United Kingdom",
      image: "/reviewer.jpg",
    },
    {
      body: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
      name: "Name Here",
      location: "London, United Kingdom",
      image: "/reviewer.jpg",
    },
  ];
  return (
    <section
      className="reivew-container reivew-container2 reivew-container3"
      id="review"
    >
      <div className="review-header flex-row justify-content-between">
        <div>
          <span>{reviewTitle}</span>
          <h4>{reviewSubTitle}</h4>
        </div>
        <div className={dummyReview.length <= 3 ? "d-none" : ""}>
          <SwiperArrow next="review-next-arrow" prev="review-prev-arrow" />
        </div>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        modules={[Navigation]}
        navigation={{
          prevEl: ".review-prev-arrow",
          nextEl: ".review-next-arrow",
        }}
        breakpoints={{
          920: {
            spaceBetween: "40",
            slidesPerView: 3.2,
          },
        }}
      >
        {dummyReview.map((review, index) =>
          dummyReview.length - 1 < 0 ? (
            "Yes"
          ) : (
            <SwiperSlide key={index}>
              <ReviewCard3
                review={review.body}
                reviewer={review.name}
                location={review.location}
                reviewerImage={review.image}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};
