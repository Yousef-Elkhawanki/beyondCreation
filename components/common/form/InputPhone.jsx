import { ErrorMessage, Field } from "formik";
import React, { useContext } from "react";
import { TextError } from "./TextError";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import FadeIn from "../FadeIn";

export const InputPhone = (props) => {
  const [empty, setEmpty] = useState(true);
  let [focus, setFocus] = useState(false);
  const [value, setValue] = useState();
  const { name, label, control, type, className, ...rest } = props;

  return (
    <FadeIn>
      <div className="form-input-container _eleWrap">
        <div className="form-input _eleY">
          <label
            htmlFor={name}
            className={`phone ${
              focus
                ? "focus"
                : "blur"
                ? !empty
                  ? "blur"
                  : ""
                : console.log("ssf")
            }`}
          >
            {label}{" "}
          </label>
          <PhoneInput
            international
            withCountryCallingCode
            defaultCountry="EG"
            value={value}
            onChange={setValue}
          />
          <Field
            type={type}
            name={name}
            id={name}
            className={className}
            onFocus={() => setFocus(true)}
            onBlur={(e) => {
              if (e.target.value.length > 0) {
                setFocus(focus);
                setEmpty(false);
              } else {
                setFocus(!focus);
              }
            }}
          />
        </div>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </FadeIn>
  );
};
