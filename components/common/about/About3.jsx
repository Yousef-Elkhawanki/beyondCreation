import React from "react";
import { ImageContainer } from "../image/ImageContainer";
import { BsCheck } from "react-icons/bs";
import FadeIn from "../FadeIn";
export const About3 = ({
  aboutHeader,
  aboutSub,
  imageParent,
  imageChild,
  listHeader,
}) => {
  const description = [
    {
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat`,
    },
    {
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat`,
    },
    {
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat`,
    },
    {
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat`,
    },
  ];
  const benfits = [
    {
      benfit: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      benfit: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      benfit: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
    {
      benfit: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    },
  ];
  return (
    <FadeIn>
      <section className="about-container2 about-container3 " id="about">
        <div className="container-fluid">
          <div className="about-images">
            <div className="row gap-5 g-3 justify-content-center">
              <div className="col-md-5 position-relative">
                <div className="about-header">
                  <span className="_eleX">{aboutHeader}</span>
                  <h4 className="about-header3 _eleX">{aboutSub}</h4>
                </div>
                <div className="image position-relative ">
                  <ImageContainer
                    src={imageChild}
                    alt="image"
                    className={"_eleX"}
                  />
                  <ImageContainer
                    src={imageParent}
                    alt="image"
                    className={"_eleX"}
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="about-description">
                  {description.map((para, index) => (
                    <p key={index} className="_eleX">
                      {para.body}
                    </p>
                  ))}
                </div>
                <div className="about-list">
                  <h5 className="_eleX">{listHeader}</h5>
                  <div className="list">
                    {benfits.map((benfit, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-center gap-2 mb-2 _eleX"
                      >
                        <BsCheck />
                        {benfit.benfit}
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};
