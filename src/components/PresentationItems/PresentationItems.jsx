import React from "react";
import '../../style/index.css';
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

function PresentationItems({data, isOpen, setIsOpen}) {
  return (
    <div className="App-wrap">
        <h1>{data.name}</h1>
        <div className="App-container">
          {data.items.map((item, key) =>
            <div key={key}>
              <h2>{item.name}</h2>
              <h3>{item.title}</h3>
              <Button setIsOpen={setIsOpen} />
              <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <img className="App-img" src={item.img.src} alt={item.img.alt} />
                <p>{item.description}</p>
              </Modal>
            </div>
          )}
        </div>
    </div>
  );
}

export default PresentationItems;
