import React, { useContext } from "react";
import { ImageContainer } from "../image/ImageContainer";
import { MainBtn } from "../buttons/MainBtn";
import FadeIn from "../FadeIn";
import { HandleWidget } from "@/contexts/activeWidget";
import { ExperienceId } from "@/contexts/handleWadgetId";
export const ExperienceCard3 = ({
  image,
  header,
  price,
  subTitle,
  cardDescription,
  time,
}) => {
  const { setActiveWidget, activeWidget } = useContext(HandleWidget);
  const { experienceID, setExperienceID } = useContext(ExperienceId);

  return (
    <FadeIn>
      <div className="ExperienceCard3 position-relative _eleX">
        <div className="time-clone _eleY">{time}</div>
        <div className="btn-container">
          <MainBtn
            content="Book Now"
            className="mainBtn interactive_label"
            customClass={"_shape"}
            onClick={() => {
              setExperienceID("9a59ee8e-627f-4a93-a2d4-582b5c3c6010");
              setActiveWidget(!activeWidget);
            }}
          />
        </div>
        <ImageContainer src={image} />
        <div className="overlay-content position-absolute top-0 bottom-start-0 end-0  text-white">
          <div className="price-head">
            <span className="_eleX">{subTitle}</span>
            <h4 className="_eleX">{price}</h4>
          </div>
          <div className="price-footer">
            <h4>{header}</h4>
            <div className="time _eleX">{time}</div>
          </div>
          <div className="price-footer-clone">
            <h4 className="_eleX">{header}</h4>
            <p className="_eleX">{cardDescription}</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
