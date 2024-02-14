import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import axios from 'axios';

function CustomerLogin() {

    const [formData, setFormData] = useState({
        customerId: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!formData.customerId || !formData.password) {
            toast.error('Please fill out all fields.');
        } else if (!isValidEmail(formData.customerId)) {
            toast.error('Please enter a valid email address for the Customer ID.');
        } else if (!isValidPassword(formData.password)) {
            toast.error('Password must be at least 8 characters long and contain at least one letter and one number, no special characters.');
        } else {
            console.log('Form submitted:', formData);
            try {
                const data = {
                username: formData.customerId,
                password: formData.password
            };
    
                const response = await axios.post('http://localhost:5000/login', data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response.data);
                toast.success('Form submitted successfully!');
                
            } catch (error) {
                console.error('Error submitting form:', error);
                toast.error('Error submitting form:', error.message);
                // Handle error
            }
        }
        setFormData({
            customerId: '',
            password: ''
        });
    };
    

    const isValidEmail = (email) => {
        const emailPattern = /^[^\s@]+@(gmail\.com|hotmail\.com|yahoo\.com)$/;
        return emailPattern.test(email);
    };

    const isValidPassword = (password) => {
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordPattern.test(password);
    };

  return (
    <div className="customer-login">

          <section style={{backgroundColor:'#E1E1E1'}}>
              <div className="container py-5" >
                  <div className="row">
                      <div className="col-12 col-md-6 my-5">
                          <h6 className="welcome">Welcome To</h6>
                          <h1 className="welcome-heading my-3" style={{fontWeight: '900'}}>
                              Embedded IT Solutions customer Portal
                          </h1>
                          <h6 className="customer">Customer Login</h6>

                        <form className="my-5" onSubmit={handleSubmit}>
                        <ToastContainer />
                        <div className="mb-3 col-12 col-md-9">
                        <label htmlFor="customerId" className="form-label form-name">
                        Customer ID <span className="text-danger">*</span>
                        </label>
                        <input
                        type="email"
                        className="form-control border-color"
                        style={{ borderRadius: '0%', width: '100%', height: '53.1875px' }}
                        id="customerId"
                        name="customerId"
                        value={formData.customerId}
                        onChange={handleChange}
                        placeholder="Ex: abcd@gmail.com"
                        />
                        </div>
                        <div className="mb-3 col-12 col-md-9">
                        <label htmlFor="password" className="form-label form-name">
                        Password <span className="text-danger">*</span>
                        </label>
                        <input
                        type="text"
                        className="form-control border-color"
                        style={{ borderRadius: '0%', width: '100%', height: '53.1875px' }}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Password"
                        />
                        </div>
                        <button className="text-white submit-btn my-3" type="submit">
                        Submit
                        </button>
                        </form>

                      </div>
                      <div className="col-12 col-md-6 my-5">
                          <h6 className="portal-high">Customer portal highlights</h6>
                          <div className="d-flex flex-column gap-2 my-4">
                              <div className="d-flex gap-3">
                                  <svg aria-hidden="true" className=" my-2" style={{height: '30px', width:'30px', fill:'#8d8181'}} viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M208 320h384c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H448v128l-48-32-48 32V32H208c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm416 64H128V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v32c0 8.8 7.2 16 16 16h48v368c0 8.8 7.2 16 16 16h82.9c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H451c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H624c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"></path></svg>
                                  <div>
                                      <h6 className="icon-content">Live Material Status</h6>
                                      <h6 className="icon-decs" style={{maxWidth: '90%',lineHeight: '20px'}}> Please access real-time information about your Bill of Materials (BOM) 					</h6>
                                  </div>
                              </div>
                              <div className="d-flex gap-3">
                                  <svg aria-hidden="true" className=" my-2" style={{height: '30px', width:'30px', fill:'#8d8181'}} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 75.2v361.7c0 24.3-19 43.2-43.2 43.2H43.2C19.3 480 0 461.4 0 436.8V75.2C0 51.1 18.8 32 43.2 32h361.7c24 0 43.1 18.8 43.1 43.2zm-37.3 361.6V75.2c0-3-2.6-5.8-5.8-5.8h-9.3L285.3 144 224 94.1 162.8 144 52.5 69.3h-9.3c-3.2 0-5.8 2.8-5.8 5.8v361.7c0 3 2.6 5.8 5.8 5.8h361.7c3.2.1 5.8-2.7 5.8-5.8zM150.2 186v37H76.7v-37h73.5zm0 74.4v37.3H76.7v-37.3h73.5zm11.1-147.3l54-43.7H96.8l64.5 43.7zm210 72.9v37h-196v-37h196zm0 74.4v37.3h-196v-37.3h196zm-84.6-147.3l64.5-43.7H232.8l53.9 43.7zM371.3 335v37.3h-99.4V335h99.4z"></path></svg>                        <div>
                                      <h6 className="icon-content">Live FG status </h6>
                                      <h6 className="icon-decs" style={{maxWidth: '90%',lineHeight: '20px'}}> You can verify your assembly readiness</h6>
                                  </div>
                              </div>
                              <div className="d-flex gap-3">
                                  <svg aria-hidden="true" className=" my-2" style={{height: '30px', width:'30px', fill:'#8d8181'}} viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"></path></svg>                        <div>
                                      <h6 className="icon-content">Live Production data </h6>
                                      <h6 className="icon-decs" style={{maxWidth: '90%',lineHeight: '20px'}} > You can verify MES Linked Stage Wise Production Data </h6>
                                  </div>
                              </div>
                              <div className="d-flex gap-3">
                                  <svg aria-hidden="true" className=" my-2" style={{height: '30px', width:'30px', fill:'#8d8181'}} viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"></path></svg>                        <div>
                                      <h6 className="icon-content">Customer Complaints </h6>
                                      <h6 className="icon-decs" style={{maxWidth: '90%',lineHeight: '20px'}}> Live RMA and Status of your complaints with closing dates </h6>
                                  </div>
                              </div>
                              <div className="d-flex gap-3">
                                  <svg aria-hidden="true" className=" my-2" style={{height: '30px', width:'30px', fill:'#8d8181'}} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"></path></svg>                        <div>
                                      <h6 className="icon-content">Live Delivery Status </h6>
                                      <h6 className="icon-decs"style={{maxWidth: '90%',lineHeight: '20px'}}>Status of your order shipment and specific dispatch details,</h6>
                                  </div>
                              </div>
                              <div className="d-flex gap-3">
                                  <svg aria-hidden="true" className=" my-2" style={{height: '30px', width:'30px', fill:'#8d8181'}} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 161v-21.3l-28.5-8.8-2.2-10.4 20.1-20.7L427 80.4l-29 7.5-7.2-7.5 7.5-28.2-19.1-11.6-21.3 21-10.7-3.2-7-26.4h-22.6l-6.2 26.4-12.1 3.2-19.7-21-19.4 11 8.1 27.7-8.1 8.4-28.5-7.5-11 19.1 20.7 21-2.9 10.4-28.5 7.8-.3 21.7 28.8 7.5 2.4 12.1-20.1 19.9 10.4 18.5 29.6-7.5 7.2 8.6-8.1 26.9 19.9 11.6 19.4-20.4 11.6 2.9 6.7 28.5 22.6.3 6.7-28.8 11.6-3.5 20.7 21.6 20.4-12.1-8.8-28 7.8-8.1 28.8 8.8 10.3-20.1-20.9-18.8 2.2-12.1 29.1-7zm-119.2 45.2c-31.3 0-56.8-25.4-56.8-56.8s25.4-56.8 56.8-56.8 56.8 25.4 56.8 56.8c0 31.5-25.4 56.8-56.8 56.8zm72.3 16.4l46.9 14.5V277l-55.1 13.4-4.1 22.7 38.9 35.3-19.2 37.9-54-16.7-14.6 15.2 16.7 52.5-38.3 22.7-38.9-40.5-21.7 6.6-12.6 54-42.4-.5-12.6-53.6-21.7-5.6-36.4 38.4-37.4-21.7 15.2-50.5-13.7-16.1-55.5 14.1-19.7-34.8 37.9-37.4-4.8-22.8-54-14.1.5-40.9L54 219.9l5.7-19.7-38.9-39.4L41.5 125l53.6 14.1 15.2-15.7-15.2-52 36.4-20.7 36.8 39.4L191 84l11.6-52H245l11.6 45.9L234 72l-6.3-1.7-3.3 5.7-11 19.1-3.3 5.6 4.6 4.6 17.2 17.4-.3 1-23.8 6.5-6.2 1.7-.1 6.4-.2 12.9C153.8 161.6 118 204 118 254.7c0 58.3 47.3 105.7 105.7 105.7 50.5 0 92.7-35.4 103.2-82.8l13.2.2 6.9.1 1.6-6.7 5.6-24 1.9-.6 17.1 17.8 4.7 4.9 5.8-3.4 20.4-12.1 5.8-3.5-2-6.5-6.8-21.2z"></path></svg>                        <div>
                                      <h6 className="icon-content"> Repair Status </h6>
                                      <h6 className="icon-decs" style={{maxWidth: '90%',lineHeight: '20px'}}> To know exact status of your Product repair/rework status</h6>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </section>

          <footer className="position-relative" style={{ backgroundColor: '#01813B' }}>
              <div className="container p-sm-3 p-md-4 p-lg-5 py-5">
                  <div>
                      <div className="row">
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
                              <div className="address-layout">
                                  <h6 className="footer-heading mb-4">Registered Office</h6>
                                  <p className="plant-address-des">Plot No.25/B, HardwarePark, Kancha Imarat, Pahadi Shareef, Srisailam Highway, Hyderabad – 500005, Telangana, India.</p>

                                  <h6 className="footer-heading mb-4">Plant Address</h6>
                                  <p className="plant-address-des">Plot No.5, Fab City SEZ, Srinagar Village, Maheshwaram Mandal, Ranga Reddy District, Hyderabad – 501359, Telangana, India.</p>
                              </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
                              <div className="quicklink-layout">
                                  <h6 className="quick-head">Quick links</h6>
                                  <p className="des-link m-0">Home</p>
                                  <p className="des-link m-0">About us</p>
                                  <p className="des-link m-0">Capabilities</p>
                                  <p className="des-link m-0">Facilities</p>
                                  <p className="des-link m-0">Industries</p>
                                  <p className="des-link m-0">Gallery</p>
                                  <p className="des-link m-0">Clients</p>
                                  <p className="des-link m-0">Contact Us</p>
                                  <p className="des-link m-0">Blog</p>
                              </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
                              <div className="contact-layout">
                                  <h6 className="contact-head">Contact Us</h6>
                                  <h6 className="contact-phone">+91-7032666100</h6>
                                  <h6 className="contact-email">mail: enquiry@embedits.com</h6>
                                  <h6 className="social">Social</h6>
                                  <div className="d-flex justify-content-between mt-5" style={{ width: '150px' }}>
                                      <i className="fb-layout fas fa-brands fa-facebook-f"></i>
                                      <i className="insta-layout fas fa-brands fa-instagram"></i>
                                      <i className="twi-layout fas fa-brands fa-twitter"></i>
                                      <i className="you-layout fas fa-brands fa-youtube"></i>
                                  </div>
                              </div>
                          </div>
                          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-5">
                              <div className="location-layout">
                                  <h6 className="location-head">Location</h6>
                                  <div className="location-map mt-3">
                                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15245.827696226495!2d78.4921026!3d17.1966093!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba4d8b485172d%3A0x935b54b1d7579269!2sEmbedded%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1703761792241!5m2!1sen!2sin" width="100%" height="290" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="customer-login">
                  <div className="whats-app-icon">
                      <img className="img-fluid" src="/Images/Group 3706.png" alt="" />
                  </div>
              </div>

              <div style={{ backgroundColor: '#096935' }}>
                  <h6 className="copyright py-4 text-center m-0">© 2023 embedits.com, All rights reserved</h6>
              </div>
          </footer>



      
    </div>
  )
}

export default CustomerLogin ;
