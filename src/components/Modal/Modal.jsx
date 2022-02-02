import React from 'react'
import ReactDom from 'react-dom'
import '../../style/index.css';


export default function Modal({ open, description, image, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className="App-overlay" />
      <div className="App-modal">
        <img className="App-img" src={image?.src} alt={image?.alt} />
        <p>{description}</p>
        <button className="App-button" onClick={onClose}>Chiudi</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}