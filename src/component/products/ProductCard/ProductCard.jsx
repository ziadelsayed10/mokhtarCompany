import React from 'react'
// import { Button, Col, Row } from 'react-bootstrap'
import './ProductCard.css'
import hbob from '.././../../assets/grainss.webp'
import { useLanguage } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';

const ProductCard = () => {
  const { language, changeLanguage, translations } = useLanguage();

  return (

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
        <h2 className='product-head'>{translations.products.cardh}</h2>
        </div>
        <div className="col-12">
        <div className="card-tt">

        {/* <p  className='product-p'>{text}</p> */}
        <img className='image-card' src={hbob} alt="" />
        <ul>
            <li className='product-p'>
            {translations.products.cardp1}
               </li>
            <li className='product-p'>
            {translations.products.cardp2}
               </li>
        </ul>
        </div>
        
        </div>
    </div>
  )
}

export default ProductCard