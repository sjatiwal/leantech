import React, { createContext, useContext, useState } from "react";

const context = createContext();

// create context provider
const ContextProvider = ({ children }) => {
  const [clickOpacity, setClickOpacity] = useState(false);
  const data = {
    loggedIn: false,
    clickOpacity,
    setClickOpacity: setClickOpacity,
  };
  return <context.Provider value={data}>{children}</context.Provider>;
};

const useData = () => useContext(context);

export { ContextProvider, useData };
