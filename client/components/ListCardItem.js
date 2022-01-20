import React from 'react';
import { useState } from 'react'
import './styles/modal.css';
import Modal from './modal.jsx'
import Profile from './profile.jsx'

function ListCardItem(props) {
    const [showModal, setShowModal] = useState(false);
    const [display, setDisplay] = useState();
    const showHideclassName = showModal ? 'display-block' : 'display-none'; //sets the class of the modal so the CSS will display or hide it.
    const handleModalOpen = () => {
        setDisplay(
            <div>
                <Profile props={props} />
            </div>
        )
        showModal ? setShowModal(false) : setShowModal(true); //change state of showModal to open or close the modal.
    };
    return (
        <>
            <div className='card_item'>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img
                        className='cards__item__img'
                        alt='Travel Image'
                        src={props.images}
                    // style={{width:'200px',
                    // height: 'auto'}}
                    />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.title}</h5>
                    <h5>Sex: {props.sex}</h5>
                    <h5></h5>
                </div>
                <div className='button_wrapper'>
                    <button
                        onClick={() => props.deleteHandleClick(props)}
                        className='button is-primary is-outlined'
                    >
                        Delete
                    </button>
                    <button className='button is-info is-outlined' onClick={handleModalOpen}>
                        View Profile
                    </button>

                </div>
                <div className={showHideclassName}>
                    <Modal display={display} handleModalOpen={handleModalOpen} />
                </div>
            </div>
        </>
    );
}

export default ListCardItem;
