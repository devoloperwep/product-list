import React, { createContext } from "react";

export const ContextProvider = createContext();

function MainContext({ children }) {
  return (
    <ContextProvider.Provider value={true}>{children}</ContextProvider.Provider>
  );
}

export default MainContext;
