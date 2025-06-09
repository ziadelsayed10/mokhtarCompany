import React from 'react'

import Slider from '../component/home/slider/Slider'
import WhyUs2 from '../component/home/whyUs/WhyUs2'
import HomeProduct from '../component/home/homeProducts/HomeProducts'
import HomeContact from '../component/home/homeContact/HomeContact'
import WorkWay from '../component/home/workWay/WorkWay'


   
const HomePage = () => {
  return (
    <>
   <Slider/>
    <div className='container-fluid'>
   <WhyUs2/>
   <WorkWay/>
   <HomeProduct/>
   <HomeContact/>
    </div>
   
   
    </>
  )
}

export default HomePage