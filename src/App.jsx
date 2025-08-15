import React, { useState } from "react";
import "./App.css";
import "./index.css";
import Cards from "./components/Cards";
import { useFetch } from "./hooks/useFetch";
import Main from "./layout/Main";
function App() {
  const { data, isPanding, error } = useFetch(
    "https://json-api.uz/api/project/dessertss/desserts"
  );
  if (isPanding) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return <Main data={data} />;
}

export default App;
