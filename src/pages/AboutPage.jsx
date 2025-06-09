import React from 'react'
// import Header from '../component/utility/Header/Header'
import AboutContent2 from '../component/about/AboutContent2'
import SliderAbout from '../component/about/AboutSlider/SliderAbout'

const AboutPage = () => {
  return (
    <>
    {/* <Header/> */}
    <div className="container-fluid">
<SliderAbout/>
    <AboutContent2/>
   
    </div>
    </>
  )
}

export default AboutPage