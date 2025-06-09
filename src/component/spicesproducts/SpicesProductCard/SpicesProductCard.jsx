import React from 'react'
import './SpicesProductCard.css'
import hbob from '.././../../assets/spicess.webp'
import { useLanguage } from '../../../context/LanguageContext'
import { Link } from 'react-router-dom'
const SpicesProductCard = () => {
  const { language, changeLanguage, translations } = useLanguage();

  return (
    <div className="card-cont">
    {/* الأزرار */}
    <div className="see-all d-flex justify-content-evenly text-center mb-3">
      <Link to="/grains">
        <button className="btn btn-success my-1">{translations.hproducts.hproductsbt1}</button>
      </Link>
      <Link to="/spices">
        <button className="btn btn-success my-1">{translations.hproducts.hproductsbt2}</button>
      </Link>
      <Link to="/otherproducts">
        <button className="btn btn-success my-1">{translations.hproducts.hproductsbt3}</button>
      </Link>
    </div>

    {/* العنوان */}
    <div className="col-12">
      <h2 className="product-head">{translations.spicesproducts.cardh}</h2>
    </div>

    {/* البطاقة */}
    <div className="col-12">
      <div className="card-tt">
        {/* <p className="product-p">{text}</p> */}
        <img className="image-card" src={hbob} alt="" />
        <ul>
          <li className="product-p">{translations.spicesproducts.cardp1}</li>
          <li className="product-p">{translations.spicesproducts.cardp2}</li>
        </ul>
      </div>
    </div>
  </div>

  )
}

export default SpicesProductCard