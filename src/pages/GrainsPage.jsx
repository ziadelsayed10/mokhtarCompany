import React from 'react'

import SliderProducts from '../component/products/ProductsSlider/SliderProducts'
import ProductCard from '../component/products/ProductCard/ProductCard'

import SubProductCard from '../component/products/SubProduct/SubProductCard'
const GrainsPage = () => {
  return (
    <>
    <div className="container-fluid p-0">

   
   <SliderProducts/>
   <ProductCard />
   <SubProductCard/>
   </div>
    </>
  )
}
export default GrainsPage