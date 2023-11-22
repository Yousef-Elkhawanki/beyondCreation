import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { TextError } from "./TextError";
import FadeIn from "../FadeIn";
export const TextArea = (props) => {
  const [empty, setEmpty] = useState(true);
  const [focus, setFocus] = useState(false);
  const { name, label, control, type, className, ...rest } = props;

  return (
    <FadeIn>
      <div className="form-input-container _eleWrap">
        <div className="form-input _eleY">
          <label
            htmlFor={name}
            className={`textarea-label ${
              focus
                ? "focus"
                : "blur"
                ? !empty
                  ? "blur"
                  : ""
                : console.log("ssf")
            }`}
          >
            {label}
          </label>
          <Field
            as="textarea"
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
