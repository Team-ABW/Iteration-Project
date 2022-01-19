import React from 'react'
import './styles/modal.css';

const Modal = ({display, handleModalOpen}) => {

return(
<div id= "modal">
  <button id="closeButton" type="button" onClick={handleModalOpen}> Close </button>
    <section id="modal-main">
    
        {display}   
      </section>
    </div>
)
};
export default Modal;