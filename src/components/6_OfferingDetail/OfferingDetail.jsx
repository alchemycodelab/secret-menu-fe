import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import OfferingLogged from './OfferingLogged';
import styles from './OfferingDetail.css';
import { convertToDollars, dateConversionWithTime } from '../../services/money.js';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('body');

const OfferingDetail = ({ offering, restaurant }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;
  
  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <li className={styles.OfferingDetail}>
      <button id={offering._id} onClick={openModal}>Open Modal</button>
      <label htmlFor={offering._id}>
        <img src={offering.imageUrl} alt={offering.imageUrl} height="200" width="300"/>
        <p className={styles.dishName}>{offering.dishName}</p>
        <p className={styles.pickUp}>{dateConversionWithTime(offering.pickUpDate)}</p>
        {offering.numRemaining < 30 ? <p>{offering.numRemaining} left!</p> : null}
      </label>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Offering Modal"
      >
        <div className={styles.ModalDiv}>
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{offering.dishName}</h2>
          <img src={offering.imageUrl} alt={offering.imageUrl} height="200" width="300"/>
          <p>{convertToDollars(offering.price)}</p>
          <p>{offering.description}</p>
          <OfferingLogged offering={offering} restaurant={restaurant} closeModal={closeModal} />
        </div>      
      </Modal>
    </li>
  );
};

OfferingDetail.propTypes = {
  offering: PropTypes.object,
  restaurant: PropTypes.object
};

export default OfferingDetail;
