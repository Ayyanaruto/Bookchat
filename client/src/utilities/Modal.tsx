import React from "react";
import ReactDom from "react-dom";
import "../styles/Modal.css"
import { Logo } from "../icons/icons";

import { Link } from "react-router-dom";




const loginElement: HTMLElement= document.getElementById("login") as HTMLElement;
const Modal:()=>JSX.Element=()=>{
    return ReactDom.createPortal(
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title">Login ᕙ(▀̿̿_̿̿▀̿ ̿) ᕗ</h2>
          </div>
          <div className="modal-gif">
            <Logo />
          </div>
          <div className="modal-body">
            <a href="/auth/google" className="btn btn-primary">
              <i className="fab fa-google left"></i> LOGIN
            </a>

            <Link to="/">CANCEL</Link>
          </div>
        </div>
      </div>,
      loginElement
    );
}
export default Modal;