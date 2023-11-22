import React from "react";
import { AiFillStar } from "react-icons/ai";
import { ImageContainer } from "../image/ImageContainer";
import FadeIn from "../FadeIn";
export const ReviewCard2 = ({ review, reviewerImage, reviewer, location }) => {
  return (
    <FadeIn>
      <div className=" review-card-item2 bg-body border-0 h-100 _eleWrap _eleX">
        <div className="reviewer-details d-flex gap-3">
          <div className="reviewer-image m-0 _eleY">
            <ImageContainer src={reviewerImage} alt="reviewer" />
          </div>
          <div className="reviewer-info d-flex flex-column align-items-start gap-1">
            <h6 className="m-0 _eleY">{reviewer}</h6>
            <span className="_eleY">{location}</span>
            <div className="reivew-rate _eleY">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
        <p className="text-start _eleY">{review}</p>
      </div>
    </FadeIn>
  );
};
