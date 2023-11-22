import React, { createContext, useState } from "react";
export const ExperienceId = createContext(null);
const HandleWidgetId = ({ children }) => {
  const [experienceID, setExperienceID] = useState(null);
  return (
    <ExperienceId.Provider value={{ experienceID, setExperienceID }}>
      {children}
    </ExperienceId.Provider>
  );
};
export default HandleWidgetId;
