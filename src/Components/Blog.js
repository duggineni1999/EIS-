import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
function Blog() {
  return (
    <div className='product'>
          <section className="py-2 py-sm-3 py-lg-5" style={{background: '#01813B'}}>
              <div className="container">
                  <h6 className="page2-heading">Blog</h6>
                  <h6 className="p2-main-heading">News And Updates</h6>
              </div>
          </section>

          <section className="py-5">
              <div className="container py-5">
                  <h6 className="blog-decs">"Growth, In Some Curious Way, Depends On Being Always In Motion Just A Little Bit, One Way Or Another."</h6>

                  <div className=" row  my-5">

                      <div className="col-12 col-sm-6 col-md-3 mb-3">
                          <div className="card ">
                              <img src="/Images/blog-1.jpg" className="card-img" style={{height: '255px'}}   alt="..." />
                                  <div className="card-img-overlay p-0 p-2" >
                                      <div className="d-flex flex-column justify-content-end h-100 ">
                                          <h5 className="card-title px-3 py-1  mb-2" style={{ fontFamily: 'Montserrat', fontWeight: 700, backgroundColor: '#f6ce2b', color: '#000000', padding: '2px', fontSize: '0.8em', width: 'fit-content' }}>Festival celebrations</h5>
                                          <h6 className="" style={{ textDecoration: 'none', textShadow: '0px 0px 5px #000000', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '1.1em', color: 'white' }}>Employee Engagement</h6>
                                          <div className="d-flex ">
                                              <div className="d-flex">
                                                  <ion-icon style={{ width: '20px', color: 'white' }} name="calendar"></ion-icon>
                                                  <p className="m-0 ms-2 mt-1 " style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.6em', color: 'white' }}>  January 11, 2024</p>
                                              </div>
                                              <div className=" d-flex gap-2 ms-4">
                                                  <ion-icon className="text-white"  style={{color: 'white'}} name="chatbubbles"></ion-icon>
                                                  <p className="text-white m-0 " style={{ fontFamily: 'Montserrat', fontSize: '10px' }}>0</p>
                                              </div>
                                          </div>
                                      </div>

                                  </div>
                          </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3 mb-3">
                          <div className="card ">
                              <img src="/Images/blog-2.jpg" className="card-img" style={{height: '255px'}} alt="..." />
                                  <div className="card-img-overlay p-0 p-2" >
                                      <div className="d-flex flex-column justify-content-end h-100 ">
                                          <h5 className="card-title px-3 py-1  mb-2"style={{ fontFamily: 'Montserrat', fontWeight: 700, backgroundColor: '#f6ce2b', color: '#000000', padding: '2px', fontSize: '0.8em', width: 'fit-content' }} >Festival celebrations</h5>
                                          <h6 className="" style={{ textDecoration: 'none', textShadow: '0px 0px 5px #000000', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '1.1em', color: 'white' }}>Dussehra Celebrations</h6>
                                          <div className="d-flex ">
                                              <div className="d-flex">
                                                  <ion-icon style={{ width: '20px', color: 'white' }} name="calendar"></ion-icon>
                                                  <p className="m-0 ms-2 mt-1 " style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.6em', color: 'white' }}>  October 23, 2023</p>
                                              </div>
                                              <div className=" d-flex gap-2 ms-4">
                                                  <ion-icon className="text-white"  style={{color: 'white'}} name="chatbubbles"></ion-icon>
                                                  <p className="text-white m-0 " style={{ fontFamily: 'Montserrat', fontSize: '10px' }}>0</p>
                                              </div>
                                          </div>
                                      </div>

                                  </div>
                          </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-3 mb-3">
                          <div className="card ">
                              <img src="/Images/blog-3.jpg" className="card-img" style={{height: '255px'}} alt="..." />
                                  <div className="card-img-overlay p-0 p-2" >
                                      <div className="d-flex flex-column justify-content-end h-100 ">
                                          <h5 className="card-title px-3 py-1 mb-2  mb-0" style={{ fontFamily: 'Montserrat', fontWeight: 700, backgroundColor: '#f6ce2b', color: '#000000', padding: '2px', fontSize: '0.8em', width: 'fit-content' }}>Festival celebrations</h5>
                                          <h6 className=""style={{ textDecoration: 'none', textShadow: '0px 0px 5px #000000', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '1.1em', color: 'white' }}>Ganesh Nimajannam</h6>
                                          <div className="d-flex ">
                                              <div className="d-flex">
                                                  <ion-icon style={{ width: '20px', color: 'white' }} name="calendar"></ion-icon>
                                                  <p className="m-0 ms-2 mt-1 " style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.6em', color: 'white' }}> September 28, 2023</p>
                                              </div>
                                              <div className=" d-flex gap-2 ms-4">
                                                  <ion-icon className="text-white"  style={{color: 'white'}} name="chatbubbles"></ion-icon>
                                                  <p className="text-white m-0 " style={{ fontFamily: 'Montserrat', fontSize: '10px' }}>0</p>
                                              </div>
                                          </div>
                                      </div>

                                  </div>
                          </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-3 mb-3">
                          <div className="card ">
                              <img src="/Images/blog-4.jpg" className="card-img" style={{ height: '255px' }} alt="..." />
                              <div className="card-img-overlay p-0 p-2">
                                  <div className="d-flex flex-column justify-content-end h-100">
                                      <h5 className="card-title px-3 mb-2 py-1 mb-0" style={{ fontFamily: 'Montserrat', fontWeight: 700, backgroundColor: '#f6ce2b', color: '#000000', padding: '2px', fontSize: '0.8em', width: 'fit-content' }}>Medical Camp</h5>
                                      <h6 style={{ textDecoration: 'none', textShadow: '0px 0px 5px #000000', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '1.1em', color: 'white' }}>Annual Medical Camp for Employees</h6>
                                      <div className="d-flex">
                                          <div className="d-flex">
                                              <ion-icon style={{ width: '20px', color: 'white' }} name="calendar"></ion-icon>
                                              <p className="m-0 ms-2 mt-1" style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.6em', color: 'white' }}> September 9, 2023</p>
                                          </div>
                                          <div className="d-flex gap-2 ms-4">
                                              <ion-icon className="text-white" style={{color: 'white'}} name="chatbubbles"></ion-icon>
                                              <p className="text-white m-0" style={{ fontFamily: 'Montserrat', fontSize: '10px' }}>0</p>
                                          </div>
                                      </div>
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
                      <img className="img-fluid" src="/images/Group 3706.png" alt="" />
                  </div>
              </div>

              <div style={{ backgroundColor: '#096935' }}>
                  <h6 className="copyright py-4 text-center m-0">© 2023 embedits.com, All rights reserved</h6>
              </div>
          </footer>
      
    </div>
  )
}

export default Blog
