import React, { useContext } from "react";
import FadeIn from "../FadeIn";

export const MainBtn = ({
  type,
  icon,
  content,
  className,
  onClick,
  customClass,
}) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      <span className={customClass}>
        {icon}
        {content}
      </span>
    </button>
  );
};
