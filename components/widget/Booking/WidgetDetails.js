import WidgetTabs from "./WidgetTabs";

const WidgetDetails = ({ experienceData }) => {
  return (
    <div className="widget-details">
      <div className="header">
        <p>
          <div
            dangerouslySetInnerHTML={{
              __html: experienceData?.long_description,
            }}
          />
          {/* {experienceData?.long_description} */}
        </p>
        <span className="medium">
          Difficulty:{" "}
          <span className="bold">
            {experienceData?.physical_difficuly_level}
          </span>
        </span>
      </div>
      <WidgetTabs experienceData={experienceData} />
    </div>
  );
};

export default WidgetDetails;
