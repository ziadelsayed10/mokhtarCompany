import React from 'react'
// import log from '../../../assets/mdlogo.webp'
import log from '../../../assets/pcover.jpg'

import './SliderProducts.css'
const SliderProducts = () => {
  return (
    <>
    {/* <div>
    
      <img className='slider-products-imgg'src={log} alt="" />
      </div> */}
     
      <div className="spslider" style={{backgroundImage:`url(${log})`}}></div>
   
    </>
  )
}

export default SliderProducts