import React from 'react'
// import { Col, Row ,Button} from 'react-bootstrap'
import './OtherProductCard.css'
import lgo from '.././../../assets/mdlogo2.webp'
import { useLanguage } from '../../../context/LanguageContext'
import { Link } from 'react-router-dom'

const OtherProductCard = () => {
  const { language, changeLanguage, translations } = useLanguage();

  return (
    <>
    
    <div className="row card-cont">
    <div className="see-all d-flex justify-content-evenly text-center mb-3">
          <Link to={'/grains'} className='btn btn-success my-1'>
         
          {translations.hproducts.hproductsbt1}
          
          </Link>
          <Link to={'/spices'} className='btn btn-success my-1'>
          
          {translations.hproducts.hproductsbt2}
           
          </Link>
          <Link to={'/otherproducts'} className='btn btn-success my-1'>
          
          {translations.hproducts.hproductsbt3}
           
          </Link>
          </div>
          <div className="col-12">
          <h2 className='product-head'>{translations.datesproducts.cardh}</h2>
        </div>
        <div className='col-12' >
        <div className="card-tt">

        <img className='image-card' src={lgo} alt="" />
        <ul>
            <li className='product-p'>
            {translations.datesproducts.cardp1}
               </li>
            <li className='product-p'>
            {translations.datesproducts.cardp2}
               </li>
        </ul>
        </div>
        
        </div>
    </div>
    <div className="row card-cont">
    <div className="col-12">
    <h2 className='product-head'>  {translations.chocolateproducts.cardh}</h2>
        </div>
        <div className="col-12">
        <div className="card-tt">

        {/* <p  className='product-p'>{text}</p> */}
        <img className='image-card' src={lgo} alt="" />
        <ul>
            <li className='product-p'>
            {translations.chocolateproducts.cardp1}
               </li>
            <li className='product-p'>
            {translations.chocolateproducts.cardp2}
               </li>
        </ul>
        </div>
        
        </div>
    </div>
    </>
  )
}

export default OtherProductCard