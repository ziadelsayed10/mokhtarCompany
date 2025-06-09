


import React, { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import './SpicesSubProduct.css';

import alhlemon from '../../../assets/alhlemon.webp';
import babrnaem from '../../../assets/babrnaem.webp';
import shatanaem from '../../../assets/shatanaem.webp';
import warakgwafa from '../../../assets/warakgwafa.webp';
import shtaqrn from '../../../assets/shtaqrn.webp';
import qrnflmad from '../../../assets/qrnflmad.webp';
import korkmhas from '../../../assets/korkmhas.webp';
import habhantrb from '../../../assets/habhantrb.webp';
import habhangamb from '../../../assets/habhangamb.webp';
import habhan from '../../../assets/habhan.webp';
import awadqrfa from '../../../assets/awadqrfa.webp';
import zbeb from '../../../assets/zbeb.webp';
import warklori from '../../../assets/warklori.webp';
import kzbra from '../../../assets/kzbra.webp';
import kzbrabldy from '../../../assets/kzbrabldy.webp';
import helbabaldy from '../../../assets/helbabaldy.webp';
import kamonhas from '../../../assets/kamonhas.webp';
import ganzbelhas from '../../../assets/ganzbelhas.webp';
import flflbrazil from '../../../assets/flflbrazil.webp';

const SpicesSubProduct = () => {
  const { translations } = useLanguage();

  const contents = [
    { id: 1, title: translations.sproductsnames.sproducts1, image: alhlemon },
    { id: 2, title: translations.sproductsnames.sproducts2, image: babrnaem },
    { id: 3, title: translations.sproductsnames.sproducts3, image: shatanaem },
    { id: 4, title: translations.sproductsnames.sproducts4, image: warakgwafa },
    { id: 5, title: translations.sproductsnames.sproducts5, image: shtaqrn },
    { id: 6, title: translations.sproductsnames.sproducts6, image: qrnflmad },
    { id: 7, title: translations.sproductsnames.sproducts7, image: korkmhas },
    { id: 8, title: translations.sproductsnames.sproducts8, image: habhantrb },
    { id: 9, title: translations.sproductsnames.sproducts9, image: habhangamb },
    { id: 10, title: translations.sproductsnames.sproducts10, image: habhan },
    { id: 11, title: translations.sproductsnames.sproducts11, image: awadqrfa },
    { id: 12, title: translations.sproductsnames.sproducts12, image: zbeb },
    { id: 13, title: translations.sproductsnames.sproducts13, image: warklori },
    { id: 14, title: translations.sproductsnames.sproducts14, image: kzbra },
    { id: 15, title: translations.sproductsnames.sproducts15, image: kzbrabldy },
    { id: 16, title: translations.sproductsnames.sproducts16, image: helbabaldy },
    { id: 17, title: translations.sproductsnames.sproducts17, image: ganzbelhas },
    { id: 18, title: translations.sproductsnames.sproducts18, image: flflbrazil },
    { id: 19, title: translations.sproductsnames.sproducts19, image: kamonhas },
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



export default SpicesSubProduct;
