import React from "react";
import ReactDom from "react-dom";



function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, .7)",
          zIndex: 1000,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#FFF",
          padding: "50px",
          zIndex: 1000,
        }}
      >
       
        <div >
        {children}
        </div>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
export default Modal;
