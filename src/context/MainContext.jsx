import React, { createContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const ContextProvider = createContext();

function MainContext({ children }) {
  const { data, isPanding, error } = useFetch(
    "https://json-api.uz/api/project/dessertss/desserts"
  );
  return (
    <ContextProvider.Provider value={{ data, isPanding, error }}>
      {children}
    </ContextProvider.Provider>
  );
  data;
}

export default MainContext;
