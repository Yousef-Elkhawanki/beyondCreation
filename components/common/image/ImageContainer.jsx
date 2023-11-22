import Image from "next/image";
import React from "react";

export const ImageContainer = ({ src, className }) => {
  return (
    <>
      <Image src={src} fill className={` ${className}`} alt={"img"} />
    </>
  );
};
