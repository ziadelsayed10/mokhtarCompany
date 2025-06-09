// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import loggo from '../../../assets/olgo.png'
import loggo from '../../../assets/omlgo2.png'

import './Header2.css'
import { useEffect, useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark")
  const { language, changeLanguage, translations } = useLanguage();

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <nav className="navbar navbar-expand-lg nav-par">
    <div className="container-fluid">
      {/* شعار الموقع */}
      <Link to="/" className="custom-link navbar-brand d-flex align-items-center">
        <img src={loggo} alt="" />
        <div className="brand-div d-flex flex-column">
          <span className="leog-p">{translations.slider.fsliderH}</span>
          <span className="leog-p2">{translations.slider.fsliderP}</span>
        </div>
      </Link>

      {/* زر القائمة في الشاشات الصغيرة */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* عناصر القائمة */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {translations.navbar.home}
            </Link>
          </li>

          {/* قائمة منسدلة */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {translations.navbar.droptit}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" to="/grains">
                  {translations.navbar.dropitm1}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/spices">
                  {translations.navbar.dropitm2}
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/otherproducts">
                  {translations.navbar.dropitm3}
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {translations.navbar.about}
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              {translations.navbar.contact}
            </Link>
          </li>
        </ul>

        {/* أزرار اللغة والتبديل بين الوضع الليلي */}
        <div className="btnss d-flex">
          <button className="lang mx-2" onClick={() => changeLanguage(language === "ar" ? "en" : "ar")}>
            {translations.navbar.language}
          </button>

          <button
            onClick={() => {
              localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
              setTheme(localStorage.getItem("currentMode"));
            }}
            className="mode"
          >
            {theme === "dark" ? (
              <span className="icon-moon-o">
                <FontAwesomeIcon icon={faMoon} />
              </span>
            ) : (
              <span className="icon-sun">
<FontAwesomeIcon icon={faCloudSun} />
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Header;
























// import React, { useEffect, useState } from 'react';
// import { Navbar, Nav, NavDropdown, Offcanvas, Container, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import loggo from '../../../assets/olgo.png';
// import { useLanguage } from '../../../context/LanguageContext';
// import './Header2.css';

// function Header() {
//   const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");
//   const { language, changeLanguage, translations } = useLanguage();
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     if (theme === "light") {
//       document.body.classList.remove("dark");
//       document.body.classList.add("light");
//     } else {
//       document.body.classList.remove("light");
//       document.body.classList.add("dark");
//     }
//   }, [theme]);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       {/* Navbar */}
//       <Navbar expand="lg" className="nav-par">
//         <Container fluid>
//           <Link to={'/'} className='custom-link'>
//             <Navbar.Brand className="d-flex align-items-center">
//               <img src={loggo} alt="Logo" />
//               <div className="brand-div d-flex flex-column">
//                 <span className="leog-p">{translations.slider.fsliderH}</span>
//                 <span className="leog-p2">{translations.slider.fsliderP}</span>
//               </div>
//             </Navbar.Brand>
//           </Link>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
//         </Container>
//       </Navbar>

//       {/* قائمة الجوانب (Offcanvas) لشاشات صغيرة */}
//       <Offcanvas show={show} onHide={handleClose} placement="start" style={{ width: '50%' }}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>{translations.navbar.menu}</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Nav className="flex-column">
//             <Nav.Link as={Link} to="/">{translations.navbar.home}</Nav.Link>
//             <NavDropdown title={translations.navbar.droptit} id="basic-nav-dropdown">
//               <NavDropdown.Item as={Link} to="/grains">{translations.navbar.dropitm1}</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/spices">{translations.navbar.dropitm2}</NavDropdown.Item>
//               <NavDropdown.Item as={Link} to="/otherproducts">{translations.navbar.dropitm3}</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link as={Link} to="/about">{translations.navbar.about}</Nav.Link>
//             <Nav.Link as={Link} to="/contact">{translations.navbar.contact}</Nav.Link>
//             <button className='lang' onClick={() => changeLanguage(language === "ar" ? "en" : "ar")}>
//               {translations.navbar.language}
//             </button>
//             <button
//               onClick={() => {
//                 localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
//                 setTheme(localStorage.getItem("currentMode"));
//               }}
//               className='mode'
//             >
//               {theme === "dark" ? (
//                 <span className='icon-moon-o'>
//                   <i className="fa-regular fa-moon"></i>
//                 </span>
//               ) : (
//                 <span className='icon-sun'>
//                   <i className="fa-solid fa-cloud-sun"></i>
//                 </span>
//               )}
//             </button>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// export default Header;
