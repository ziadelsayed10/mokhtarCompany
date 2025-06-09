import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import DoneAnimation from '../../../animation/done.json'
import ContactAnimation from '../../../animation/contactb2a.json'
import { useLanguage } from '../../../context/LanguageContext';

import './HomeContact.css'
function HomeContact() {
  const [state, handleSubmit] = useForm("mqkrvpbj");
  const { language, changeLanguage, translations } = useLanguage();


  

  return (
    <>
    {/* <div className="container py-5"> */}

<section className='contact-us p-5 '>
<h1 className='title text-center p-5'>
{/* <span className='icon-email'></span> */}
{translations.hcontact.hcontacth}
</h1>
<p>
{translations.hcontact.hcontactp}
   </p>


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

   
    <div className="flex mmm">
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

   
    <div className="flex mmm">
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

    {/* زر الإرسال */}
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

  {/* الرسوم المتحركة */}
  <div className="animation">
    <Lottie 
      className="contactAnimation" 
      loop={true} 
      style={{ height: 455 }} 
      animationData={ContactAnimation} 
    />
  </div>
</div>

</section>
 {/* </div> */}
    </>
  )
}

export default HomeContact