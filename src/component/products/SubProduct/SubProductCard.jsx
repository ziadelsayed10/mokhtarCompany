import React, { useState } from 'react';
import adsbgba from '../../../assets/adsbgba.webp';


import hasabaldy from '../../../assets/hasabaldy.webp';

import lobbaldy from '../../../assets/lobbaldy.webp';
import lobiabrzil from '../../../assets/lobiabrzil.webp';

import terms from '../../../assets/terms.webp';
import fesharzra from '../../../assets/fesharzra.webp';
import adstrki from '../../../assets/adstrki.webp';

import './SubProductCard.css';
import { useLanguage } from '../../../context/LanguageContext';

const SubProductCard = () => {
  const { language, changeLanguage, translations } = useLanguage();

    const contents = [
       
        { id: 1, title: `${translations.productsnames.products1}`, image: `${terms}` },
        { id: 2, title: `${translations.productsnames.products2}`, image: `${lobiabrzil}` },
        { id: 3, title: `${translations.productsnames.products3}`, image: `${lobbaldy}` },
        { id: 4, title: `${translations.productsnames.products4}`, image: `${hasabaldy}` },
        { id: 5, title: `${translations.productsnames.products5}`, image: `${adsbgba}` },
        { id: 6, title: `${translations.productsnames.products6}`, image: `${fesharzra}` },
        { id: 7, title: `${translations.productsnames.products7}`, image: `${adstrki}` },
      ];

 const LazyLoadImageCard = ({ title, image }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
      return (

<div
        className="card my-2"
        style={{
          width: "287px",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        {/* عرض الـ Spinner أثناء تحميل الصورة */}
        {!imageLoaded && (
          <div className="spinner-container">
            <div className="spinner-border text-success loading-spinner" role="status"></div>
          </div>
        )}
  
        <img
          className={`card-img ${imageLoaded ? "fade-in" : "hidden"}`}
          style={{ width: "auto", height: "228px", objectFit: "cover" }}
          src={image}
          onLoad={() => setImageLoaded(true)}
          alt={title}
        />
  
        <div className="card-body card-bodyy">
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    );
  };
  
  return (
    <div className="row mx-2 justify-content-center">
      {contents.map((content) => (
        <div key={content.id} className="col-auto d-flex">
          <LazyLoadImageCard title={content.title} image={content.image} />
        </div>
      ))}
    </div>
  );
};

export default SubProductCard;
