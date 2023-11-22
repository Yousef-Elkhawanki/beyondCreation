import React, { useEffect, useState } from "react";
import { ReviewCard } from "./ReviewCard";
import { MainBtn } from "../buttons/MainBtn";
import FadeIn from "../FadeIn";

export const Review = ({ reviewTitle, reviewSubTitle }) => {
  const dummyReviews = [
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua irure dolor in reprehenderit",
      reviewer: "Client Name",
      location: "New Cairo - Egypt",
      reviewerImage: "/reviewer.jpg",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua irure",
      reviewer: "Client Name",
      location: "New Cairo - Egypt",
      reviewerImage: "/reviewer.jpg",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua irure",
      reviewer: "Client Name",
      location: "New Cairo - Egypt",
      reviewerImage: "/reviewer.jpg",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua irure",
      reviewer: "Client Name",
      location: "New Cairo - Egypt",
      reviewerImage: "/reviewer.jpg",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua irure",
      reviewer: "Client Name",
      location: "New Cairo - Egypt",
      reviewerImage: "/reviewer.jpg",
    },
  ];
  const [loading, setLoading] = useState(false);
  const [lessData, setLessData] = useState("No More Data");
  const [showLess, setShowLess] = useState("Show Less");
  const [dummyIndex, setDummyIndex] = useState(3);
  function loadingData() {
    setLoading(true);
    setTimeout(() => {
      setDummyIndex(dummyIndex + 3);
    }, 3000);
    setTimeout(() => {
      setLoading(false);
      console.log("loding");
    }, 3500);
    setTimeout(() => {
      if (dummyIndex < 0) {
        setLessData("");
      }
    }, 3500);
  }
  return (
    <FadeIn>
      <section className="reivew-container _eleWrap" id="review">
        <div className="container1">
          <div className="review-header">
            <span className="_eleX">{reviewTitle}</span>
            <h4 className="_eleX">{reviewSubTitle}</h4>
          </div>
          <div className="review-card">
            {dummyReviews.map((review, index) =>
              index < dummyIndex ? (
                <ReviewCard
                  key={index}
                  review={review.review}
                  reviewer={review.reviewer}
                  location={review.location}
                  reviewerImage={review.reviewerImage}
                />
              ) : (
                ""
              )
            )}
            {dummyIndex < 0 ? (
              ""
            ) : (
              <div className={"isLodingExperienceContainer"}>
                <div className={loading ? "isLodingExperience" : ""}></div>
              </div>
            )}
          </div>
          <div className="more-reviewer">
            {dummyReviews.length == 0 ? (
              <div className="emptyData">No Reviews Created Yet</div>
            ) : (
              ""
            )}
            {dummyIndex == dummyReviews.length ||
            dummyIndex >= dummyReviews.length - 1 ? (
              ""
            ) : (
              <MainBtn
                content={`More Reviews`}
                className="defaultBtn interactive_label"
                customClass={"_shape"}
                onClick={() => loadingData()}
              />
            )}
          </div>
        </div>
      </section>
    </FadeIn>
  );
};
