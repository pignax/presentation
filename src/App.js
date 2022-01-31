import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Presentation from "./components/Presentation/Presentation";
import "./style/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/presentation" element={<Presentation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
