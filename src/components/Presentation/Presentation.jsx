import React from "react";
import '../../style/index.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import PresentationItems from "../PresentationItems/PresentationItems";

function Presentation({data}) {
  const school = data?.school;
  const work = data?.work;

  return (
    <Parallax pages={2} className="App-containerParallax">
      <ParallaxLayer
        offset={0}
        speed={2.5}
        className="App-parallex"
      >
      <div className="App-wrap">
        <PresentationItems data={school} /> 
      </div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={2}
        className="App-parallexColor"
      />

      <ParallaxLayer
        offset={1}
        speed={0.5}
        className="App-parallex"
      >
        <div className="App-wrap">
        <PresentationItems data={work} /> 
        </div>
      </ParallaxLayer>
   </Parallax>
  );
}

export default Presentation;
