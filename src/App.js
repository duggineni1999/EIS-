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

import { useState } from 'react';

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

            <div className={`collapse navbar-collapse bg-white ps-3 ${isCollapsed ? 'show' : ''}`} id="navbarText">
              <ul className="navbar-nav position-relative mx-auto mb-2 mb-lg-0 gap-0 gap-xxl-3">
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-black-50" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-black-50" to="/aboutus">About Us</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link fw-bold text-black-50" to="#" aria-expanded="true">Capability <span ><i className="fa fa-angle-down ms-1 drop-icon fs-6 fw-bold" data-bs-toggle="dropdown" style={{ color: 'rgb(7, 223, 7)', fontSize: '.9rem' }} aria-hidden="true"></i></span></Link>
                  <ul className="dropdown-menu rounded-0 shadow border-0" style={{ backgroundColor: '#ffffffe7' }}>
                    <li className=""><Link className="dropdown-item text-black-50 fw-bold lh-lg" to="/NPI">New Product Introduction</Link></li>
                    <li className=""><Link className="dropdown-item text-black-50 fw-bold lh-lg" to="/PCB">PCB Assembly & Box Build</Link></li>
                    <li className=""><Link className="dropdown-item text-black-50 fw-bold lh-lg" to="/EMF">Electronic Manufacturing</Link></li>
                    <li className=""><Link className="dropdown-item text-black-50 fw-bold lh-lg" to="/product-testing">Product Testing</Link></li>
                    <li className=""><Link className="dropdown-item text-black-50 fw-bold lh-lg" to="/AfterSales">After Sales & Warranty</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-black-50" to="/CustomerLogin">Customer Portal</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-black-50" to="/Gallery">Gallery</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-black-50" to="/Contactus">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold text-black-50" to="/Blog">Blog</Link>
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
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/product-testing" element={<ProductTesting />} />
          <Route path="/EMF" element={<EMF />} />
          <Route path="/NPI" element={<NPI />} />
          <Route path="/PCB" element={<PCB />} />
          <Route path="/AfterSales" element={<AfterSales />} />
          <Route path="/CustomerLogin" element={<CustomerLogin />} />
          <Route path="/Contactus" element={<ContactUs />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
