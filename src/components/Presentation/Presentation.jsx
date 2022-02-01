import React, { useState } from "react";
import '../../style/index.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import PresentationItems from "../PresentationItems/PresentationItems";

function Presentation({data}) {
  const school = data.school;
  const work = data.work;
  const [isOpen, setIsOpen] = useState(false);
  const buttonOpenModal = <button className="App-button custom" onClick={() => setIsOpen(true)}>scopri altro..</button>;

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
        <PresentationItems data={school} buttonOpenModal={buttonOpenModal} isOpen={isOpen} setIsOpen={setIsOpen} /> 
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
        <PresentationItems data={work} buttonOpenModal={buttonOpenModal} isOpen={isOpen} setIsOpen={setIsOpen} /> 
        </div>
      </ParallaxLayer>
   </Parallax>
  );
}

export default Presentation;
