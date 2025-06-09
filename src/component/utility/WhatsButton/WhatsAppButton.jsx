import React from 'react';
import './WhatsAppButton.css'
import { useLanguage } from '../../../context/LanguageContext';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const WhatsAppButton = () => {
  const phoneNumber = '+201000001105'; 

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };
  const { language, changeLanguage, translations } = useLanguage();

  return (
    <div className="whatsapp-container bg-success" onClick={handleWhatsAppClick}>

    <div className="whatsapp-button d-flex align-items-center" onClick={handleWhatsAppClick}>
       <span className="whatsapp-text">{translations.home.whats}</span>
    {/* <i class="fa-brands fa-whatsapp" style={{fontSize:"20px",margin:"3px 9px 0"}}></i> */}
    <FontAwesomeIcon icon={faWhatsapp} className='whats-ico' />  
    </div>
    </div>
  );
};

export default WhatsAppButton;
