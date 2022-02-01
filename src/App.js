import React from "react";
import "./style/index.css";
import data from "./data/data.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Presentation from "./components/Presentation/Presentation";

function App() {
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
