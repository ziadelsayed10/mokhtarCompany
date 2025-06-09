import React, { useEffect } from 'react';
// import slider4 from "../../../assets/Phaseolus_white_beans.webp";
import adsbgba from '../../../assets/adsbgba.webp';
import awadqrfa from '../../../assets/awadqrfa.webp';
import flflbrazil from '../../../assets/flflbrazil.webp';
import ganzbelhas from '../../../assets/ganzbelhas.webp';
import habhan from '../../../assets/habhan.webp';
import habhangamb from '../../../assets/habhangamb.webp';
import habhantrb from '../../../assets/habhantrb.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";
import './HomeProducts.css'
import { useLanguage } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';
const HomeProduct = () => {
  const { language, changeLanguage, translations } = useLanguage();
  const isRTL = language === "ar"; 

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);

  return (
    <>
      {/* <div className="container"> */}
      <h2 className='text-center '>{translations.hproducts.hproductsh1}</h2>
      {/* <Container>
      <Row>
      <Col md={10}> */}
      
        <Swiper
        key={isRTL ? "rtl" : "ltr"}
          className="swiper p-5"
          grabCursor={true}
          initialSlide={4}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={50}
          freeMode={false}
          loop={true}
          resistanceRatio= {0} 
  threshold={10} 
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          dir={isRTL ? "rtl" : "ltr"} 
          navigation={true}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide>
            <img src={adsbgba} alt="lobia" />
            <p className='swp-p'>{translations.productsnames.products5}</p>
          </SwiperSlide>
         
          <SwiperSlide>
            <img src={awadqrfa} alt="lobia" />
            <p className='swp-p'>{translations.sproductsnames.sproducts11}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={flflbrazil} alt="lobia" />
            <p className='swp-p'>{translations.sproductsnames.sproducts18}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={habhan} alt="lobia" />
            <p className='swp-p'>{translations.sproductsnames.sproducts10}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={ganzbelhas} alt="lobia" />
            <p className='swp-p'>{translations.sproductsnames.sproducts17}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={habhangamb} alt="lobia" />
            <p className='swp-p'>{translations.sproductsnames.sproducts9}</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={habhantrb} alt="lobia" />
            <p className='swp-p'>{translations.sproductsnames.sproducts8}</p>
          </SwiperSlide>
        </Swiper>
          <h3 className='see-all-h text-center mb-4'>
          {translations.hproducts.hproductsh2}
          </h3>
          <div className="see-all d-flex justify-content-evenly text-center mt-3">
    <Link to="/grains">
        <button className="btn btn-success my-1">
            {translations.hproducts.hproductsbt1}
        </button>
    </Link>
    <Link to="/spices">
        <button className="btn btn-success my-1">
            {translations.hproducts.hproductsbt2}
        </button>
    </Link>
    <Link to="/otherproducts">
        <button className="btn btn-success my-1">
            {translations.hproducts.hproductsbt3}
        </button>
    </Link>
</div>
    </>
  );
};

export default HomeProduct;
