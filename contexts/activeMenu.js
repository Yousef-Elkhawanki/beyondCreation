const { createContext, useState } = require("react");

export const ActiveMenu = createContext();

function ActiveMenuProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <ActiveMenu.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </ActiveMenu.Provider>
  );
}

export default ActiveMenuProvider;
