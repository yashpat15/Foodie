import React from 'react';
import '../App.css'; 
import emailIcon from '../images/login.png';

const Modal = ({ children, isOpen, closeModal }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    closeModal();
    e.stopPropagation();
  };

  const handleContentClick = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentClick}>
        <div className="login-content">
          <img src={emailIcon} alt="Email Icon" className="email-icon" />  
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
