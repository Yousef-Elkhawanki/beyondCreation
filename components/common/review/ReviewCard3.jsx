import React from "react";
import { AiFillStar } from "react-icons/ai";
import { ImageContainer } from "../image/ImageContainer";
import FadeIn from "../FadeIn";
export const ReviewCard3 = ({ review, reviewerImage, reviewer, location }) => {
  return (
    <FadeIn>
      <div className="review-card-item review-card-item2  review-card-item3  border-0">
        <div className="reviewer-details  text-center gap-3">
          <div className="reviewer-image m-auto mb-3">
            <ImageContainer
              src={reviewerImage}
              alt="reviewer"
              className={"_eleY"}
            />
          </div>
          <div className="reviewer-info d-flex align-items-center flex-column align-items-start gap-1">
            <h6 className="m-0 _eleY">{reviewer}</h6>
            <span className="_eleY">{location}</span>
            <div className="reivew-rate">
              <AiFillStar className="_eleY" />
              <AiFillStar className="_eleY" />
              <AiFillStar className="_eleY" />
              <AiFillStar className="_eleY" />
              <AiFillStar className="_eleY" />
            </div>
          </div>
        </div>
        <p className="text-center _eleY">{review}</p>
      </div>
    </FadeIn>
  );
};
