import React, { useContext } from "react";
import { ImageContainer } from "../image/ImageContainer";
import { MainBtn } from "../buttons/MainBtn";
import FadeIn from "../FadeIn";
import { ExperienceId } from "@/contexts/handleWadgetId";
import { HandleWidget } from "@/contexts/activeWidget";
export const ExperienceCard2 = ({
  time,
  cardTitle,
  cardSubTitle,
  role,
  price,
  image,
}) => {
  const { experienceID, setExperienceID } = useContext(ExperienceId);
  const { setActiveWidget, activeWidget } = useContext(HandleWidget);
  return (
    <div className="card-container2 _eleWrap">
      <FadeIn>
        <div className="card-image position-relative">
          <ImageContainer src={image} />
          <div className="card-time position-absolute">
            <span className="_eleY">{time}</span>
          </div>
        </div>
        <div className="card-discription ">
          <h4 className="_eleY">{cardTitle}</h4>
          <p className="_eleY">{cardSubTitle}</p>
          <div className="card-info d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <span className="text-uppercase _eleY">{role}</span>
              <h4 className="_eleY">{price}</h4>
            </div>
            <div className="_eleY">
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
          </div>
        </div>
      </FadeIn>
    </div>
  );
};
