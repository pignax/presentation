import React from "react";
import '../../style/index.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-logo">GP</h1>
        <Link className="App-link" to="/presentation">PRESENTAZIONE</Link>
      </header>
    </div>
  );
}

export default Home;
