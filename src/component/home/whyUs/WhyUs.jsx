// import React, { useEffect, useRef, useState } from "react";
// import co from '../../../assets/cohand.webp';
// import exp from '../../../assets/exp.webp';
// import world from '../../../assets/world.webp';
// import gawda from '../../../assets/gawda.webp';
// import longt from '../../../assets/longt.webp';
// import './WhyUs.css';
// import { useLanguage } from "../../../context/LanguageContext";


// const WhyUs = () => {
//   const sectionRefs = {
//     share: useRef(null),
//     refer: useRef(null),
//     earn: useRef(null),
//     earn2: useRef(null),
//     earn3: useRef(null),
//   };

//   const [isVisible, setIsVisible] = useState({
//     share: false,
//     refer: false,
//     earn: false,
//     earn2: false,
//     earn3: false,
//   });

//   const handleScroll = () => {
//     Object.keys(sectionRefs).forEach((key) => {
//       if (sectionRefs[key].current && sectionRefs[key].current.getBoundingClientRect().top < window.innerHeight) {
//         setIsVisible((prev) => ({ ...prev, [key]: true }));
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   const { language, changeLanguage, translations } = useLanguage();

//   const content = [
//     {
//       ref: sectionRefs.share,
//       img: exp,
//       title: `${translations.whyus.whyt1}`,
//       text: `${translations.whyus.whytxt1}`,
//     },
//     {
//       ref: sectionRefs.refer,
//       img: co,
//       title: `${translations.whyus.whyt2}`,
//       text: `${translations.whyus.whytxt2}`,
//     },
//     {
//       ref: sectionRefs.earn,
//       img: gawda,
//       title: `${translations.whyus.whyt3}`,
//       text: `${translations.whyus.whytxt3}`,

//     },
//     {
//       ref: sectionRefs.earn2,
//       img: longt,
//       title: `${translations.whyus.whyt4}`,
//       text: `${translations.whyus.whytxt4}`,
//     },
//     {
//       ref: sectionRefs.earn3,
//       img: world,
//       title: `${translations.whyus.whyt5}`,
//       text: `${translations.whyus.whytxt5}`,

//     },
//   ];

//   return (
//     <>
    
//     <div className="pt-5">
//       <h2 className="text-center py-5">{translations.whyus.whyh}</h2>
//       <div className="row">
//         {content.map((item, index) => (
//           <div key={index} className="col-md-4 text-center">
//             <div
//               ref={item.ref}
//               className={`affiliate-card ${isVisible[Object.keys(sectionRefs)[index]] ? "animate-in" : ""}`}
//             >
//               <div className="icon-wrapper mb-3">
//                 <img src={item.img} alt={item.title} className="icon" />
//               </div>
//               <h5>{item.title}</h5>
//               <p>{item.text.slice(0, 70) + "    . . ."}</p>
//             </div>
//           </div>
//         ))}
//       </div>
   
//     </div>
//     </>
//   );
// };

// export default WhyUs;
