import React, { useState } from "react";
import '../../style/index.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Modal from "../Modal/Modal";



function Presentation() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Parallax pages={2} style={{ top: "0", left: "0", backgroundColor: "#4ca1af" }}>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <div className="App-wrap">
        <h1>FORMAZIONE</h1>
        <div className="App-container">
          <h2>Mohole</h2>
          <h3>Corso post diploma</h3>
          <button className="App-button custom" onClick={() => setIsOpen(true)}>scopri altro..</button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <img className="App-img" src="https://picsum.photos/600" alt="img" />
            <p>Argomenti e tecnologie studiati e applicati durante il percorso formativo: Wireframe, Layout, Photoshop, Illustrator, UI, UX, Web Design, HTML5, CSS3, Less, Sass, JavaScript, React, app ibride, Wordpress, PHP, MySql</p>
          </Modal>
        </div>
        <div className="App-container">
          <h2>ITIS E.Ferrai</h2>
          <h3>Indirizzo informatico</h3>
          <button className="App-button custom">scopri altro..</button>
        </div>
      </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={2}
        style={{ backgroundColor: "#ff6d6d" }} />

      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
      <div className="App-wrap">
        <h1>LAVORO</h1>
        <div className="App-container">
          <h2>ByteCode</h2>
          <h3>Frontend developer</h3>
          <button className="App-button custom">scopri altro..</button>
        </div>
        <div className="App-container">
          <h2>Sourcesense</h2>
          <h3>Frontend developer</h3>
          <button className="App-button custom">scopri altro..</button>
        </div>
        <div className="App-container">
          <h2>WTG</h2>
          <h3>Web designer</h3>
          <button className="App-button custom">scopri altro..</button>
        </div>
        <div className="App-container">
          <h2>On comunicazione</h2>
          <h3>Web designer</h3>
          <button className="App-button custom">scopri altro..</button>
        </div>
      </div>
      </ParallaxLayer>
   </Parallax>
  );
}

export default Presentation;
