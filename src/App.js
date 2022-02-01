import React, { useEffect, useState } from "react";
import "./style/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Presentation from "./components/Presentation/Presentation";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("http://localhost:3001/data.json");
    const responseData = await response.json();
    return setData(responseData);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/presentation"
          element={<Presentation data={data} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
