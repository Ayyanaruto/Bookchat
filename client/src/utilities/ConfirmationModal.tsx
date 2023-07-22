import React from "react";
import ReactDOM from "react-dom";
import "../styles/Modal2.css";

const ConfirmationModal = (props: any) => {
  const loginElement: HTMLElement = document.getElementById(
    "login"
  ) as HTMLElement;
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">
        <h4>{props.title}</h4>
        <p>{props.subtitle}</p>
        <div className="modal-footer">
          <button className="btn-flat" onClick={props.onCancel}>
            Cancel
          </button>
          <button className="btn-flat" onClick={props.onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>,
    loginElement
  );
};

export default ConfirmationModal;
