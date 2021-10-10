import React from 'react';
import './Modal.css';
import Modal from "../Modal/Modal"

function Modal(isOpen) {

  return (
    <div className="modal-body">
        <h1>New build</h1>
        <p>Enter the commit hash which you want to build.</p>
        <input type="text" placeholder="Commit hash" />
        <button>Run build</button>
        <button onClick = {() => this.setState({isOpen: false})}>Cancel</button>
    </div>
  );
}

export default Modal;