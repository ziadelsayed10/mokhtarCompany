import { motion, scale } from "framer-motion";

import co from '../../assets/cohand.webp'
import exp from '../../assets/exp.webp'
import world from '../../assets/world.webp'
import gawda from '../../assets/gawda.webp'
import longt from '../../assets/longt.webp'
import './AboutContent.css'
import { useLanguage } from "../../context/LanguageContext";
const AboutContent2 = () => {
    
     
  const { language, changeLanguage, translations } = useLanguage();
  return (
   <>
    <div className="row d-flex align-items-center">
  <div className="col-12 col-md-6">
    <div className="content py-5"> 
    <h3 className='about-head py-5'>{translations.about.leftcontH}</h3>
    <p className ="content-p">
    {translations.about.leftcontP1}
    </p>
    <p className ="content-p">
    {translations.about.leftcontP2}

    </p>
    
    <p className ="content-p">
    {translations.about.leftcontP3}
   
    </p>
    <p className ="content-p">
    {translations.about.leftcontP4}

      </p>
   </div>
    </div>
    <div className="col-12 col-md-6">
    <div className="p-5 two-why">
      <h2 className="text-center py-5">{translations.about.righrcontH}</h2>
      <div className="row why-col">
        <div className=" text-center">
           <motion.div
              className="affiliate-card"
              initial={{ opacity: 0,scale:0.2 ,}}
              whileInView={{ opacity: 1,scale:1,}}
              transition={{ duration: 0.1,}}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="icon-wrapper mb-3">
                <img
                  width="80px"
                  height="80px"
                  src={exp}
                  alt={translations.whyus.whyt1}
                  className="icon"
                  loading="lazy"
                />
              </div>
              <h5>{translations.whyus.whyt1}</h5>
              <p className ="content-p">{translations.whyus.whytxt1.slice(0, 70) + " . . ."}</p>
            </motion.div>
        </div>
        <div className=" text-center">
           <motion.div
              className="affiliate-card"
              initial={{ opacity: 0,scale:0.2 ,}}
              whileInView={{ opacity: 1,scale:1,}}
              transition={{ duration: 0.1,}}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="icon-wrapper mb-3">
                <img
                  width="80px"
                  height="80px"
                  src={co}
                  alt={translations.whyus.whyt2}
                  className="icon"
                  loading="lazy"
                />
              </div>
              <h5>{translations.whyus.whyt2}</h5>
              <p className ="content-p">{translations.whyus.whytxt2.slice(0, 70) + " . . ."}</p>
            </motion.div>
        </div>
      
       
      </div>
     
    </div>
    </div>
   </div>
    <div className="row">
   <div className="col-md-11 third-why">
            
        <div className="col-md-4 text-center">
         <motion.div
              className="affiliate-card"
              initial={{ opacity: 0,scale:0.2 ,}}
              whileInView={{ opacity: 1,scale:1,}}
              transition={{ duration: 0.1,}}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="icon-wrapper mb-3">
                <img
                  width="80px"
                  height="80px"
                  src={gawda}
                  alt={translations.whyus.whyt3}
                  className="icon"
                  loading="lazy"
                />
              </div>
              <h5>{translations.whyus.whyt3}</h5>
              <p className ="content-p"> {translations.whyus.whytxt3.slice(0, 70) + " . . ."}</p>
            </motion.div>
        </div>
        <div className="col-md-4 text-center">
          <motion.div
              className="affiliate-card"
              initial={{ opacity: 0,scale:0.2 ,}}
              whileInView={{ opacity: 1,scale:1,}}
              transition={{ duration: 0.1,}}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="icon-wrapper mb-3">
                <img
                  width="80px"
                  height="80px"
                  src={longt}
                  alt={translations.whyus.whyt4}
                  className="icon"
                  loading="lazy"
                />
              </div>
              <h5>{translations.whyus.whyt4}</h5>
              <p className ="content-p"> {translations.whyus.whytxt4.slice(0, 70) + " . . ."}</p>
            </motion.div>
        </div>
        <div className="col-md-4 text-center">
           <motion.div
              className="affiliate-card"
              initial={{ opacity: 0,scale:0.2 ,}}
              whileInView={{ opacity: 1,scale:1,}}
              transition={{ duration: 0.1,}}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="icon-wrapper mb-3">
                <img
                  width="80px"
                  height="80px"
                  src={world}
                  alt={translations.whyus.whytxt5}
                  className="icon"
                  loading="lazy"
                />
              </div>
              <h5>{translations.whyus.whyt5}</h5>
              <p className ="content-p"> {translations.whyus.whytxt5.slice(0, 70) + " . . ."}</p>
            </motion.div>
        </div>
        </div>
   </div>
   
  
  
   </>
  )
}

export default AboutContent2