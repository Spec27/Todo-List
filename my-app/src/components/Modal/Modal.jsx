import React, { Component } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");


class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown',this.hendleKeyDown)
    };



    componentWillUnmount() { 
        console.log("Modal componentDidUpdate")
        window.removeEventListener('keydown',this.hendleKeyDown)
    };


    hendleKeyDown = e => {
        if (e.code === 'Escape') {
            console.log("нажали в ескейп потрібно закрити модалку",);
            this.props.onClose();
        }
    };

    render () {
        return createPortal (
            <div className={s.ModalBackdrop}>
                <div className={s.ModalContent}>{this.props.children}</div>
            </div>,modalRoot,
        );
    }
}


export default Modal;