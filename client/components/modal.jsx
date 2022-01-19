import React from 'react'
import './styles/modal.css';

const Modal = ({display, handleModalOpen}) => {

return(
  <div id= "modal">
    <section id="modal-main">
      {display}   
      <button id="closeButton" type="button" onClick={handleModalOpen}> Close </button>
    </section>
  </div>
)
};
export default Modal;