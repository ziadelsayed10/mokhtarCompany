// import React, { useEffect, useRef, useState } from "react";
// import co from '../../assets/cohand.webp'
// import exp from '../../assets/exp.webp'
// import world from '../../assets/world.webp'
// import gawda from '../../assets/gawda.webp'
// import longt from '../../assets/longt.webp'
// import './AboutContent.css'
// import { useLanguage } from "../../context/LanguageContext";
// const AboutContent = () => {
//     const shareRef = useRef(null);
//     const referRef = useRef(null);
//     const earnRef = useRef(null);
//     const earnRef2 = useRef(null);
//     const earnRef3 = useRef(null);
//   const [isVisible, setIsVisible] = useState({
//     share: false,
//     refer: false,
//     earn: false,
//     earn2: false,
//     earn3: false,
//   });

//   const handleScroll = () => {
   
    
//     if (shareRef.current && shareRef.current.getBoundingClientRect().top  < window.innerHeight) {
//       setIsVisible((prev) => ({ ...prev, share: true }));
//     }
//     if (referRef.current && referRef.current.getBoundingClientRect().top  < window.innerHeight) {
//       setIsVisible((prev) => ({ ...prev, refer: true }));
//     }
//     if (earnRef.current && earnRef.current.getBoundingClientRect().top  < window.innerHeight) {
//       setIsVisible((prev) => ({ ...prev, earn: true }));
//     }
//     if (earnRef2.current && earnRef2.current.getBoundingClientRect().top  < window.innerHeight) {
//       setIsVisible((prev) => ({ ...prev, earn2: true }));
//     }
//     if (earnRef3.current && earnRef3.current.getBoundingClientRect().top  < window.innerHeight) {
//       setIsVisible((prev) => ({ ...prev, earn3: true }));
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
  
//   const { language, changeLanguage, translations } = useLanguage();
//   return (
//    <>
//     <div className="row d-flex align-items-center">
//   <div className="col-12 col-md-6">
//     <div className="content py-5"> 
//     <h3 className='about-head py-5'>{translations.about.leftcontH}</h3>
//     <p className ="content-p">
//     {translations.about.leftcontP1}
//     </p>
//     <p className ="content-p">
//     {translations.about.leftcontP2}

//     </p>
    
//     <p className ="content-p">
//     {translations.about.leftcontP3}
   
//     </p>
//     <p className ="content-p">
//     {translations.about.leftcontP4}

//       </p>
//    </div>
//     </div>
//     <div className="col-12 col-md-6">
//     <div className="p-5 two-why">
//       <h2 className="text-center py-5">{translations.about.righrcontH}</h2>
//       <div className="row why-col">
//         <div className=" text-center">
//           <div
//             ref={shareRef}
//             id="share-card"
//             className={`afiliate-card ${isVisible.share ? "animate-in" : ""}`}
//           >
//             <div className="icon-wrapper mb-3">
//               <img src={exp} alt="Share Link" className="icon" />
//             </div>
//             <h5>{translations.whyus.whyt1}</h5>
//             <p>{translations.whyus.whytxt1}</p>
//           </div>
//         </div>
//         <div className=" text-center">
//           <div
//             ref={referRef}
//             id="refer-card"
//             className={`afiliate-card ${isVisible.refer ? "animate-in" : ""}`}
//           >
//             <div className="icon-wrapper mb-3">
//               <img
//                 src={co}
//                 alt="Referring Subscribers"
//                 className="icon"
//               />
//             </div>
//             <h5>{translations.whyus.whyt2}</h5>
//             <p className ="content-p">{translations.whyus.whytxt2}</p>
//           </div>
//         </div>
      
       
//       </div>
     
//     </div>
//     </div>
//    </div>
//    <div className="row">
//    <div className="col-md-11 third-why">
            
//         <div className="col-md-4 text-center">
//           <div
//           ref={earnRef}
//             id="earn-card"
//             className={`afiliate-card ${isVisible.earn ? "animate-in" : ""}`}
//           >
//             <div className="icon-wrapper mb-3">
//               <img src={gawda} alt="Get Your Earning" className="icon" />
//             </div>
//             <h5>{translations.whyus.whyt3}</h5>
//             <p>{translations.whyus.whytxt3}</p>
//           </div>
//         </div>
//         <div className="col-md-4 text-center">
//           <div
//           ref={earnRef2}
//             id="earn-card"
//             className={`afiliate-card ${isVisible.earn2 ? "animate-in" : ""}`}
//           >
//             <div className="icon-wrapper mb-3">
//               <img src={longt} alt="Get Your Earning" className="icon" />
//             </div>
//             <h5>{translations.whyus.whyt4}</h5>
//             <p>{translations.whyus.whytxt4}</p>
//           </div>
//         </div>
//         <div className="col-md-4 text-center">
//           <div
//           ref={earnRef3}
//             id="earn-card"
//             className={`afiliate-card ${isVisible.earn3 ? "animate-in" : ""}`}
//           >
//             <div className="icon-wrapper mb-3">
//               <img src={world} alt="Get Your Earning" className="icon" />
//             </div>
//             <h5>{translations.whyus.whyt5}</h5>
//             <p>{translations.whyus.whytxt5}</p>
//           </div>
//         </div>
//         </div>
//    </div>
  
//    </>
//   )
// }

// export default AboutContent