import React from "react";
import { ImageContainer } from "../image/ImageContainer";
import { BsCheck } from "react-icons/bs";
import FadeIn from "../FadeIn";
export const About2 = ({
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
      <section className=" about-container2 _eleWrap" id="about">
        <div className="container-fluid">
          <div className="about-header">
            <span className="_eleX">{aboutHeader}</span>
            <h4 className="_eleX">{aboutSub}</h4>
          </div>
          <div className="about-images">
            <div className="row g-3">
              <div className="col-md-4 position-relative _eleY">
                <div className="image position-relative">
                  <ImageContainer src={imageChild} />
                </div>
              </div>
              <div className="col-md-8">
                <div className="image position-relative _eleY">
                  <ImageContainer src={imageParent} />
                </div>
              </div>
            </div>
            <div className="row mt-5 justify-content-between">
              <div className="col-md-6">
                <div className="about-description">
                  {description.map((para, index) => (
                    <p className="_eleY" key={index}>
                      {para.body}
                    </p>
                  ))}
                </div>
              </div>
              <div className="col-md-5">
                <div className="about-list ">
                  <h5 className="_eleY">{listHeader}</h5>
                  <div className="list">
                    {benfits.map((benfit, index) => (
                      <li
                        key={index}
                        className="d-flex align-items-center gap-2 mb-2 _eleY"
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
