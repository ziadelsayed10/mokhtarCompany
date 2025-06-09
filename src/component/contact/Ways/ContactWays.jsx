import React from 'react'
import Lottie from "lottie-react";
import DoneAnimation from '../../../animation/done.json'
import { useForm, ValidationError } from '@formspree/react';

import './ContactWays.css';
import { useLanguage } from '../../../context/LanguageContext';
import { faClock, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const ContactWays = () => {
  const [state, handleSubmit] = useForm("mqkrvpbj");
  const { language, changeLanguage, translations } = useLanguage();

  return (
    <>
      
      <div className="row">
        
      <div className="col-12 col-md-6 left-cont p-4 rounded shadow-sm">
      <h2 className="title">{translations.contact.lefconthh} </h2>
           
          <h5 className='right-con-h5 my-5'>{translations.contact.lefconth1}</h5>
           
              <div className="d-flex align-items-center my-3">
                <span className="contact-icon" href="#">
                  <FontAwesomeIcon className='cont-ico' icon={faLocationDot} />
                </span>
                <p className="rcont-p">
                {translations.contact.lefcontp1}         
                </p>
              </div>
              <div className="d-flex align-items-center my-3">
                <span className="contact-icon" href="#">
                <FontAwesomeIcon className='cont-ico' icon={faPhone} />
                </span>
                <p className="rcont-p">
                01000001105          </p>
              </div>
             
              <div className="d-flex align-items-center my-3">
                <span className="contact-icon" href="#">
                <FontAwesomeIcon className='cont-ico' icon={faWhatsapp} />
                </span>
                <p className="rcont-p">
                +201000001105
          </p>
              </div>
              <div className="d-flex align-items-center my-3">
                <span className="contact-icon" href="#">
                <FontAwesomeIcon className='cont-ico' icon={faClock} />
                </span>
                <p className="rcont-p">  {translations.contact.lefcontp2}  </p>
              </div>
              <div className="d-flex align-items-center my-3">
                <a href="https://www.facebook.com/profile.php?id=61572613221363" style={{textDecoration:"none"}} target="_blank" rel="noreferrer">
                <span className="contact-icon" href="#">
                <FontAwesomeIcon className='cont-ico' icon={faFacebookF} />
                </span>
            
          </a>
              </div>
              <h5>{translations.contact.lefconth2}</h5>
          
             
          
        </div>
        <div className="col-12 col-lg-6">
        <div className="container-fluid">

<section className='contact-us pt-4'>
<h2 className='title'>

{translations.hcontact.hcontacth}
</h2>
<h5 className='right-con-h5 my-5'> 
{translations.hcontact.hcontactp}

    </h5>


   <div style={{ justifyContent: "space-between" }} className="flex">
  <form className="" onSubmit={handleSubmit}>

    <div className="flex">
      <label className="email-address" htmlFor="email">{translations.hcontact.hcontactlab1}</label>
      <input required type="email" name="email" id="email" />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
    </div>


    <div className="flex mm">
      <label className="email-address" htmlFor="phone">{translations.hcontact.hcontactlab2}</label>
      <input required type="number" name="phone" id="email"  style={{
            MozAppearance: "textfield",
            WebkitAppearance: "none",
          }} />
      <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
      />
    </div>

   
    <div className="flex mm">
      <label className="email-address" htmlFor="address">{translations.hcontact.hcontactlab3}</label>
      <input required type="text" name="address" id="email" />
      <ValidationError 
        prefix="Address" 
        field="address"
        errors={state.errors}
      />
    </div>

 
    <div className="flex" style={{ marginTop: "24px" }}>
      <label htmlFor="message">{translations.hcontact.hcontactlab4}</label>
      <textarea required name="message" id="message"></textarea>
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
    </div>

  
    <button className="submit" type="submit" disabled={state.submitting}>
      {state.submitting ? "Submitting..." : "Submit"}
    </button>

    {/* رسالة النجاح */}
    {state.succeeded && (
      <p 
        className="flex" 
        style={{ color: "var(--blue)", fontSize: "16px", marginTop: "1.7rem" }}
      >
        {translations.hcontact.hcontactsuc}
        <Lottie 
          loop={false} 
          style={{ height: 55 }} 
          animationData={DoneAnimation} 
        />
      </p>
    )}
  </form>

 
</div>
</section>
 </div>
          </div>
        </div>
    </>
  )
}

export default ContactWays

