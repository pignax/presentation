import React, { useEffect, useState } from "react";
import "./style/index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Presentation from "./components/Presentation/Presentation";

function App() {
  const locale = window.location.origin.toString();
  const URL = `${locale}/data.json`;

  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(URL);
    const responseData = await response.json();
    return setData(responseData);
  }

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/presentation"
        element={<Presentation data={data} />}
      ></Route>
    </Routes>
  );
}

export default App;
