import React from "react";
import ReactDom from "react-dom";

const loginElement: HTMLElement= document.getElementById("login") as HTMLElement;
const Modal:()=>JSX.Element=()=>{
    return ReactDom.createPortal(
        <div className="modal">
            <div className="modal-content">
                <h1>Modal</h1>
            </div>
        </div>,
        loginElement
    )
}
export default Modal;