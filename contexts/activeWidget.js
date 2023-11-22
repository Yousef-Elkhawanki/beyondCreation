import React, { createContext, useState } from "react";
export const HandleWidget = createContext(null);

const ActiveWidgetProvider = ({ children }) => {
  const [activeWidget, setActiveWidget] = useState(false);

  return (
    <HandleWidget.Provider value={{ activeWidget, setActiveWidget }}>
      {children}
    </HandleWidget.Provider>
  );
};
export default ActiveWidgetProvider;
