import { Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { FormControl } from "./FormControl";
import { MainBtn } from "../buttons/MainBtn";
import FadeIn from "../FadeIn";
import { Thanks } from "../thanks/Thanks";
export const FormContainer = ({ style }) => {
  const [isValid, setIsValid] = useState(false);
  const inputRef = useRef(null);
  const [focus, setFocus] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().min(3).required("Name Requierd"),
    email: Yup.string().email().required("Email Requierd"),
    phone: Yup.number().required("Phone Number Requierd"),
    message: Yup.string().min(3).required("Message Requierd"),
  });
  const onSubmit = (values) => {
    console.log(values);
    setIsValid(true);
  };

  return (
    <FadeIn>
      <div className="form _eleWrap">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) =>
            isValid ? (
              <Thanks customeClass={"thanksDark _eleX"} />
            ) : (
              <Form>
                {console.log(formik)}
                <FormControl
                  ref={inputRef}
                  type="text"
                  control="input"
                  name="name"
                  id="name"
                  label="Name"
                  className={style}
                />
                <FormControl
                  type="email"
                  control="input"
                  name="email"
                  id="email"
                  label="Email Address"
                  className={style}
                />
                <FormControl
                  type="number"
                  control="phone"
                  name="phone"
                  id="phone"
                  label="Phone Number"
                  className={style}
                />
                <FormControl
                  type="text"
                  control="textarea"
                  name="message"
                  id="message"
                  label="Message"
                  className={`form-control textarea`}
                />
                <div>
                  <MainBtn
                    content="Send Message"
                    className="mainBtn interactive_label _eleY"
                    type="submit"
                    customClass={"_shape"}
                  />
                </div>
              </Form>
            )
          }
        </Formik>
      </div>
    </FadeIn>
  );
};
