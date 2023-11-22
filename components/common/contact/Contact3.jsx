import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsPhone, BsTwitter } from "react-icons/bs";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";
import { FormContainer } from "../form/FormContainer";
import FadeIn from "../FadeIn";
export const Contact3 = ({ style, addtionStyle }) => {
  return (
    <FadeIn>
      <section className="contact-container contact-container3" id="contact">
        <div className="contact-followUs" style={{ order: addtionStyle }}>
          <div className="header">
            <span className="_eleY">Have Questions?</span>
            <h5 className="_eleY">We d love to help.</h5>
          </div>
          <div className="contact-info">
            <div className="info _eleY">
              <BsPhone />
              <span>+97154123456</span>
            </div>
            <div className="info _eleY">
              <HiOutlineMail />
              <span>info@website.ae </span>
            </div>
          </div>
          <div className="contact-social-media">
            <h6 className="_eleY">Follow Us</h6>
            <div className="social-media">
              <BsTwitter className="_eleY" />
              <BiLogoFacebook className="_eleY" />
              <BiLogoLinkedin className="_eleY" />
              <BiLogoInstagram className="_eleY" />
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="header">
            <h5 className="_eleY">Message us</h5>
            <p className="_eleY">
              We’re here to help and answer any question you might have. We look
              forward to hearing from you!
            </p>
          </div>
          <FormContainer style={style} />
        </div>
      </section>
    </FadeIn>
  );
};
