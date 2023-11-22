import React from "react";
import { AiFillStar } from "react-icons/ai";
import { ImageContainer } from "../image/ImageContainer";
import FadeIn from "../FadeIn";
export const ReviewCard = ({ review, reviewerImage, reviewer, location }) => {
  return (
    <FadeIn>
      <div className="review-card-item _eleWrap">
        <div className="reivew-rate _eleX">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className="_eleX">{review}</p>
        <div className="reviewer-details">
          <div className="reviewer-image _eleX">
            <ImageContainer src={reviewerImage} alt="reviewer" />
          </div>
          <h6 className="_eleX">{reviewer}</h6>
          <span className="_eleX">{location}</span>
        </div>
      </div>
    </FadeIn>
  );
};
