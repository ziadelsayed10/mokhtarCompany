import React from 'react'
import SpicesProductsSlider from '../component/spicesproducts/SpicesProductsSlider/SpicesProductsSlider'
import SpicesProductCard from '../component/spicesproducts/SpicesProductCard/SpicesProductCard'
import SpicesSubProduct from '../component/spicesproducts/SpicesSubProduct/SpicesSubProduct'


const SpicesPage = () => {
  return (
    <>
    <div className="container-fluid p-0">

   
   <SpicesProductsSlider/>
  <SpicesProductCard/>
   <SpicesSubProduct/>
   </div>
    </>
  )
}
export default SpicesPage