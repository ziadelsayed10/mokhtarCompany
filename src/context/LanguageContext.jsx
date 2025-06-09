import React, { createContext, useState, useContext } from "react";
import translationsEn from "../translations/en.json";
import translationsAr from "../translations/ar.json";

// إنشاء السياق
const LanguageContext = createContext();

// موفر السياق
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ar");

  // دالة لتغيير اللغة
  const changeLanguage = (lang) => {
    setLanguage(lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"; 
  };

  // النصوص المترجمة بناءً على اللغة
  const translations = language === "ar" ? translationsAr : translationsEn;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// هوك لاستخدام السياق بسهولة
export const useLanguage = () => useContext(LanguageContext);
