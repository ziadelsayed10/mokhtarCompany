import React from "react";
import { motion, scale } from "framer-motion";
import co from "../../../assets/cohand.webp";
import exp from "../../../assets/exp.webp";
import world from "../../../assets/world.webp";
import gawda from "../../../assets/gawda.webp";
import longt from "../../../assets/longt.webp";
import "./WhyUs.css";
import { useLanguage } from "../../../context/LanguageContext";

const WhyUs = () => {
  const { translations } = useLanguage();

  const content = [
    {
      img: exp,
      title: translations.whyus.whyt1,
      text: translations.whyus.whytxt1,
    },
    {
      img: co,
      title: translations.whyus.whyt2,
      text: translations.whyus.whytxt2,
    },
    {
      img: gawda,
      title: translations.whyus.whyt3,
      text: translations.whyus.whytxt3,
    },
    {
      img: longt,
      title: translations.whyus.whyt4,
      text: translations.whyus.whytxt4,
    },
    {
      img: world,
      title: translations.whyus.whyt5,
      text: translations.whyus.whytxt5,
    },
  ];

  return (
    <div className="pt-5">
      <h2 className="text-center py-5">{translations.whyus.whyh}</h2>
      <div className="row">
        {content.map((item, index) => (
          <div key={index} className="col-md-4 text-center">
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
                  src={item.img}
                  alt={item.title}
                  className="icon"
                  loading="lazy"
                />
              </div>
              <h5>{item.title}</h5>
              <p>{item.text.slice(0, 70) + " . . ."}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
