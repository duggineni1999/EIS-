import React, { useRef, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

import Aboutusbg from './aboutus.mp4'

function Aboutus() {

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);
    return (
        <div className="product">

            <section className="py-5" style={{ background: '#01813B' }}>
                <div className="container">
                    <h6 className="page2-heading">About Company</h6>
                    <h6 className="p2-main-heading">One of the Largest EMS Facilities in India</h6>
                </div>
            </section>

            <section
                className=" position-relative" >
                <div>
                    <video
                        ref={videoRef}
                        style={{ objectFit: 'cover', width: '100%', height: '800px' }}
                        autoPlay
                        muted
                        loop
                        controls={false}
                    >
                        <source src={Aboutusbg} type="video/mp4" />
                    </video>
                </div>
                <div className="d-flex justify-content-center">
                    <div
                        className="container position-absolute p-2 p-md-4 p-lg-5"
                        style={{ bottom: '0%', background: '#01813BD9' }}
                    >
                        <h6
                            className="p2-description"  >
                            ABOUT COMPANY
                        </h6>
                        <p className="p2-description" style={{ fontSize: '22px' }}>
                            Embedded IT Solutions (India) Pvt. Ltd., provide services that
                            include new product prototyping with FMEA, simple to high technology
                            PCBA manufacturing capability and build-to-order systems assembly.
                            Our products are manufactured by high-end SMT technology machines
                            to meet global quality standards and are supported by a dedicated
                            after-market services and repairs.
                        </p>
                    </div>
                </div>
                <div className="position-absolute" style={{ top: '40%', right: '3%' }}>
                    <img src="images/Group 2.png" alt="" />
                </div>
            </section>

            <section className="container-fluid p-0 py-5" id="about_section-2">
                <div className="container p-2 p-md-4 p-lg-5" id="head">
                    <h6 className="text-center">QUALITY POLICY</h6>
                    <h5 className="text-center pt-5">
                        “ We at EMBEDDED IT SOLUTIONS (INDIA) PVT. LTD. aim to achieve total
                        customer satisfaction through manufacture & supply of electronic
                        assemblies and products to meet the Customer, statutory and regulatory
                        requirements.”
                    </h5>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 col-lg-4 mb-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <img
                                    src="Images/IMG_20190326_125922 1 (1).png"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 mb-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <img
                                    src="Images/image 22.png"
                                    className="img-fluid "
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 mb-4">
                            <div className="d-flex justify-content-center align-items-center">
                                <img
                                    src="Images/Add On (1).png"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row py-5" id="row">
                        <div className="col-12 col-lg-4 mb-3 ">
                            <div
                                className="bg-success"
                                style={{
                                    backgroundColor: '#01813B',
                                    height: '198px',
                                }}
                            >
                                <h6>10</h6>
                                <p>Acres Land Area</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 mb-3 ">
                            <div
                                className="bg-success"
                                style={{
                                    backgroundColor: '#01813B',
                                    height: '198px',
                                }}
                            >
                                <h6>50000</h6>
                                <p>SFT Floor Area</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 mb-3 ">
                            <div
                                className="bg-success"
                                style={{
                                    backgroundColor: '#01813B',
                                    height: '198px',
                                }}
                            >
                                <h6>250</h6>
                                <p>Skilled Workers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid p-0 py-5 position-relative" id="about_section-3">
                <div className="container py-5" id="head">
                    <h6 className="text-center driving-force">Driving Force</h6>
                    <h5 className="text-center team">Management Team</h5>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 col-lg-4 mb-5">
                            <div className="d-flex justify-content-center ms-lg-5 align-items-center">
                                <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <img className="img-fluid" src="Images/Group 13786.png" height="286px" alt="" />
                                </a>
                            </div>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="d-flex justify-content-end pe-3 pt-3">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body pb-3 position-relative">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12 col-sm-4 col-lg-3">
                                                        <img className="img-fluid" src="Images/Group 13786.png" alt="" />
                                                    </div>
                                                    <div className="col-12 col-sm-8 col-lg-9 pt-4">
                                                        <h6 className=" board-semhead">Board Members</h6>
                                                        <h6 className=" board-head">S. Pulla Reddy</h6>
                                                        <p className=" member-designation-popup">Founder and Managing Director</p>
                                                        <div className="border-bottom bg-warning mt-3 mb-2" style={{ height: '2px' }}></div>

                                                        <div className="pt-4">

                                                            <h6 className="board-members-content"> Mr. Pulla Reddy has over 30 years of experience
                                                                in leading enterprise Software & IT Services Industry.
                                                                He is an Engineering graduate in Computer Science
                                                                from Nagarjuna University (1985-1989 batch).
                                                                He started his career with Binary Semantics and
                                                                Embee Software, New Delhi. Then, he moved to
                                                                Hyderabad in 1995 and started SP Software. </h6>

                                                            <h6 className="board-members-content" > Mr. Pulla Reddy was awarded the Bharat Nirman
                                                                Excellence Award. Recently, he received the
                                                                Rashtriya Rattan Award for his role in the
                                                                Socio-Economic Development of the company. </h6>

                                                            <h6 className="board-members-content" > He has a deep understanding of the organization
                                                                and IT Industry. He is an expert in overseeing global
                                                                delivery with strategic direction, nurturing
                                                                customer relationships and spearheading the
                                                                strategic use of human resources for
                                                                competitive advantage. </h6>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="position-absolute p-2" style={{ backgroundColor: 'green', bottom: '0%', left: '0%', right: '0%' }}></div>
                                    </div>
                                </div>
                            </div>


                            <div className="pt-5 d-flex flex-column justify-content-center ms-lg-5 align-items-center">
                                <h6 className="pt-3 name">S. Pulla Reddy</h6>
                                <p className="designation">Founder and Managing Director</p>
                                <img src="Images/Group 13757.png" height="68px" width="68px" className="mt-4" alt="" />
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 mb-5 ">
                            <div className="d-flex justify-content-center align-items-center ">
                                <img className="d-none d-lg-inline" src="Images/Union.png" style={{ zIndex: -1 }} height="286.9px" alt="" />
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 mb-5">
                            <div className="d-flex justify-content-center me-lg-5 align-items-center">
                                <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                    <img className="img-fluid" src="Images/Group 13785.png" height="286px" alt="" />
                                </a>
                            </div>
                            <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-xl modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="d-flex justify-content-end pe-3 pt-3">
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body pb-3 position-relative">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12 col-sm-4 col-lg-3">
                                                        <img className="img-fluid" src="Images/Group 13785.png" alt="" />
                                                    </div>
                                                    <div className="col-12 col-sm-8 col-lg-9 pt-4">
                                                        <h6 className=" board-semhead">Board Members</h6>
                                                        <h6 className=" board-head">Kalyana Putrevu</h6>
                                                        <p className=" member-designation-popup">Chief Operating Officer (COO)</p>
                                                        <div className="border-bottom bg-warning mt-3 mb-2" style={{ height: '2px' }}></div>

                                                        <div className="pt-4">

                                                            <h6 className="board-members-content"> Kalyana Putrevu Is A Highly Accomplished Business
                                                                & Technology Executive
                                                                With A Focus On Strategic Planning, Process Optimization, Team Management, Technology
                                                                Implementation, And Business
                                                                Expansion. With An Impressive Professional Career Spanning Over 29 Years, He Has Garnered
                                                                Extensive Expertise In The
                                                                Field, Including 12+ Years Dedicated To Electronic Manufacturing Operations.  </h6>

                                                            <h6 className="board-members-content" > Throughout His Career, Kalyana Has Collaborated With
                                                                Renowned Global Corporations Such
                                                                As Siemens, Rockwell, Schneider, Emerson, Gefran, Digatron, And Cyient. These Experiences
                                                                Have Provided Him With A
                                                                Diverse Set Of Skills And A Deep Understanding Of Multinational Business Environments. </h6>

                                                            <h6 className="board-members-content" > Kalyana's Key Areas Of Specialization Encompass Supply
                                                                Chain Management,
                                                                Manufacturing Operations, People Development, And Organizational Growth. He Possesses A
                                                                Proven Track Record Of
                                                                Successfully Implementing Automation Projects Within Manufacturing Operations To Enhance
                                                                Operational Efficiencies And
                                                                Drive Overall Productivity.</h6>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="position-absolute p-2" style={{ backgroundColor: 'green', bottom: '0%', left: '0%', right: '0%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-5 d-flex flex-column justify-content-center  align-items-center">
                                <h6 className="pt-3 name">Kalyana Putrevu</h6>
                                <p className="designation">Chief Operating Officer (COO)</p>
                                <img src="Images/Group 13757.png" height="68px" width="68px" className="mt-4" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll">
                    <img src="Images/Group 13759.png" className="img-fluid position-absolute" style={{ bottom: '10%', right: '2%', height: '170px' }} alt="" />
                </div>
            </section>


            <section className="container-fluid p-0  position-relative" id="about_section-4" style={{ backgroundImage: "url('Images/DJI_0756 1.png')", backgroundSize: "cover" }}>

                <div className="container-fluid py-5 p-0 " style={{ backgroundColor: "rgba(1, 100, 46, 0.69)", height: "100%", width: "100%" }}>
                    <div className="container" style={{ marginTop: "100px" }}>
                        <div className="head">
                            <h6>Why EMBEDDED IT SOLUTIONS (INDIA) PVT. LTD.</h6>
                            <div className="row pt-3">
                                <div className="col-12 col-lg-6">
                                    <h5>Benefit’s working with EIS as
                                        your Trusted EMS Partner</h5>
                                </div>
                            </div>
                        </div>

                        <div className="row pt-5  ">
                            <div className="col-12 col-lg-4">
                                <div className="d-flex mb-3">
                                    <div className=" icon-img">
                                        <img src="Images/Group.png" height="41.55px" width="42.28px" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <p>End to End Manufacturing operations
                                            running on Digital Automation / MES</p>
                                    </div>
                                </div>

                                <div className="d-flex mb-3">
                                    <div className="icon-img">
                                        <img src="Images/Group.png" height="41.55px" width="42.28px" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <p>Professional knowledge and experienced
                                            Professionals</p>
                                    </div>
                                </div>

                                <div className="d-flex mb-3">
                                    <div className="icon-img">
                                        <img src="Images/Group.png" height="41.55px" width="42.28px" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <p>New Product Development and Scaling Up
                                            Support</p>
                                    </div>
                                </div>

                                <div className="d-flex mb-3">
                                    <div className="icon-img">
                                        <img src="Images/Group.png" height="41.55px" width="42.28px" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <p>Reduce product costs with our value engineering</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12 col-lg-4">
                                <div className="d-flex mb-3">
                                    <div className="icon-img">
                                        <img src="Images/Group.png" height="41.55px" width="42.28px" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <p>Our expert support in seamless transition
                                            from the design phase to the manufacturing phase</p>
                                    </div>
                                </div>

                                <div className="d-flex mb-3">
                                    <div className="icon-img">
                                        <img src="Images/Group.png" height="41.55px" width="42.28px" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <p>Expert help in case you have any technical
                                            requirements for the desired module with
                                            our design for excellence (DFX) support.</p>
                                    </div>
                                </div>

                                <div className="d-flex mb-3">
                                    <div className="icon-img">
                                        <img src="Images/Group.png" height="41.55px" width="42.28px" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <p>Robotic and manual Testing Infrastructure</p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12 col-lg-4">

                                <div className="d-flex mb-3">
                                    <div className="icon-img">
                                        <img src="Images/Group.png" height="41.55px" width="42.28px" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <p>Automatic equipment for inserting and
                                            selecting appropriate components on the
                                            assembly line, guarantees on-time delivery
                                            with the highest production quality</p>
                                    </div>
                                </div>

                                <div className="d-flex mb-3">
                                    <div className="icon-img">
                                        <img src="Images/Group.png" height="41.55px" width="42.28px" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <p>Modern lines suitable for the production of
                                            all types of circuits from simple to the
                                            most complex</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>

            <section className="container-fluid p-0 py-5 position-relative" id="about_section-5">
                <div className="container  pt-5">
                    <div className="head">
                        <h6>OUR Facilities </h6>
                    </div>

                    <div className="container pb-5">
                        <div className="row ms-lg-4 my-5">
                            <div className="col-12 col-lg-6 ps-0">
                                <ul>
                                    <li>Latest fuji (AIMEX IIIC)</li>

                                    <li>3D solder paste inspection</li>

                                    <li>Automated Optical Inspection (AOI)</li>

                                    <li>2.5D X-ray inspection</li>

                                    <li>RoHS compliance, Lead-free with nitrogen capability</li>

                                    <li>System integration and box-build capability</li>

                                    <li>Low volume high mix/high volume low mix manufacturing</li>

                                    <li>Build To Order (BTO), Configure To Order (CTO) systems</li>

                                    <li>Mounting  4 million Components/day</li>

                                    <li>Placement accuracy of ±50µ for chips and ±40µ for ICs</li>

                                    <li>Ability to handle tiniest chip size of 01005</li>

                                    <li>PCB handling capability from 0.4mm to 2.6mm thickness</li>

                                    <li>Component placement capacity with 0.3mm pitch</li>
                                </ul>
                            </div>

                            <div className="col-12 col-lg-6 my-2 ps-0">
                                <ul className="ms-lg-5 ps-lg-5">
                                    <li>Import/Export tax free</li>
                                    <li>Contract manufacturing located in SEZ</li>
                                    <li>ISO 9001:2015 certified</li>
                                    <li>ISO 14001:2015 certified</li>
                                    <li>IATF 16949:2016 certified</li>
                                    <li>Close proximity to airport & seaport</li>
                                    <li>Nearest seaport krishnapatnam, Chennai & Mumbai</li>
                                    <li>Sprawling area of 10 acres</li>
                                    <li>50K sq.ft. of available floor area</li>
                                    <li>Deployable area for future expansion</li>
                                    <li>Sophisticated manufacturing lines</li>
                                    <li>Automatic DG set for 100% Power Back-up</li>
                                    <li>Environment friendly premises</li>
                                    <li>20mins to Hyderabad international airport</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="">
                        <img src="Images/P1143588 1.png" className="w-100" alt="" />
                    </div>


                    <div className="scroll">
                        <img src="Images/Group 13760.png" className="img-fluid position-absolute" style={{ bottom: "5%", right: "2%", height: "170px" }} alt="" />
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
                                <div className="p-4 p-md-3 px-lg-5 pt-lg-5 mb-4" style={{height:"100%" ,  background:  "#01813B" }}>
                                    <p className="p3-dia-boxes text-white m-0">Embedded IT Solutions (EIS) is located in Fabcity - Special Economic
                                        Zone (SEZ) a duty free zone for export and import, near Hyderabad International Airport</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 p-2">
                                <div className="p-4 p-md-3 px-lg-5 pt-lg-5 mb-4" style={{height:"100%", backgroundColor:  "#01813B"}}>
                                    <p className="p3-dia-boxes text-white m-0">The plant has been setup in a 10 acre campus with an initial
                                        manufacturing floor area of 50,000 sq. ft. built with green building concepts</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 p-2">
                                <div className="p-4 p-md-3 px-lg-5 pt-lg-5 mb-4" style={{height:"100%", backgroundColor:  "#01813B"}}>
                                    <p className="p3-dia-boxes text-white m-0">SEZ on filing on BOE, Shipping Bill (Export), DTA procurement, DTA
                                        Sales and Sub-contracting clearance on daily basis due to presence of customer officer</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </section>

            <section className="container-fluid p-0">
                <div className="py-5" style={{ backgroundColor: 'rgba(9,133,65,255)', backgroundImage: "url(Images/image\\ 9.png)" }}>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <h6 className="section8-row-head mt-5">CERTIFICATIONS & COMPLIANCES</h6>
                                <div className="ps-lg-3">
                                    <h6 className="section8-row-head2 mt-4">Our Recognition & Awards</h6>
                                    <div>
                                        <h6 className="section8-row-head3 mt-5"> Certified for IATF 16949:2016 International Automotive Task Force</h6>
                                        <h6 className="section8-row-head3 mt-3">Certified for ISO 9001:2015 Quality Management Systems</h6>
                                        <h6 className="section8-row-head3 mt-3">Compliance with ANSI / ESD 520.20-2021 Requirements Standards</h6>
                                        <h6 className="section8-row-head3 mt-3">Certified for 14001:2015 Environmental Management Systems</h6>
                                        <h6 className="section8-row-head3 mt-3">Certified for 45001:2018 health and safety Systems</h6>
                                        <h6 className="section8-row-head3 mt-3">Certified for ISO / IEC 27002-2013</h6>
                                        <h6 className="section8-row-head3 mt-3">Certified for Responsible Business Alliance</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <h6 className="section8-row-head mt-5">Our Gallery</h6>
                                <div className="ps-lg-3">
                                    <h6 className="section8-row-head2 mt-4">FUTURE READY INFRASTRUCTURE and State of the art facilities.</h6>
                                    <div className="row my-5">
                                        <div className="col-12 col-sm-4 col-lg-4 mb-3 section8-images">
                                            <div className="d-flex flex-column gap-3">
                                                <img className="w-100" style={{ height: '150px' }} src="/Images/IMG_20190326_125922 3.png" alt="" />
                                                <img className="w-100" style={{ height: '150px' }} src="/Images/IMG_20190326_125922 7.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4 col-lg-4 mb-3 section8-images">
                                            <div className="d-flex flex-column gap-3">
                                                <img className="w-100 col-12" style={{ height: '150px' }} src="/Images/Rectangle 1445.png" alt="" />
                                                <img className="w-100" style={{ height: '150px' }} src="/Images/Rectangle 1447.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4 col-lg-4 mb-3 section8-images">
                                            <div className="d-flex flex-column gap-3">
                                                <img className="w-100" style={{ height: '150px' }} src="/Images/Rectangle 1450.png" alt="" />
                                                <img className="w-100" style={{ height: '150px' }} src="/Images/Rectangle 1456.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default Aboutus;