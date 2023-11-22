const { createContext, useState } = require("react");

export let LabelProvider = createContext(false);

function LabelContextProvider(props) {
  const [focus, setFocus] = useState(false);
  return (
    <LabelProvider.Provider value={{ focus, setFocus }}>
      {props.children}
    </LabelProvider.Provider>
  );
}

export default LabelContextProvider;
