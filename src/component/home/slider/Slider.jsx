import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // تأكد من استيراد هذه المكتبة
import { useLanguage } from "../../../context/LanguageContext";
import "./Slider.css";

import slider1 from "../../../assets/slider_back_7-removebg-preview.webp";
import slider5 from "../../../assets/containervessel.webp";
import slider7 from "../../../assets/bigslide.webp";
import sliderback3 from "../../../assets/woodey1.webp";

function Slider() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const { translations } = useLanguage();
  const [imagesLoaded, setImagesLoaded] = useState({
    slider1: false,
    slider5: false,
    slider7: false,
  });

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.bootstrap && window.bootstrap.Carousel) {
      new window.bootstrap.Carousel("#carouselExample", {
        interval: 1000,
        ride: "carousel",
      });
    } else {
      console.error("Bootstrap لم يتم تحميله بشكل صحيح!");
    }
  }, []);

  return (
    <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        {/* الشريحة الأولى */}
        <div className="carousel-item active" style={{ backgroundImage: `url(${sliderback3})`, height: "371px" }}>
          <div className="d-flex justify-content-center">
            {!imagesLoaded.slider1 && <div className="spinner-border loading-spinner" role="status"></div>}
            <img
              className={`slide-img animate-img img-fluid ${imagesLoaded.slider1 ? "fade-in" : "hidden"}`}
              src={slider1}
              alt="First slide"
              onLoad={() => setImagesLoaded((prev) => ({ ...prev, slider1: true }))}
            />
          </div>
          <div className="text-box">
            <h3 className="slider-title animate-title">{translations.slider.fsliderH}</h3>
            <p className="slider-text animate-text">{translations.slider.fsliderP}</p>
          </div>
        </div>

        {/* شريحة بناءً على حجم الشاشة */}
        <div className="carousel-item">
          {!imagesLoaded.slider7 && <div className="spinner-border text-success" role="status"></div>}
          <img
            src={isLargeScreen ? slider7 : slider5}
            className={`d-block w-100 img-fluid ${imagesLoaded.slider7 ? "fade-in" : "hidden"}`}
            alt="Screen Slide"
            style={isLargeScreen ? { position: "absolute", top: "-250px" } : { height: "370px" }}
            onLoad={() => setImagesLoaded((prev) => ({ ...prev, slider7: true }))}
          />
          <div className="carousel-caption ship-capt">
            <h3 className="animate-title">{translations.slider.ssliderH}</h3>
            <p className="animate-text">{translations.slider.ssliderP}</p>
          </div>
        </div>
      </div>

      {/* أزرار التحكم */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>

      {/* المؤشرات */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
      </div>
    </div>
  );
}

export default Slider;

