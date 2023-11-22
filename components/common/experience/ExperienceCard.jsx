import React, { useContext } from "react";
import { ImageContainer } from "../image/ImageContainer";
import { MainBtn } from "../buttons/MainBtn";
import FadeIn from "../FadeIn";
import { GsapAnimation } from "../GsapAnimation";
import { HandleWidget } from "@/contexts/activeWidget";

export const ExperienceCard = ({
  time,
  timeType,
  description,
  image,
  title,
  subTitle,
  price,
  onClick,
}) => {
  return (
    <FadeIn>
      <div className="card-container _eleY">
        <div className="image-container">
          <ImageContainer src={image} alt="img" />
        </div>
        <div className="card-overlay">
          <div className="btn">
            <MainBtn
              content="Book Now"
              className="defaultBtn _eleY interactive_label"
              onClick={onClick}
              customClass={"_shape"}
            />
          </div>
          <div className="card-details">
            <h6 className="_eleY">{title}</h6>
            <div className="card-date ">
              <span className="_eleY">{subTitle}</span>
              <h6 className="_eleY">{price}</h6>
            </div>
          </div>
        </div>
        <div className="card-description-time ">
          <div className="time _eleY">
            <span>{time}</span>
            <span>{timeType}</span>
          </div>
          <p className="_eleY">{description}</p>
        </div>
      </div>
    </FadeIn>
  );
};
