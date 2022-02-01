import React from 'react'
import ReactDom from 'react-dom'
import '../../style/index.css';


export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div className="App-overlay" />
      <div className="App-modal">
        {children}
        <button className="App-button" onClick={onClose}>Chiudi</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}