import React from 'react'
import MapEmbedWithMarker from '../component/contact/Map/MapEmbedWithMarker'
import ContactWays from '../component/contact/Ways/ContactWays'



const ContactPage = () => {
  return (
   <>
   <div className='container-fluid'>
   <MapEmbedWithMarker/>
   <ContactWays/>
   </div>
   </>
  )
}

export default ContactPage