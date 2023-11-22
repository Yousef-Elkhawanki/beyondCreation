import React, { useState } from "react";
import { ImageContainer } from "../image/ImageContainer";
import Link from "next/link";
import { Form, Formik } from "formik";
import { FormControl } from "../form/FormControl";
import * as Yup from "yup";
import { MainBtn } from "../buttons/MainBtn";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { ToTopIcon } from "../toTopIcon/ToTopIcon";
import FadeIn from "../FadeIn";
import { Thanks } from "../thanks/Thanks";
export const Footer3 = () => {
  const [isValid, setIsValid] = useState(false);
  const links = [
    {
      label: "The Experiences",
      path: "#experience",
    },
    {
      label: "Customer Reviews",
      path: "#review",
    },
    {
      label: "About us",
      path: "#about",
    },
    {
      label: "Contact us",
      path: "#contact",
    },
  ];

  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email Requierd"),
  });
  const onSubmit = (values) => {
    console.log(values);
    setIsValid(true);
  };
  return (
    <FadeIn>
      <footer className="footer3 _eleWrap">
        <div className="container3">
          <div className="footer-logo">
            <div className="logo _eleY">
              <ImageContainer src="/Logo.svg" alt="logo" />
            </div>
            <p className="_eleY">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
          <div className="footer-links">
            <h6 className="_eleY">Quick Links</h6>
            <ul>
              {links.map((link, index) => (
                <li key={index} className="_eleY interactive_label">
                  <Link href={link.path} className="_shape d-inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-subscriptions">
            <h6 className="_eleY">Subscribe to our newsletter</h6>
            <div className="footer-form _eleY">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) =>
                  isValid ? (
                    <Thanks
                      customeClass={"thanksLight _eleX"}
                      text={`Thank You for Subscribe`}
                    />
                  ) : (
                    <Form>
                      <FormControl
                        type="email"
                        control="inputFooter"
                        name="email"
                        id="email"
                        className="form-control"
                        label="Email Address "
                      />
                      <MainBtn
                        content="Submit"
                        className="mainBtn _eleY interactive_label"
                        type="submit"
                        customClass={"_shape"}
                      />
                    </Form>
                  )
                }
              </Formik>
            </div>
            <p className="_eleY">
              Your email address will be kept confidential and only used to send
              our newsletter or respond to any queries.
            </p>
          </div>
          <div className="footer-copyRight">
            <h6 className="_eleY">© 2023 Company Name. Privacy · Terms</h6>
            <div className="social">
              <div className="social-media ">
                <BsTwitter className="_eleY" />
                <BiLogoFacebook className="_eleY" />
                <BiLogoLinkedin className="_eleY" />
                <BiLogoInstagram className="_eleY" />
              </div>
            </div>
          </div>
          <ToTopIcon />
        </div>
      </footer>
    </FadeIn>
  );
};
