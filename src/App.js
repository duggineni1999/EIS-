import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductTesting from "./Components/ProductTesting";
import AboutUs from "./Components/AboutUs";
import EMF from './Components/EMF'
import ContactUs from "./Components/ContactUs";
import CustomerLogin from "./Components/CustomerLogin"
import Gallery from './Components/Gallery'
import Blog from './Components/Blog'
import AfterSales from "./Components/AfterSales";
import PCB from "./Components/PCB"
import NPI from "./Components/NPI";
import HomePage from "./Components/HomePage";

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const collapseRef = useRef(null);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (collapseRef.current && !collapseRef.current.contains(event.target)) {
        setIsCollapsed(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-white sticky-top">
          <div className="container-fluid p-0">
            <Link className="navbar-brand me-auto" to="/">
              <img className="ps-3" src="/Images/Subtract.png" alt="Logo" height="50px" />
              <span className="text-black-50 ms-5 fs-6 fw-bold d-none d-md-inline" style={{ fontSize: '.9rem' }}>Call US:</span>
              <span className="text-black fs-6 fw-bold d-none d-md-inline" style={{ fontSize: '.9rem' }}>+91 70326 66100</span>
            </Link>
            <div className="pe-3">
              <button type="button" className="navbar-toggler border-0 text-black" onClick={handleToggleCollapse}>
                <img src="/Images/Union.svg" alt="" />
              </button>
            </div>

            <div className={`collapse navbar-collapse bg-white ps-3 ${isCollapsed ? 'show' : ''}`} id="navbarText" ref={collapseRef}>
              <ul className="navbar-nav position-relative mx-auto mb-2 mb-lg-0 gap-0 gap-xxl-3">
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-black-50" to="https://eis-website.onrender.com/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-black-50" to="https://eis-website.onrender.com/aboutus">About Us</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link fw-bold text-black-50" to="#" aria-expanded="true">Capability <span ><i className="fa fa-angle-down ms-1 drop-icon fs-6 fw-bold" data-bs-toggle="dropdown" style={{ color: 'rgb(7, 223, 7)', fontSize: '.9rem' }} aria-hidden="true"></i></span></Link>
                  <ul className="dropdown-menu rounded-0 shadow border-0" style={{ backgroundColor: '#ffffffe7' }}>
                    <li className=""><Link className="dropdown-item text-black-50 fw-bold lh-lg" to="https://eis-website.onrender.com/NPI">New Product Introduction</Link></li>
                    <li className=""><Link className="dropdown-item text-black-50 fw-bold lh-lg" to="https://eis-website.onrender.com/PCB">PCB Assembly & Box Build</Link></li>
                    <li className=""><Link className="dropdown-item text-black-50 fw-bold lh-lg" to="https://eis-website.onrender.com/EMF">Electronic Manufacturing</Link></li>
                    <li className=""><Link className="dropdown-item text-black-50 fw-bold lh-lg" to="https://eis-website.onrender.com/product-testing">Product Testing</Link></li>
                    <li className=""><Link className="dropdown-item text-black-50 fw-bold lh-lg" to="https://eis-website.onrender.com/AfterSales">After Sales & Warranty</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-black-50" to="https://eis-website.onrender.com/CustomerLogin">Customer Portal</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-black-50" to="https://eis-website.onrender.com/Gallery">Gallery</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-black-50" to="https://eis-website.onrender.com/Contactus">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-black-50" to="https://eis-website.onrender.com/Blog">Blog</Link>
                </li>
              </ul>

              <ul className="navbar-nav fa ms-auto gap-2 me-3 mb-2 d-none d-xxl-flex mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fas fa-brands fa-facebook fs-6 text-black-50"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa-brands fa-linkedin fs-6 text-black-50"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fas fa-brands fa-youtube fs-6 text-black-50"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <Routes>
          <Route path="https://eis-website.onrender.com/" element={<HomePage />} />
          <Route path="https://eis-website.onrender.com/aboutus" element={<AboutUs />} />
          <Route path="https://eis-website.onrender.com/product-testing" element={<ProductTesting />} />
          <Route path="https://eis-website.onrender.com/EMF" element={<EMF />} />
          <Route path="https://eis-website.onrender.com/NPI" element={<NPI />} />
          <Route path="https://eis-website.onrender.com/PCB" element={<PCB />} />
          <Route path="https://eis-website.onrender.com/AfterSales" element={<AfterSales />} />
          <Route path="https://eis-website.onrender.com/CustomerLogin" element={<CustomerLogin />} />
          <Route path="https://eis-website.onrender.com/ContactUS" element={<ContactUs />} />
          <Route path="https://eis-website.onrender.com/Gallery" element={<Gallery />} />
          <Route path="https://eis-website.onrender.com/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
