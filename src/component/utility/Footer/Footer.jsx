import React from 'react';
import './Footer.css'
import { useLanguage } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  const { language, changeLanguage, translations } = useLanguage();

  return (
    <footer className="footer">
      {/* الخانة الأولى */}
      <div className="footer-column">
        <h3>{translations.footer.titlecont}</h3>
        <div className="footer-item">
<FontAwesomeIcon className='foot-ico' icon={faLocationDot} />
          <p className='footer-item-p'>{translations.footer.addres}</p>
        </div>
        <div className="footer-item">
          <FontAwesomeIcon className='foot-ico' icon={faPhone} />
          <p className='footer-item-p'>01000001105</p>
        </div>
      </div>

      {/* الخانة الثانية */}
      <div className="footer-column">
        <h3>{translations.footer.titleQuick}</h3>
        <Link to={'/'}>
          
        {translations.footer.linkhome}
          
          </Link>
          <Link to={'/about'}>
          
          {translations.footer.linkabout}
          
          </Link>
          <Link to={'/contact'}>
          
          {translations.footer.linkcontact}
          
          </Link>
          <Link to={'/grains'}>
          
          {translations.footer.linkproducts}
          
          </Link>
      </div>

      {/* الخانة الثالثة */}
      <div className="footer-column">
        <h3>{translations.footer.titleicon}</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61572613221363" target="_blank" rel="noreferrer">
            <FontAwesomeIcon className='foot-ico' icon={faFacebookF} />
          </a>
          {/* <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://messenger.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook-messenger"></i>
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
