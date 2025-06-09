import React, { useState } from 'react';
import './WorkWay.css'
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
const WorkWay = () => {
  
  const { language, changeLanguage, translations } = useLanguage();

  return (
  
    <div className="conyainer-fluid p-5">

    
<div className="row justify-content-center">
  <div className="col-md-10">
    <div className="card cardd text-center shadow-lg">
      <div className="card-body" style={{ backgroundColor: "#12424c", color: "white" }}>
        <h3 className="mb-4 com-h1">
          {translations.work.workh}
        </h3>
        <p className="com-p">
          {translations.work.workp} . . .
        </p>
        <Link to="/about" className="btn btn-success com-button">
          {translations.work.workbtn}
        </Link>
      </div>
    </div>
  </div>
</div>

      </div>
  );
};

export default WorkWay;
