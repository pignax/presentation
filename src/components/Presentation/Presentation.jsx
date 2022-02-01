import React, { useState } from "react";
import '../../style/index.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Modal from "../Modal/Modal";

function Presentation({data}) {
  const school = data.school;
  const work = data.work;
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
        <h1>{school.name}</h1>
        <div className="App-container">
          {school.courses.map((course, key) =>
            <div key={key}>
              <h2>{course.name}</h2>
              <h3>{course.title}</h3>
              <button className="App-button custom" onClick={() => setIsOpen(true)}>scopri altro..</button>
              <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <img className="App-img" src={course.img.src} alt={course.img.alt} />
                <p>{course.description}</p>
              </Modal>
            </div>
          )}
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
        <div className="App-container">
        <h1>{work.name}</h1>
          {work.experiences.map((work, key) =>
            <div key={key}>
              <h2>{work.name}</h2>
              <h3>{work.title}</h3>
              <button className="App-button custom" onClick={() => setIsOpen(true)}>scopri altro..</button>
              <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <img className="App-img" src={work.img.src} alt={work.img.alt} />
                <p>{work.description}</p>
              </Modal>
            </div>
          )}
        </div>
      </ParallaxLayer>
   </Parallax>
  );
}

export default Presentation;
