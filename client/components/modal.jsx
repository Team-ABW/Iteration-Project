import React from 'react'

const Modal = ({display, handleClose}) => {

return(
<div className = "modal">
    <section className="modal-main">
        {display}   
        <button className= "button" type="button" onClick={handleClose}> Close </button>
      </section>
    </div>
)
};
export default Modal;