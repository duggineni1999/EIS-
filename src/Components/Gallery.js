import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Gallery = () => {
    const options = {
        loop: true,
        margin: 10,
        nav: true,
        navText: ['<ion-icon name="chevron-back-outline"></ion-icon>', '<ion-icon name="chevron-forward-outline"></ion-icon>'], // Icons for navigation
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };
  return (
    <div className='contact'>

          <header class="py-3 py-md-4 py-lg-5">
              <div class="container ">
                  <p class="">Gallery</p>
                  <h2 class="">Future Ready Infrastructure & Facilities</h2>

              </div>
          </header>

          <section id="gallery_sectionone" class="container-fluid py-5">

              <div class="">
                  <h4>Gallery</h4>
                  <h2>Infrastructure & Facilities</h2>
                  <p>Facility <span class="text-secondary mx-2">Products</span></p>
              </div>

              <div class="container py-4" >
                  <div class="row mb-1 pb-1">
                      <div class="col-12 col-md-3">
                          <div>
                              <img src="/Images/Group 13767.png" alt="13767" class="img-fluid mb-4 w-100"
                                   />
                          </div>
                          <div>
                              <img src="/Images/Auto-Handler.png" alt="Auto-Handler" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/DJI_0747.png" alt="0747" class="img-fluid mb-4 w-100 "
                                  />
                          </div>
                          <div>
                              <img src="/Images/P1143625.png" alt="1253625" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/P1143595.png" alt="1143595" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/P1143638.png" alt="1143638" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                      </div>

                      <div class="col-12 col-md-3">
                          <div>
                              <img src="/Images/DJI_0734-copy.png" alt="13767" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/Group 13775.png" alt="13775" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/P1143602.png" alt="1143602" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/Group 13769.png" alt="13769" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/Group 13771.png" alt="13771" class="img-fluid mb-4 w-100" 
                                  />
                          </div>
                          <div>
                              <img src="/Images/X-ray-Unit.png" alt="X-ray-Unit" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                      </div>
                      <div class="col-12 col-md-3">
                          <div>
                              <img src="/Images/P1143609.png" alt="1143609" class="img-fluid mb-4  w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/Laser-marking-Machine.png" alt="Laser-marking-Machine" class="w-100 img-fluid mb-4"
                                  />
                          </div>
                          <div>
                              <img src="/Images/Group 13768.png" alt="13768" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/P1143619.png" alt="1143619" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/Group 13770.png" alt="13770" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/Tape-_-Reel-machine.png" alt="Tape-_-Reel-machine" class=" w-100 img-fluid mb-4"
                                  />
                          </div>

                      </div>
                      <div class="col-12 col-md-3">
                          <div>
                              <img src="/Images/Group 137722.png" alt="137722" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/P1143595.png" alt="1143595" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/P1143615.png" alt="1143615" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/P1143623.png" alt="1143623" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                          <div>
                              <img src="/Images/P1143640.png" alt="1143640" class="img-fluid mb-4 w-100"
                                  />
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="contact">
              <section className="py-5 ">
                  <div className="container ">
                      <h6 className="p3-advatages ">Advantages</h6>
                      <h6 className="p3-subheading ">Special Economic Zone (SEZ) Location</h6>


                      <div className="my-5">
                          <img className="w-100 " src="Images/Group 13787.png" alt="" />
                      </div>
                      <div className="d-flex flex-wrap  h-100  py-5">
                          <div className="col-12 col-lg-4 p-2 ">
                              <div className="p-4 p-md-3 px-lg-5 pt-lg-5 mb-4" style={{ height: "100%", background: "#01813B" }}>
                                  <p className="p3-dia-boxes text-white m-0">Embedded IT Solutions (EIS) is located in Fabcity - Special Economic
                                      Zone (SEZ) a duty free zone for export and import, near Hyderabad International Airport</p>
                              </div>
                          </div>
                          <div className="col-12 col-lg-4 p-2">
                              <div className="p-4 p-md-3 px-lg-5 pt-lg-5 mb-4" style={{ height: "100%", backgroundColor: "#01813B" }}>
                                  <p className="p3-dia-boxes text-white m-0">The plant has been setup in a 10 acre campus with an initial
                                      manufacturing floor area of 50,000 sq. ft. built with green building concepts</p>
                              </div>
                          </div>
                          <div className="col-12 col-lg-4 p-2">
                              <div className="p-4 p-md-3 px-lg-5 pt-lg-5 mb-4" style={{ height: "100%", backgroundColor: "#01813B" }}>
                                  <p className="p3-dia-boxes text-white m-0">SEZ on filing on BOE, Shipping Bill (Export), DTA procurement, DTA
                                      Sales and Sub-contracting clearance on daily basis due to presence of customer officer</p>
                              </div>
                          </div>
                      </div>

                  </div>
              </section>
          </section>

          <section className="py-5 p-2 position-relative" id="section_5">
              <div className="container py-2 py-sm-3 py-lg-5" id="heading">
                  <h6 className="owl-mainheading py-5">Our Manufacturing lines are equipped as shown below</h6>
                  <div className="row">
                      <div className="col-12">
                          <div className="container">
                              <OwlCarousel className="owl-carousel card_carousel" {...options}>
                                  <div className="item me-3">
                                      <div className="card p-0 rounded-0 border-0" style={{ maxWidth: '100%' }}>
                                          <div className="card-body p-0">
                                              <h6 className="owl-heading">SMT Line 1 – XP Series</h6>
                                              <div className="inner mb-2">
                                                  <a href="" target="_blank">
                                                      <img src="/Images/IMG_20190326_125922 7.png" alt="" height="200px" className="card-img-top rounded-0 img-fluid position-relative" />
                                                  </a>
                                                  <img className="position-absolute" style={{ top: '31%', left: '45%', width: '50px' }} src="images/Group 3701.png" alt="" />
                                              </div>
                                              <p className="owl-dec mt-3">First SMT line XP series with two Chip Shooter
                                                  and one Precision Placer with a placement
                                                  speed (throughput) of 50K component per
                                                  hour (CPH)</p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="item me-3">
                                      <div className="card p-0 rounded-0 border-0" style={{ maxWidth: '100%' }}>
                                          <div className="card-body p-0">
                                              <h6 className="owl-heading">SMT Line 2 – Fuji NXT II</h6>
                                              <div className="inner mb-2">
                                                  <a href="" target="_blank">
                                                      <img src="/Images/Add On.png" alt="" height="200px" className="card-img-top rounded-0 img-fluid position-relative" />
                                                  </a>
                                                  <img className="position-absolute" style={{ top: "35%", left: "45%", width: "50px" }} src="images/Group 3701.png" alt="" />
                                              </div>
                                              <p className="owl-dec mt-3">Second SMT line with Fuji NXT II with placement
                                                  speed (throughput) of 62k Component per hour (CPH).</p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="item me-3">
                                      <div className="card p-0 rounded-0 border-0" style={{ maxWidth: '100%' }}>
                                          <div className="card-body p-0">
                                              <h6 className="owl-heading">X-Ray line</h6>
                                              <div className="inner mb-2">
                                                  <a href="" target="_blank">
                                                      <img src="/Images/Fuji NXTII 4.png" alt="" height="200px" className="card-img-top rounded-0 img-fluid position-relative" />
                                                  </a>
                                                  <img className="position-absolute" style={{ top: "35%", left: "45%", width: "50px" }} src="images/Group 3701.png" alt="" />
                                              </div>
                                              <p className="owl-dec mt-3">Third SMT line with latest Fuji machines (AIMEX III C) with placement Speed of 120K CPH</p>

                                          </div>
                                      </div>
                                  </div>

                                  <div className="item me-3 ">
                                      <div className="card p-0 rounded-0 border-0" style={{ maxWidth: '100%' }}>
                                          <div className="card-body p-0">
                                              <h6 className="owl-heading">SMT Line 3 – Fuji AIMEX IIIC</h6>
                                              <div className="inner mb-2">
                                                  <a href="" target="_blank">
                                                      <img src="/Images/Fuji NXTII 4.png" alt="" height="200px" className="card-img-top rounded-0 img-fluid position-relative" />
                                                  </a>
                                                  <img className="position-absolute" style={{ top: "35%", left: "45%", width: "50px" }} src="images/Group 3701.png" alt="" />
                                              </div>
                                              <p className="owl-dec mt-3">Third SMT line with latest Fuji machines (AIMEX III C) with placement Speed of 120K CPH</p>

                                          </div>
                                      </div>
                                  </div>
                              </OwlCarousel>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="rectangle-icon">
                  <div className="bg-black rectangle">
                      <p className="text-nowrap ms-3 "><span className="mt-3" style={{ color: '#1AC664' }}>Your</span> Galary</p>
                  </div>
              </div>
          </section>



          <section className="py-5">
              <h6 className="ourclient mt-5">OUR CLIENTS</h6>
              <h6 className="growth my-4">Growth Enablers</h6>
              <div className="container ">
                  <div className="row">
                      <div className="col-12 col-xxl-6">
                          <div className="container-fluid">
                              <div className="row">
                                  <h6 className="p3-growth-row1 my-2 my-sm-3 my-lg-5">International Customer Base</h6>
                                  <div className="col-4 pe-1">
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className=" d-flex flex-column justify-content-center">
                                              <img className="img-fluid" src="/Images/silicon.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className=" d-flex flex-column justify-content-center">
                                              <img className="img-fluid" src="/Images/statron.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className=" d-flex flex-column justify-content-center">
                                              <img className="img-fluid" src="/Images/tenpao.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className=" d-flex flex-column justify-content-center">
                                              <img className="img-fluid" src="/Images/dtds.png" alt="" />
                                          </div>
                                      </div>

                                  </div>
                                  <div className="col-4 pe-1">
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className="d-flex flex-column justify-content-center">
                                              <img className="img-fluid" src="/Images/proxim.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className="  d-flex flex-column justify-content-center ">
                                              <img className="img-fluid" src="/Images/microsemi.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className="d-flex flex-column justify-content-center ">
                                              <img className="img-fluid" src="/Images/Wi2Wi.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className=" d-flex flex-column justify-content-center ">
                                              <img className="img-fluid" src="/Images/quintessential.png" alt="" />
                                          </div>
                                      </div>

                                  </div>
                                  <div className="col-4 pe-1">
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className=" d-flex flex-column justify-content-center">
                                              <img className="img-fluid" src="/Images/wipro.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className=" d-flex flex-column justify-content-center">
                                              <img className="img-fluid" src="/Images/eximus.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className=" d-flex flex-column justify-content-center">
                                              <img className="img-fluid" src="/Images/ivativ.png" alt="" />
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>

                      </div>
                      <div className="col-12 col-xxl-6">
                          <div className="container-fluid">
                              <div className="row">
                                  <h6 className="p3-growth-row1 my-2 my-sm-3 my-lg-5">Domestic Customer Base</h6>
                                  <div className="col-4 pe-1">
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className="d-flex flex-column justify-content-center">
                                              <img className="img-fluid" src="/Images/bs-techno.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className=" d-flex flex-column justify-content-center">
                                              <img className="img-fluid" src="/Images/visiontek.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className="d-flex flex-column justify-content-center">
                                              <img className="img-fluid" src="/Images/hbl.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card border-sm-0 my-4" style={{ borderRadius: "0%" }}>
                                          <div className="d-flex  justify-content-center">
                                              <img className="img-fluid border-0" src="/Images/cummines.png" alt="" />
                                          </div>
                                      </div>

                                  </div>
                                  <div className="col-4 pe-1">
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className=" d-flex flex-column justify-content-center">
                                              <img className="img-fluid" src="/Images/ecil.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className=" d-flex flex-column justify-content-center ">
                                              <img className="img-fluid" src="/Images/totaka.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card border-sm-0  my-4" style={{ borderRadius: "0%" }}>
                                          <div className="d-flex justify-content-center ">
                                              <img className="img-fluid  border-0" src="/Images/green.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card border-sm-0 my-4" style={{ borderRadius: "0%" }}>
                                          <div className="d-flex  justify-content-center ">
                                              <img className="img-fluid  border-0 " src="/Images/hin.png" alt="" />
                                          </div>
                                      </div>

                                  </div>
                                  <div className="col-4 pe-1">
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className=" d-flex flex-column justify-content-center">
                                              <img className="img-fluid" src="/Images/vedang.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card my-4" style={{ borderRadius: "0%" }}>
                                          <div className="d-flex flex-column justify-content-center">
                                              <img className="img-fluid" src="/Images/kernex.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card border-sm-0 my-4" style={{ borderRadius: "0%" }}>
                                          <div className="d-flex  justify-content-center">
                                              <img className="img-fluid  border-0" src="/Images/kiot.png" alt="" />
                                          </div>
                                      </div>
                                      <div className="card border-sm-0 my-4" style={{ borderRadius: "0%" }}>
                                          <div className="d-flex  justify-content-center">
                                              <img className=" img-fluid border-0" src="/Images/ecled.png" alt="" />
                                          </div>
                                      </div>
                                  </div>
                              </div>

                          </div>

                      </div>
                  </div>
                  <p className="p3-client-decs my-5">All company, product and service names of the third
                      party companies used in this website are for
                      identification purposes only. All these
                      product names, logos and brands belong
                      to their respective owners.</p>
              </div>
          </section >


          <section className="container-fluid position-relative py-5" id="section_10">
              <div className="container">
                  <h6 className="text-center text-success text-uppercase mt-5" style={{ letterSpacing: '.2rem', fontWeight: 700, color: '#054e27 !important', fontSize: '.8rem !important' }}>News And Updates</h6>
                  <h6 className="text-center mb-5 display-6 my-4" style={{ fontWeight: 900, fontSize: '2rem', color: 'rgb(49, 49, 49)', lineHeight: '1.5em' }}>"Growth, In Some Curious Way, Depends On Being Always In Motion Just A Little Bit, One Way Or Another."</h6>
                  <div className=" row  my-5">

                      <div className="col-12 col-sm-6 col-md-3 mb-3">
                          <div className="card ">
                              <img src="/Images/blog-1.jpg" className="card-img" style={{ height: '255px' }} alt="..." />
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
                                              <ion-icon className="text-white" style={{ color: 'white' }} name="chatbubbles"></ion-icon>
                                              <p className="text-white m-0 " style={{ fontFamily: 'Montserrat', fontSize: '10px' }}>0</p>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3 mb-3">
                          <div className="card ">
                              <img src="/Images/blog-2.jpg" className="card-img" style={{ height: '255px' }} alt="..." />
                              <div className="card-img-overlay p-0 p-2" >
                                  <div className="d-flex flex-column justify-content-end h-100 ">
                                      <h5 className="card-title px-3 py-1  mb-2" style={{ fontFamily: 'Montserrat', fontWeight: 700, backgroundColor: '#f6ce2b', color: '#000000', padding: '2px', fontSize: '0.8em', width: 'fit-content' }} >Festival celebrations</h5>
                                      <h6 className="" style={{ textDecoration: 'none', textShadow: '0px 0px 5px #000000', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '1.1em', color: 'white' }}>Dussehra Celebrations</h6>
                                      <div className="d-flex ">
                                          <div className="d-flex">
                                              <ion-icon style={{ width: '20px', color: 'white' }} name="calendar"></ion-icon>
                                              <p className="m-0 ms-2 mt-1 " style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.6em', color: 'white' }}>  October 23, 2023</p>
                                          </div>
                                          <div className=" d-flex gap-2 ms-4">
                                              <ion-icon className="text-white" style={{ color: 'white' }} name="chatbubbles"></ion-icon>
                                              <p className="text-white m-0 " style={{ fontFamily: 'Montserrat', fontSize: '10px' }}>0</p>
                                          </div>
                                      </div>
                                  </div>

                              </div>
                          </div>
                      </div>

                      <div className="col-12 col-sm-6 col-md-3 mb-3">
                          <div className="card ">
                              <img src="/Images/blog-3.jpg" className="card-img" style={{ height: '255px' }} alt="..." />
                              <div className="card-img-overlay p-0 p-2" >
                                  <div className="d-flex flex-column justify-content-end h-100 ">
                                      <h5 className="card-title px-3 py-1 mb-2  mb-0" style={{ fontFamily: 'Montserrat', fontWeight: 700, backgroundColor: '#f6ce2b', color: '#000000', padding: '2px', fontSize: '0.8em', width: 'fit-content' }}>Festival celebrations</h5>
                                      <h6 className="" style={{ textDecoration: 'none', textShadow: '0px 0px 5px #000000', fontFamily: 'Montserrat', fontWeight: 700, fontSize: '1.1em', color: 'white' }}>Ganesh Nimajannam</h6>
                                      <div className="d-flex ">
                                          <div className="d-flex">
                                              <ion-icon style={{ width: '20px', color: 'white' }} name="calendar"></ion-icon>
                                              <p className="m-0 ms-2 mt-1 " style={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: '0.6em', color: 'white' }}> September 28, 2023</p>
                                          </div>
                                          <div className=" d-flex gap-2 ms-4">
                                              <ion-icon className="text-white" style={{ color: 'white' }} name="chatbubbles"></ion-icon>
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
                                              <ion-icon className="text-white" style={{ color: 'white' }} name="chatbubbles"></ion-icon>
                                              <p className="text-white m-0" style={{ fontFamily: 'Montserrat', fontSize: '10px' }}>0</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>


                  </div>
              </div>
              <div className="rectangle-icon">
                  <div className="bg-black rectangle">
                      <p className="text-nowrap"><span style={{ color: '#1AC664' }}>Get</span> to know us +</p>
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

export default Gallery
