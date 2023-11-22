import { useEffect } from "react";
import Button from "../../common/Button";
import ExtraCard from "./ExtraCard";

const Extra = ({
  extras,
  activeStep,
  setActiveStep,
  experienceData,
  allMembers,
}) => {
  return (
    <div className="extra-container">
      <h4 className="medium">Experience extras</h4>
      <div className="cards-container">
        {extras.map((item, index) => (
          <ExtraCard
            allMembers={allMembers}
            item={item}
            key={item?.id}
            experienceImages={experienceData?.images}
          />
        ))}
      </div>
      <div className="button-group">
        <Button
          text={"Previous"}
          type={"button"}
          onClick={() => {
            window.scroll(0, 0);
            setActiveStep(activeStep - 1);
          }}
        />
        <Button
          text={"Next"}
          type={"button"}
          onClick={() => {
            window.scroll(0, 0);
            setActiveStep(activeStep + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Extra;
