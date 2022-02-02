import React, { useState } from "react";
import '../../style/index.css';
import Modal from "../Modal/Modal";

function PresentationItems({data}) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState();
  return (
    <div className="App-wrap">
        <h1>{data?.name}</h1>
        <div className="App-container">
          {data?.items.map((item, key) =>
            <div key={key}>
              <h2>{item?.name}</h2>
              <h3>{item?.title}</h3>
              <button className="App-button custom" onClick={() => {setIsOpen(true); setModalData(item)}}>scopri altro..</button>
            </div>
          )}
           <Modal open={isOpen} image={modalData?.img} description={modalData?.description} onClose={() => setIsOpen(false)} />
        </div>
    </div>
  );
}

export default PresentationItems;
