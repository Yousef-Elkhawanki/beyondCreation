import React from "react";
import { ImageContainer } from "../image/ImageContainer";
import { BsCheck } from "react-icons/bs";
import FadeIn from "../FadeIn";
export const About = ({ aboutHeader, aboutSub, imageParent, imageChild }) => {
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
      <section className="about-container _eleWrap" id="about">
        <div className="about-images">
          <div className="about-header">
            <span className="_eleY">{aboutHeader}</span>
            <h4 className="_eleY">{aboutSub}</h4>
          </div>
          <div className="about-image">
            <div className="image _eleY">
              <ImageContainer src={imageParent} />
            </div>
            <div className="image _eleY">
              <ImageContainer src={imageChild} />
            </div>
          </div>
        </div>
        <div className="about-details">
          <div className="about-description">
            {description.map((para, index) => (
              <p className="_eleY" key={index}>
                {para.body}
              </p>
            ))}
          </div>
          <div className="about-list">
            <div className="header">
              <h6 className="_eleY">Lorem ipsum dolor sit amet consectetur</h6>
            </div>
            <ul className="list">
              {benfits.map((benfit, index) => (
                <li className="_eleX" key={index}>
                  <BsCheck />
                  <span>{benfit.benfit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};
