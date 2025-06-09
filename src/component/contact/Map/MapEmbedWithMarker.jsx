import React from "react";
import { useLanguage } from "../../../context/LanguageContext";

const MapEmbedWithMarker = () => {
  const latitude = "31°01'42.2"; 
  const longitude = "31°22'59.9"; 
  const googleMapLink = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&hl=ar&output=embed`;

  const navigateToGoogleMaps = () => {
    const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(mapLink, "_blank");
  };
  const { language, changeLanguage, translations } = useLanguage();

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h3 className="map-head py-5" style={{color:"#FF9F29"}}>{translations.contact.maphead}</h3>
      <div style={{ width: "100%", height: "400px", marginBottom: "20px" }}>
        <iframe
          src={googleMapLink}
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          style={{ border: "0" }}
          title="Google Map"
          
        ></iframe>
      </div>
      <button
        onClick={navigateToGoogleMaps}
        style={{
          backgroundColor: "#f44336",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        فتح الخريطة في Google Maps
      </button>
    </div>
  );
};

export default MapEmbedWithMarker;
