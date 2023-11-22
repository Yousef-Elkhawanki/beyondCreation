import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Magnitizer from "../Magnitizer";
export const SwiperArrow = ({ prev, next, nextOnClick, prevOnClick }) => {
  return (
    <>
      <div className="swiperArrow">
        <div>
          <Magnitizer dataDest={1.5}>
            <div className={`prev ${prev}`} onClick={prevOnClick}>
              <BsArrowLeftShort />
            </div>
          </Magnitizer>
        </div>
        <div>
          <Magnitizer dataDest={1.5}>
            <div className={`next ${next}`} onClick={nextOnClick}>
              <BsArrowRightShort />
            </div>
          </Magnitizer>
        </div>
      </div>
    </>
  );
};
