import React from "react";
import { Input } from "./Input";
import { InputPhone } from "./InputPhone";
import { TextArea } from "./TextArea";
import { InputFooter } from "./InputFooter";

export const FormControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "phone":
      return <InputPhone {...rest} />;
    case "inputFooter":
      return <InputFooter {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
  }
};
