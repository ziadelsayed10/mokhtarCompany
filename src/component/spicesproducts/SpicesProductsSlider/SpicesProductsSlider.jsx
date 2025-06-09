import React from 'react'
// import log from '../../../assets/mdlogo.webp'
import log from '../../../assets/pcover.jpg'
import './SpicesProductsSlider.css'
const SpicesProductsSlider = () => {
  return (
    <>
    {/* <div>
    
      <img className='slider-products-imgg'src={log} alt="" />
      </div>
      */}
   




   <div className="spslider" style={{backgroundImage:`url(${log})`}}></div>
    </>
  )
}

export default SpicesProductsSlider