import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import VideoFile from './bannervideo new.mp4'
import productbg from './product-range.mp4'
import product from './product.mp4'
import React, { useRef, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function ProductTesting() {
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

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div className='product'>

      <section className="py-2 py-sm-3 py-lg-5" style={{ background: '#01813B' }}>
        <div className="container">
          <h6 className="page2-heading">Capabilities</h6>
          <h6 className="p2-main-heading">Product Testing</h6>
        </div>
      </section>

      <section className="position-relative">
        <div>
          <video
            ref={videoRef}
            style={{ objectFit: 'cover', width: '100%', height: '800px' }}
            autoPlay
            muted
            loop
            controls={false}
          >
            <source src={VideoFile} type="video/mp4" />
          </video>

        </div>
        <div className="d-flex justify-content-center">
          <div className="container position-absolute p-2 p-sm-3 p-lg-5" style={{ bottom: '1%', background: '#01813BD9' }}>
            <p className="p2-description text-center">We perform various in line tests to ensure quality and reliability. Our standard flow includes visual inspection and Automated Optical Inspection, X-Ray, ICT etc.</p>
          </div>
        </div>
        <div className="position-absolute" style={{ top: '40%', right: '3%' }}>
          <img src="/Images/Group 2.png" alt="" />
        </div>
      </section>


      <section className="py-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-12 col-md-6 mb-4">
              <h6 className="p2-section3-row1-decs">We provide our clients with a broad range of services, including product testing, test design, and development tailored to ensure the successful commercialization and enhanced profitability of your products. Collaborating closely with you,</h6>
              <img className="w-100 mt-5 img-fluid" src="/Images/image 40.jpg" alt="" />
            </div>
            <div className="col-12 col-md-6 ps-lg-5">
              <img className="img-fluid" src="/Images/image 41.jpg" alt="" />
              <p className="mt-5 p2-row2-decs">EIS specializes in crafting test strategies and methods that empower you to manage inventory efficiently, boost profitability, and expedite both time-to-volume and time-to-market for all the products we manufacture.</p>
              <p className="mt-5 p2-row2-decs">Through our collaborative program management model, we offer comprehensive product testing support throughout your product's entire lifecycle. This includes support from initial pilot and production builds, initial testing, tooling, systems testing, to final production. Your project stands to gain from EIS's accumulated years of expertise in test design, development, and execution, as well as in New Production Introduction (NPI) and both general and custom manufacturing transfers.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="p2-image2 py-5" style={{ backgroundSize: 'cover' }}>
        <h6 className="p2-section4-head mt-5">our service offerings</h6>
        <h6 className="p2-setion4-main-heading">Product Testing offers:</h6>
        <div className="container">
          <div className="row mt-5 py-5">
            <div className="col-12 col-lg-6 mb-5">
              <div className="d-flex flex-column gap-5 me-lg-5">
                <div className="p-3 p-sm-3 p-lg-5" style={{ background: '#01813BE5' }}>
                  <h6 className="p2-section4-row-head">Reliability Testing</h6>
                  <p className="p2-section4-row-decs mt-4">We offer full testing capabilities, including In-Circuit Testing (ICT), 3D X-ray Testing, as well as full thermal cycle testing for accelerated durability tests, or accelerated life testing, and environmental stress testing. Our temperature “stress test” was designed to catch early, latent defects to ensure reliability of products.</p>
                </div>
                <div className="p-3 p-sm-3 p-lg-5" style={{ background: '#01813BE5' }}>
                  <h6 className="p2-section4-row-head">Functional Testing</h6>
                  <p className="p2-section4-row-decs mt-4">Conducting functional testing for our clients, we employ a variety of advanced and automated tests to guarantee the proper functioning of your circuit board or integrated system throughout your product's lifecycle. Our flexible functional test development process is designed to accommodate the evolving needs of our customers in dynamic market conditions, ensuring timely responsiveness to their requirements.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex flex-column gap-5 ms-lg-5">
                <div className="p-3 p-sm-3 p-lg-5" style={{ background: '#01813BE5' }}>
                  <h6 className="p2-section4-row-head">Structural Testing</h6>
                  <p className="p2-section4-row-decs mt-4">Automated Optical Inspection (AOI) technology ensures 100% accuracy in component placement, polarity orientation, and solder-joint inspection. Our inspection technicians undergo rigorous training to detect even the most subtle imperfections.</p>
                </div>
                <div className="p-3 p-sm-3 p-lg-5" style={{ background: '#01813BE5' }}>
                  <h6 className="p2-section4-row-head">Life Cycle Testing</h6>
                  <p className="p2-section4-row-decs mt-4">We offer state-of-the-art testing technologies customized to your product's requirements, encompassing thermal cycling, burn-in testing, and shock and vibration testing. Our capabilities include temperature chambers, and capabilities for vibration and shock tests.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 position-relative" style={{ background: '#01813B' }}>
        <div className="container mt-5">
          <div className="row py-5">
            <div className="col-12 col-lg-6 mb-2 mb-lg-5">
              <h6 className="p2-setion5-heading">
                Are you utilizing a testing strategy to maximize the success of your product?
              </h6>
            </div>
            <div className="col-12 col-lg-6 mb-2 mb-lg-5 ">
              <div style={{ width: '75%' }}>
                <svg className="p2-section5-chip" xmlns="http://www.w3.org/2000/svg" width="75%" height="189" viewBox="0 0 491 189" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M339.602 188.846H339.917V142.031H348.814V138.831H368.306V123.396L384.113 123.396V121.723L413 121.723L434.567 143.272H447.638C448.025 145.867 450.264 147.857 452.969 147.857C455.946 147.857 458.36 145.446 458.36 142.471C458.36 139.494 455.946 137.082 452.969 137.082C450.264 137.082 448.024 139.073 447.637 141.67H435.233L413.666 120.122H384.113V118.446H363.712V118.447H363.352V133.881H348.814V130.677H339.917V105.633H356.794V103.96L428.156 103.96L443.82 119.61L480.277 119.61C480.664 122.207 482.904 124.198 485.609 124.198C488.586 124.198 491 121.786 491 118.809C491 115.834 488.586 113.422 485.609 113.422C482.904 113.422 480.664 115.413 480.277 118.008L444.486 118.008L428.819 102.358L356.794 102.358V100.684H339.917V96.8989H346.594V95.2222L440.058 95.2222C440.444 97.8188 442.685 99.8105 445.391 99.8105C448.371 99.8105 450.785 97.3993 450.785 94.4244C450.785 91.4467 448.371 89.0349 445.391 89.0349C442.686 89.0349 440.446 91.0262 440.059 93.6233L346.594 93.6233V91.946H339.917V88.1606L356.794 88.1606V86.4873L428.819 86.4873L444.486 70.837H480.277C480.663 73.433 482.904 75.4248 485.609 75.4248C488.586 75.4248 491 73.013 491 70.0381C491 67.0604 488.586 64.6486 485.609 64.6486C482.905 64.6486 480.665 66.6387 480.278 69.2353L443.82 69.2353L428.156 84.8855L356.794 84.8855V83.2111H339.917V58.1684H348.814V54.9671H363.352V70.3976H384.113V68.7237H413.666L435.233 47.1758H447.637C448.024 49.7735 450.264 51.7653 452.969 51.7653C455.946 51.7653 458.36 49.3535 458.36 46.3758C458.36 43.4009 455.946 40.9891 452.969 40.9891C450.265 40.9891 448.025 42.9792 447.638 45.5741H434.567L413 67.122H384.113V65.4476H368.306V50.0142L348.814 50.0142V46.8146H339.917V4.35393e-08L339.42 0V0.000364387H151.082V44.4324H142.186V47.6863H122.694V63.3797H106.887V65.0805H77.9997L56.4332 43.1705H43.3625C42.9754 40.5321 40.7357 38.508 38.0307 38.508C35.0535 38.508 32.6398 40.9602 32.6398 43.9845C32.6398 47.0122 35.0535 49.4645 38.0307 49.4645C40.7357 49.4645 42.9756 47.4403 43.3626 44.7991H55.7671L77.3341 66.7091H106.887V68.4127H127.288V68.4116H127.648V52.7188H142.186V55.9767H151.082V81.4407H134.206V83.1421H62.844L47.1803 67.2298H10.7228C10.3358 64.5886 8.09591 62.5645 5.39093 62.5645C2.41372 62.5645 0 65.0168 0 68.0444C0 71.0687 2.41372 73.5209 5.39093 73.5209C8.09591 73.5209 10.3357 71.4969 10.7228 68.8584H46.5143L62.1811 84.7707H134.206V86.4732H151.082V90.3217H144.406V92.0264H50.9415C50.5557 89.3863 48.3152 87.3612 45.6093 87.3612C42.6291 87.3612 40.2154 89.8128 40.2154 92.8376C40.2154 95.8653 42.6291 98.3176 45.6093 98.3176C48.3143 98.3176 50.5542 96.2929 50.9411 93.6522H144.406V95.3576H151.082V99.2066H134.206V100.908H62.1811L46.5143 116.821H10.723C10.3367 114.181 8.09647 112.156 5.39093 112.156C2.41372 112.156 0 114.608 0 117.633C0 120.661 2.41372 123.113 5.39093 123.113C8.09536 123.113 10.3347 121.09 10.7225 118.449H47.1803L62.844 102.537H134.206V104.239H151.082V129.702H142.186V132.957H127.648V117.268H106.887V118.97H77.3341L55.7671 140.879H43.3627C42.9763 138.238 40.7362 136.213 38.0307 136.213C35.0535 136.213 32.6398 138.665 32.6398 141.693C32.6398 144.717 35.0535 147.17 38.0307 147.17C40.7352 147.17 42.9747 145.146 43.3623 142.508H56.4332L77.9997 120.598H106.887V122.301H122.694V137.993H142.186V141.246H151.082V188.846H339.602V188.846ZM421.825 109.637L376.028 109.637V107.965L355.628 107.965V112.915H376.028V111.239L421.163 111.239L442.729 132.788L462.355 132.788C462.742 135.382 464.981 137.374 467.687 137.374C470.664 137.374 473.078 134.962 473.078 131.988C473.078 129.013 470.664 126.601 467.687 126.601C464.982 126.601 462.742 128.591 462.355 131.186H443.392L421.825 109.637ZM467.687 135.335C465.839 135.335 464.336 133.833 464.336 131.988C464.336 130.142 465.839 128.639 467.687 128.639C469.534 128.639 471.037 130.142 471.037 131.988C471.037 133.833 469.534 135.335 467.687 135.335ZM473.741 79.0993L472.918 78.3231C472.039 77.4932 470.654 77.5453 469.828 78.438C469.004 79.3324 469.049 80.7349 469.929 81.5649L471.099 82.6674C477.334 88.8924 477.648 99.0221 471.773 105.621L471.769 105.625L471.768 105.627L471.763 105.632L471.76 105.634L471.759 105.635L471.757 105.637L471.753 105.64L471.745 105.647L471.742 105.649L470.359 107.151C469.536 108.042 469.591 109.441 470.476 110.275C471.362 111.112 472.745 111.068 473.565 110.177L474.951 108.675C474.957 108.669 474.962 108.663 474.967 108.657C474.97 108.652 474.974 108.648 474.977 108.643L474.978 108.642L474.986 108.631C474.992 108.623 474.997 108.615 475.003 108.607C475.015 108.588 475.028 108.57 475.043 108.552C482.277 100.393 482.064 87.9808 474.702 80.0736C474.615 79.9488 474.516 79.8306 474.404 79.723L473.751 79.1104C473.751 79.1088 473.75 79.1076 473.749 79.1065L473.748 79.1046L473.745 79.1025L473.744 79.1016L473.743 79.1006L473.741 79.0993ZM468.503 85.1635L468.487 85.1475L468.463 85.124L468.448 85.1088L468.419 85.0814L467.434 84.1803C466.972 83.7415 466.366 83.5151 465.733 83.5389C465.098 83.5628 464.509 83.8341 464.077 84.3046C463.179 85.2766 463.231 86.8012 464.187 87.7034L465.145 88.636C468.25 91.5665 468.421 96.5066 465.526 99.6486L464.251 101.032C463.351 102.007 463.406 103.546 464.377 104.46C465.345 105.374 466.867 105.325 467.767 104.348L468.507 103.546L469.042 102.967C473.597 98.0257 473.509 90.3615 468.841 85.5152L468.825 85.4963L468.824 85.4941C468.802 85.4669 468.782 85.4431 468.757 85.4209L468.589 85.2528L468.566 85.2294L468.548 85.2101L468.524 85.185L468.503 85.1635ZM463.349 94.5187C463.275 92.3827 461.501 90.7088 459.389 90.7832C457.278 90.8569 455.624 92.6512 455.699 94.7867C455.773 96.9227 457.547 98.5961 459.658 98.5223C461.77 98.4484 463.423 96.6542 463.349 94.5187ZM421.825 79.2086L376.028 79.2086V80.8825H355.628V75.9324H376.028V77.6069L421.163 77.6069L442.729 56.0584H462.355C462.742 53.463 464.981 51.4718 467.687 51.4718C470.664 51.4718 473.078 53.8836 473.078 56.8585C473.078 59.8328 470.664 62.2446 467.687 62.2446C464.982 62.2446 462.742 60.2545 462.355 57.6602L443.392 57.6602L421.825 79.2086ZM467.687 60.2062C469.534 60.2062 471.037 58.7038 471.037 56.8585C471.037 55.0126 469.534 53.5102 467.687 53.5102C465.839 53.5102 464.336 55.0126 464.336 56.8585C464.336 58.7038 465.839 60.2062 467.687 60.2062ZM311.788 25.162H178.897V160.517H311.788V25.162ZM187.088 32.5763H304.526V152.192H187.088V32.5763ZM221.075 61.1745H269.195C275.056 61.1745 279.852 65.9741 279.852 71.8404V115.171C279.852 121.038 275.056 125.838 269.195 125.838H221.075C215.213 125.838 210.418 121.038 210.418 115.171V71.8404C210.418 65.9741 215.213 61.1745 221.075 61.1745ZM245.929 67.9288C243.326 67.9288 241.215 70.0425 241.215 72.6482C241.215 74.8883 242.775 76.7646 244.866 77.247V108.653C242.775 109.136 241.215 111.012 241.215 113.252C241.215 115.858 243.326 117.971 245.929 117.971C248.533 117.971 250.644 115.858 250.644 113.252C250.644 111.011 249.083 109.135 246.991 108.653V77.247C249.083 76.7652 250.644 74.8889 250.644 72.6482C250.644 70.0425 248.533 67.9288 245.929 67.9288ZM243.339 72.6482C243.339 71.2165 244.499 70.0549 245.929 70.0549C247.36 70.0549 248.52 71.2165 248.52 72.6482C248.52 74.08 247.36 75.241 245.929 75.241C244.499 75.241 243.339 74.08 243.339 72.6482ZM243.339 113.252C243.339 111.871 244.419 110.741 245.78 110.663C245.828 110.67 245.878 110.674 245.929 110.674C245.954 110.674 245.979 110.673 246.004 110.671C246.029 110.669 246.054 110.667 246.078 110.663C247.439 110.741 248.52 111.871 248.52 113.252C248.52 114.684 247.36 115.845 245.929 115.845C244.499 115.845 243.339 114.684 243.339 113.252ZM231.006 67.9316C228.559 67.9316 226.574 69.9173 226.574 72.3667C226.574 73.1418 226.772 73.8701 227.121 74.5036L219.711 82.1588C219.519 82.3568 219.411 82.6225 219.411 82.8984V103.391C219.411 103.674 219.525 103.946 219.726 104.146L227.544 111.909C227.345 112.412 227.236 112.961 227.236 113.534C227.236 115.984 229.221 117.971 231.669 117.971C234.116 117.971 236.101 115.984 236.101 113.534C236.101 111.085 234.116 109.098 231.669 109.098C230.573 109.098 229.569 109.496 228.795 110.157L221.536 102.948V94.1656H228.485C228.661 96.4542 230.572 98.2577 232.904 98.2577C235.351 98.2577 237.335 96.2709 237.335 93.8209C237.335 91.3715 235.351 89.3858 232.904 89.3858C231.084 89.3858 229.52 90.4836 228.837 92.0541C228.78 92.0445 228.721 92.0394 228.661 92.0394H221.536V83.3288L228.564 76.0691C229.264 76.5328 230.103 76.803 231.006 76.803C233.454 76.803 235.438 74.8167 235.438 72.3667C235.438 69.9173 233.454 67.9316 231.006 67.9316ZM228.698 72.3667C228.698 71.0924 229.732 70.0578 231.006 70.0578C232.281 70.0578 233.314 71.0918 233.314 72.3667C233.314 73.6428 232.28 74.6768 231.006 74.6768C229.732 74.6768 228.698 73.6428 228.698 72.3667ZM231.669 111.224C230.394 111.224 229.361 112.259 229.361 113.534C229.361 114.81 230.394 115.844 231.669 115.844C232.943 115.844 233.977 114.81 233.977 113.534C233.977 112.259 232.943 111.224 231.669 111.224ZM230.596 93.8209C230.596 92.546 231.629 91.512 232.904 91.512C234.178 91.512 235.212 92.546 235.212 93.8209C235.212 95.097 234.178 96.1316 232.904 96.1316C231.63 96.1316 230.596 95.097 230.596 93.8209ZM261.089 73.9276C261.089 71.2283 263.276 69.0395 265.973 69.0395C268.67 69.0395 270.857 71.2283 270.857 73.9276C270.857 76.6275 268.67 78.8175 265.973 78.8175C265.453 78.8175 264.952 78.7357 264.482 78.585L259.202 88.9356L268.763 97.7963C269.169 98.1726 269.218 98.7982 268.876 99.2337L260.822 109.474C262.898 110.037 264.426 111.937 264.426 114.193C264.426 116.892 262.239 119.082 259.542 119.082C256.845 119.082 254.657 116.892 254.657 114.193C254.657 112.004 256.095 110.152 258.075 109.528L266.6 98.6899L257.169 89.9488C256.82 89.6255 256.728 89.1093 256.944 88.6852L262.646 77.5076C261.688 76.6151 261.089 75.3413 261.089 73.9276ZM265.973 71.1657C264.449 71.1657 263.213 72.4029 263.213 73.9276C263.213 75.4536 264.449 76.6913 265.973 76.6913C267.497 76.6913 268.733 75.4536 268.733 73.9276C268.733 72.4029 267.497 71.1657 265.973 71.1657ZM259.542 111.431C258.017 111.431 256.781 112.668 256.781 114.193C256.781 115.719 258.018 116.956 259.542 116.956C261.065 116.956 262.301 115.719 262.301 114.193C262.301 112.668 261.065 111.431 259.542 111.431ZM69.1746 77.3693H114.972V79.0696H135.372V74.0371H114.972V75.7407H69.8374L48.2708 53.8307H28.6453C28.2585 51.1923 26.0185 49.1677 23.3134 49.1677C20.3362 49.1677 17.9225 51.6199 17.9225 54.6442C17.9225 57.669 20.3362 60.1213 23.3134 60.1213C26.018 60.1213 28.2576 58.0978 28.6451 55.4593H47.6078L69.1746 77.3693ZM23.3134 51.2403C25.1606 51.2403 26.6643 52.7679 26.6643 54.6442C26.6643 56.521 25.1606 58.0487 23.3134 58.0487C21.4662 58.0487 19.9625 56.521 19.9625 54.6442C19.9625 52.7679 21.4662 51.2403 23.3134 51.2403ZM17.2589 108.42L18.0815 109.209C18.9614 110.053 20.3457 110 21.1719 109.092C21.9965 108.183 21.9509 106.757 21.0711 105.913L19.9008 104.792C13.6661 98.4625 13.3517 88.1628 19.2274 81.4531L19.2311 81.4487L19.2322 81.4474L19.2372 81.4423L19.2397 81.4399C19.2408 81.4388 19.2419 81.4377 19.243 81.4367L19.2466 81.4339L19.2547 81.4271L19.2579 81.4243L20.6408 79.8972C21.4639 78.9912 21.4089 77.5691 20.5242 76.7206C19.6379 75.8705 18.2549 75.9151 17.4349 76.8211L16.0489 78.3481C16.0389 78.3588 16.03 78.3707 16.0216 78.382C16.0132 78.3932 16.0053 78.4051 15.9975 78.417C15.9847 78.4362 15.9719 78.4548 15.9569 78.4733C8.72254 86.7688 8.93629 99.3894 16.2983 107.429C16.3847 107.556 16.4835 107.676 16.5962 107.786L17.249 108.409C17.2498 108.412 17.251 108.413 17.2525 108.415L17.2539 108.416L17.2559 108.418L17.2574 108.419L17.2589 108.42ZM22.4524 102.207C22.467 102.222 22.4817 102.238 22.4966 102.253L22.5209 102.278L22.5365 102.294L22.5532 102.311L22.5715 102.328L22.5744 102.331L22.5812 102.337L23.5661 103.254C24.0282 103.7 24.6344 103.93 25.2666 103.906C25.9021 103.882 26.491 103.606 26.923 103.127C27.8207 102.139 27.7692 100.589 26.8127 99.6714L25.8551 98.7232C22.7504 95.7435 22.5787 90.7205 25.4737 87.5258L26.7487 86.1195C27.6493 85.1278 27.5942 83.5629 26.6231 82.6332C25.6551 81.7047 24.1333 81.7537 23.2327 82.7472L22.4933 83.5629L21.9577 84.1518C17.4028 89.1759 17.4909 96.9687 22.1588 101.896L22.1745 101.916L22.1764 101.918C22.1983 101.945 22.218 101.97 22.2426 101.992L22.4111 102.163L22.4271 102.18L22.4404 102.194L22.4524 102.207ZM27.6509 92.7417C27.7251 94.9137 29.4994 96.6156 31.6107 96.54C33.7219 96.465 35.3757 94.6406 35.3014 92.4693C35.2271 90.2974 33.4528 88.596 31.3416 88.671C29.2303 88.7461 27.5766 90.5704 27.6509 92.7417ZM69.1746 108.309H114.972V106.607H135.372V111.64H114.972V109.937H69.8374L48.2708 131.847H28.6453C28.2585 134.486 26.0186 136.511 23.3134 136.511C20.3362 136.511 17.9225 134.059 17.9225 131.034C17.9225 128.01 20.3362 125.557 23.3134 125.557C26.018 125.557 28.2575 127.581 28.6451 130.219H47.6078L69.1746 108.309ZM23.3134 127.63C21.4662 127.63 19.9625 129.158 19.9625 131.034C19.9625 132.911 21.4662 134.438 23.3134 134.438C25.1606 134.438 26.6643 132.911 26.6643 131.034C26.6643 129.158 25.1606 127.63 23.3134 127.63Z" fill="white" />
                </svg>
              </div>
              <div className="mt-5">
                <p className="p2-section5-decs">At any phase in the design and development process, or as part of our electronics manufacturing services, test engineering teams in your business units of choice will work with you to develop a test strategy and select test methods that enable you to reduce inventory bone-piles, increase yields and accelerate time-to-volume for every product we build.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute" style={{ bottom: "4%", right: "10%" }}>
          <button className="btn py-2 px-4" style={{ backgroundColor: '#D9D9D9' }}>Talk To Us</button>
        </div>
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



      <section className="container-fluid p-0 section_6_image " id="section_6 ">
        <div className="py-3 py-lg-5  " style={{ backgroundColor: 'rgba(1, 100, 46, 0.69)' }}>
          <div className="container py-3 py-lg-5">
            <h6 className="section6-heading pt-5">Our Features</h6>
            <div className="row py-2 py-lg-5">
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 ps-lg-5 svg-size">
                <div className="card bg-transparent border-0">
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>Latest Fuji NXT & AIMEX SMT
                      Line</h6>
                  </div>
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>In-line Solder Paste Height
                      Measurement & Inspection</h6>
                  </div>
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>In-line Automated Optical Inspection (AOI)</h6>
                  </div>
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>2.5Dx X-Ray Inspection</h6>
                  </div>
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>Laser marking for PCBA, Shield, & ICs</h6>
                  </div>
                </div>

              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 ps-lg-5 svg-size">
                <div className="card bg-transparent border-0">
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>RoHS Compliance, Lead-Free
                      with Nitrogen Capability</h6>
                  </div>
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>Wave Soldering</h6>
                  </div>
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>System Integration and BoxBuild
                      Capability</h6>
                  </div>
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>Low-Volume, High-Mix /HighVolume,
                      Low-Mix
                      Manufacturing</h6>
                  </div>
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>Build to Order (BTO), Configure
                      to Order (CTO) systems</h6>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-4 ps-lg-5 svg-size">
                <div className="card bg-transparent border-0">
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>Clean/No-Clean Processes</h6>
                  </div>
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>Conformal Coating</h6>
                  </div>
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>PCBA De-panelling</h6>
                  </div>
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>Ultrasonic welding</h6>
                  </div>
                  <div className="d-flex mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <path d="M39.4312 4.43942L20.7596 23.1111L13.0067 15.3632C12.3568 14.7133 11.2995 14.7133 10.6495 15.3632C9.99963 16.0132 9.99963 17.0704 10.6495 17.7204L19.5811 26.6519C19.9088 26.9796 20.3316 27.1382 20.7596 27.1382C21.1876 27.1382 21.6104 26.9745 21.9381 26.6519L41.7932 6.80157C42.4431 6.15166 42.4431 5.09437 41.7932 4.44443C41.1377 3.78898 40.0864 3.78898 39.4309 4.4389L39.4312 4.43942Z" fill="white" />
                      <path d="M20.7752 3.33513C24.9767 3.33513 28.8293 4.83584 31.847 7.31983L34.2148 4.95202C30.5948 1.86575 25.9122 0 20.7752 0C9.32213 0.00036862 0 9.32298 0 20.7752C0 32.2274 9.3226 41.5504 20.7752 41.5504C32.2273 41.5504 41.5343 32.2278 41.5343 20.7752C41.5343 18.1062 41.0323 15.5589 40.1021 13.2074L37.4862 15.8233C37.9515 17.393 38.2051 19.0577 38.2051 20.7753C38.2051 30.3937 30.3836 38.2154 20.7811 38.2154C11.1626 38.2154 3.341 30.3938 3.341 20.7753C3.33547 11.1568 11.1569 3.33522 20.7754 3.33522L20.7752 3.33513Z" fill="white" />
                    </svg>
                    <h6 className="icon-text ms-3" style={{ width: '100%' }}>Robotic Auto-Handler testing
                      for IoT product</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5 position-relative" style={{ background: 'rgba(223, 220, 220, 0.699)' }} id="section_7">

        <video
          ref={videoRef}
          style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: -1, position: 'absolute', left: 0, bottom: 0 }}
          autoPlay muted controls={false} >
          <source src={productbg} type="video/mp4" />
        </video>

        <div className="container py-5">
          <h6 className="setion7-heading">OUR PRODUCT RANGE</h6>
          <div className="row ps-lg-5 mt-5 pb-lg-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <p className="des-heading">Our boards are being used in sophisticated
                products catering for various commercial
                and industrial segments.</p>
              <video
                ref={videoRef}
                style={{ objectFit: 'cover', width: '100%', }}
                autoPlay
                muted
                controls={false} >
                <source src={product} type="video/mp4" />
              </video>


            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="container-fluid">
                <div className="row ps-lg-5  pt-4 pt-sm-4 pt-lg-5">
                  <div className="col-12 col-md-6 section7-svg">
                    <div className="d-flex flex-column gap-4   ">
                      <div className="d-flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="32" viewBox="0 0 47 38" fill="none">
                          <path d="M23.7984 34.671C24.673 34.671 25.3819 33.962 25.3819 33.0875C25.3819 32.2129 24.673 31.5039 23.7984 31.5039C22.9238 31.5039 22.2148 32.2129 22.2148 33.0875C22.2148 33.962 22.9238 34.671 23.7984 34.671Z" fill="#01813B" stroke="#01813B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M44.3831 12.5013C39.0372 6.75078 31.6414 3.33733 23.797 3C15.9527 3.33733 8.55689 6.75078 3.21094 12.5013" stroke="#01813B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M38.0488 18.8361C34.3216 14.9247 29.1978 12.6474 23.7968 12.502C18.3959 12.6474 13.2721 14.9247 9.54492 18.8361" stroke="#01813B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M31.7163 25.1689L31.6371 25.248C30.6078 24.2186 29.3858 23.402 28.0408 22.8449C26.6959 22.2877 25.2544 22.001 23.7986 22.001C22.3428 22.001 20.9013 22.2877 19.5564 22.8449C18.2114 23.402 16.9894 24.2186 15.96 25.248L15.8809 25.1689" stroke="#01813B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h6 className="icon-content mt-2 ms-3"  >Wi-Fi modules</h6>
                      </div>
                      <div className="d-flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="47" viewBox="0 0 48 47" fill="none">
                          <path d="M36.0701 4.33683H32.9884V1.50868C32.9884 0.675894 32.2981 0 31.4476 0H16.5536C15.703 0 15.0127 0.675894 15.0127 1.50868V4.33698H11.9312C9.94456 4.33698 8.33594 5.91301 8.33594 7.85729V43.4797C8.33594 45.4239 9.94441 47 11.9312 47H36.0699C38.0564 47 39.665 45.424 39.665 43.4797V7.85714C39.6652 5.91401 38.0566 4.33683 36.0701 4.33683ZM28.1094 7.85714V4.33683V3.01745H29.9071V4.33706V7.85737V11.1885H28.1094V7.85714ZM18.0945 7.85714V4.33683V3.01745H23.7439V4.33706V7.85737V11.1885H18.0945V7.85714ZM19.0364 42.8703C19.0364 43.704 18.3461 44.3791 17.4955 44.3791H15.0129C14.1623 44.3791 13.472 43.7041 13.472 42.8703V40.2733C13.472 39.4396 14.1623 38.7646 15.0129 38.7646H17.4955C18.3461 38.7646 19.0364 39.4395 19.0364 40.2733V42.8703ZM19.0364 35.2846C19.0364 36.1183 18.3461 36.7933 17.4955 36.7933H15.0129C14.1623 36.7933 13.472 36.1184 13.472 35.2846V32.6877C13.472 31.854 14.1623 31.179 15.0129 31.179H17.4955C18.3461 31.179 19.0364 31.8539 19.0364 32.6877V35.2846ZM19.0364 27.7001C19.0364 28.5338 18.3461 29.2088 17.4955 29.2088H15.0129C14.1623 29.2088 13.472 28.5338 13.472 27.7001V25.1022C13.472 24.2684 14.1623 23.5935 15.0129 23.5935H17.4955C18.3461 23.5935 19.0364 24.2684 19.0364 25.1022V27.7001ZM26.7832 42.8703C26.7832 43.704 26.093 44.3791 25.2424 44.3791H22.7588C21.9082 44.3791 21.218 43.7041 21.218 42.8703V40.2733C21.218 39.4396 21.9082 38.7646 22.7588 38.7646H25.2424C26.093 38.7646 26.7832 39.4395 26.7832 40.2733V42.8703ZM26.7832 35.2846C26.7832 36.1183 26.093 36.7933 25.2424 36.7933H22.7588C21.9082 36.7933 21.218 36.1184 21.218 35.2846V32.6877C21.218 31.854 21.9082 31.179 22.7588 31.179H25.2424C26.093 31.179 26.7832 31.8539 26.7832 32.6877V35.2846ZM26.7832 27.7001C26.7832 28.5338 26.093 29.2088 25.2424 29.2088H22.7588C21.9082 29.2088 21.218 28.5338 21.218 27.7001V25.1022C21.218 24.2684 21.9082 23.5935 22.7588 23.5935H25.2424C26.093 23.5935 26.7832 24.2684 26.7832 25.1022V27.7001ZM34.5294 42.8703C34.5294 43.704 33.8392 44.3791 32.9886 44.3791H30.5059C29.6554 44.3791 28.9651 43.7041 28.9651 42.8703V40.2733C28.9651 39.4396 29.6554 38.7646 30.5059 38.7646H32.9886C33.8392 38.7646 34.5294 39.4395 34.5294 40.2733V42.8703ZM34.5294 35.2846C34.5294 36.1183 33.8392 36.7933 32.9886 36.7933H30.5059C29.6554 36.7933 28.9651 36.1184 28.9651 35.2846V32.6877C28.9651 31.854 29.6554 31.179 30.5059 31.179H32.9886C33.8392 31.179 34.5294 31.8539 34.5294 32.6877V35.2846ZM34.5294 27.7001C34.5294 28.5338 33.8392 29.2088 32.9886 29.2088H30.5059C29.6554 29.2088 28.9651 28.5338 28.9651 27.7001V25.1022C28.9651 24.2684 29.6554 23.5935 30.5059 23.5935H32.9886C33.8392 23.5935 34.5294 24.2684 34.5294 25.1022V27.7001ZM34.5294 18.8905C34.5294 20.3137 33.3502 21.4674 31.8968 21.4674H16.1039C14.6505 21.4674 13.4723 20.3137 13.4723 18.8905V16.2283C13.4723 14.804 14.6505 13.6505 16.1039 13.6505H31.8967C33.3501 13.6505 34.5294 14.8042 34.5294 16.2283L34.5294 18.8905Z" fill="#01813B" />
                        </svg>
                        <h6 className="icon-content mt-2 ms-3"  >Point-of-sale terminals</h6>
                      </div>
                      <div className="d-flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                          <path d="M27.6591 13.7241H13.935V27.4481H27.6591V13.7241ZM23.0844 22.8734H18.5097V18.2988H23.0844V22.8734ZM41.3831 18.2988V13.7241H36.8085V9.14938C36.8085 6.6333 34.7498 4.57469 32.2338 4.57469H27.6591V0H23.0844V4.57469H18.5097V0H13.935V4.57469H9.36032C6.84424 4.57469 4.78563 6.6333 4.78563 9.14938V13.7241H0.210938V18.2988H4.78563V22.8734H0.210938V27.4481H4.78563V32.0228C4.78563 34.5389 6.84424 36.5975 9.36032 36.5975H13.935V41.1722H18.5097V36.5975H23.0844V41.1722H27.6591V36.5975H32.2338C34.7498 36.5975 36.8085 34.5389 36.8085 32.0228V27.4481H41.3831V22.8734H36.8085V18.2988H41.3831ZM32.2338 32.0228H9.36032V9.14938H32.2338V32.0228Z" fill="#01813B" />
                        </svg>
                        <h6 className="icon-content mt-2 ms-3"  >LED drivers</h6>
                      </div>
                      <div className="d-flex mb-1" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="49" viewBox="0 0 46 49" fill="none">
                          <path d="M44.4399 9.39536L25.3756 0.605771C24.647 0.208285 23.8303 0 23.0004 0C22.1704 0 21.3537 0.208285 20.6252 0.605771L1.56088 9.39536C1.23304 9.54648 0.978656 9.82163 0.85369 10.1603C0.728724 10.499 0.743412 10.8734 0.894525 11.2013C1.04564 11.5291 1.3208 11.7835 1.65947 11.9085C1.99814 12.0334 2.37258 12.0187 2.70042 11.8676L21.8077 3.05811C21.8387 3.04371 21.8693 3.0282 21.8989 3.01183C22.2355 2.82336 22.6147 2.7244 23.0004 2.7244C23.3861 2.7244 23.7653 2.82336 24.1018 3.01183C24.1315 3.02822 24.1621 3.04373 24.1931 3.05811L43.3003 11.8676C43.4627 11.9424 43.6382 11.9846 43.8168 11.9916C43.9954 11.9986 44.1736 11.9703 44.3413 11.9085C44.509 11.8466 44.6629 11.7523 44.7941 11.6309C44.9254 11.5096 45.0314 11.3636 45.1062 11.2013C45.1811 11.0389 45.2232 10.8635 45.2302 10.6848C45.2372 10.5062 45.209 10.328 45.1471 10.1603C45.0852 9.99261 44.9909 9.83875 44.8696 9.7075C44.7482 9.57625 44.6022 9.47019 44.4399 9.39536Z" fill="#01813B" />
                          <path d="M39.7869 22.8818C39.6081 22.8818 39.4311 22.917 39.266 22.9854C39.1008 23.0538 38.9508 23.1541 38.8244 23.2805C38.698 23.4069 38.5978 23.5569 38.5294 23.722C38.461 23.8872 38.4258 24.0642 38.4258 24.2429V29.6872C38.4258 30.0482 38.5692 30.3944 38.8244 30.6496C39.0797 30.9049 39.4259 31.0483 39.7869 31.0483C40.1478 31.0483 40.494 30.9049 40.7493 30.6496C41.0045 30.3944 41.1479 30.0482 41.1479 29.6872V24.2429C41.1479 24.0642 41.1127 23.8872 41.0443 23.722C40.9759 23.5569 40.8757 23.4069 40.7493 23.2805C40.6229 23.1541 40.4729 23.0538 40.3077 22.9854C40.1426 22.917 39.9656 22.8818 39.7869 22.8818Z" fill="#01813B" />
                          <path d="M6.21459 22.4277C6.03584 22.4277 5.85885 22.4629 5.69371 22.5313C5.52858 22.5997 5.37853 22.7 5.25214 22.8264C5.12575 22.9527 5.0255 23.1028 4.9571 23.2679C4.8887 23.4331 4.85351 23.6101 4.85352 23.7888V29.2331C4.85352 29.5941 4.99691 29.9403 5.25216 30.1955C5.50741 30.4508 5.85361 30.5942 6.21459 30.5942C6.57556 30.5942 6.92176 30.4508 7.17701 30.1955C7.43226 29.9403 7.57565 29.5941 7.57565 29.2331V23.7888C7.57566 23.6101 7.54047 23.4331 7.47207 23.2679C7.40367 23.1028 7.30342 22.9527 7.17703 22.8264C7.05064 22.7 6.90059 22.5997 6.73546 22.5313C6.57032 22.4629 6.39333 22.4277 6.21459 22.4277Z" fill="#01813B" />
                          <path d="M34.797 11.3535H11.2051C10.3631 11.3545 9.55593 11.6894 8.96056 12.2848C8.36519 12.8801 8.03028 13.6874 8.0293 14.5293V41.7507C8.03028 42.5927 8.36519 43.3999 8.96056 43.9953C9.55593 44.5907 10.3631 44.9256 11.2051 44.9266H12.5662V46.2876C12.5662 46.7689 12.7574 47.2305 13.0977 47.5709C13.4381 47.9112 13.8997 48.1024 14.381 48.1024H18.0105C18.4918 48.1024 18.9534 47.9112 19.2937 47.5709C19.634 47.2305 19.8252 46.7689 19.8252 46.2876V44.9266H26.6306V46.2876C26.6306 46.7689 26.8218 47.2305 27.1621 47.5709C27.5024 47.9112 27.964 48.1024 28.4453 48.1024H32.0749C32.5562 48.1024 33.0178 47.9112 33.3581 47.5709C33.6984 47.2305 33.8896 46.7689 33.8896 46.2876V44.9266H34.797C35.639 44.9256 36.4462 44.5907 37.0416 43.9953C37.6369 43.3999 37.9718 42.5927 37.9728 41.7507V14.5293C37.9718 13.6874 37.6369 12.8801 37.0416 12.2848C36.4462 11.6894 35.639 11.3545 34.797 11.3535ZM35.2507 41.7507C35.2506 41.871 35.2027 41.9864 35.1177 42.0714C35.0326 42.1565 34.9173 42.2043 34.797 42.2044H11.2051C11.0848 42.2043 10.9695 42.1565 10.8845 42.0714C10.7994 41.9864 10.7516 41.871 10.7514 41.7507V14.5293C10.7516 14.4091 10.7994 14.2937 10.8845 14.2087C10.9695 14.1236 11.0848 14.0758 11.2051 14.0757H34.797C34.9173 14.0758 35.0326 14.1236 35.1177 14.2087C35.2027 14.2937 35.2506 14.4091 35.2507 14.5293V41.7507Z" fill="#01813B" />
                          <path d="M15.2885 40.3896C16.7919 40.3896 18.0107 39.1708 18.0107 37.6675C18.0107 36.1641 16.7919 34.9453 15.2885 34.9453C13.7851 34.9453 12.5664 36.1641 12.5664 37.6675C12.5664 39.1708 13.7851 40.3896 15.2885 40.3896Z" fill="#01813B" />
                          <path d="M30.7124 40.3896C32.2158 40.3896 33.4345 39.1708 33.4345 37.6675C33.4345 36.1641 32.2158 34.9453 30.7124 34.9453C29.209 34.9453 27.9902 36.1641 27.9902 37.6675C27.9902 39.1708 29.209 40.3896 30.7124 40.3896Z" fill="#01813B" />
                          <path d="M32.0751 16.7979H13.9275C13.5666 16.7982 13.2207 16.9418 12.9655 17.1969C12.7103 17.4521 12.5668 17.7981 12.5664 18.1589V30.8622C12.5668 31.2231 12.7103 31.5691 12.9655 31.8242C13.2207 32.0794 13.5666 32.2229 13.9275 32.2233H32.0751C32.4359 32.2229 32.7819 32.0794 33.0371 31.8242C33.2922 31.5691 33.4357 31.2231 33.4361 30.8622V18.1589C33.4357 17.7981 33.2922 17.4521 33.0371 17.1969C32.7819 16.9418 32.4359 16.7982 32.0751 16.7979ZM31.6214 30.4085H14.3812V18.6126H31.6214V30.4085Z" fill="#01813B" />
                        </svg>
                        <h6 className="icon-content mt-2 ms-3"  >Train collision avoidance systems</h6>
                      </div>
                      <div className="d-flex mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="44" viewBox="0 0 38 44" fill="none">
                          <path d="M34.6584 0.683594H14.216C12.7019 0.683594 11.4629 1.92255 11.4629 3.43673V21.0566H13.1838V3.43673C13.1838 2.88597 13.6656 2.40438 14.2161 2.40438H18.4146L20.4107 4.33127H28.3949L30.391 2.40404H34.5895C35.1402 2.40404 35.6218 2.88592 35.6218 3.4364V40.6043C35.6218 41.1551 35.14 41.6367 34.5895 41.6367L18.6211 41.637L18.0703 42.1878L17.038 41.637H14.2848L13.7341 43.289C13.8718 43.289 14.0093 43.3579 14.1471 43.3579H34.5894C36.1036 43.3579 37.3425 42.1189 37.3425 40.6048V3.43683C37.4114 1.92265 36.1724 0.683688 34.6582 0.683688L34.6584 0.683594Z" fill="#01813B" />
                          <path d="M26.6052 38.0577C26.6052 39.2359 25.6499 40.1912 24.4714 40.1912C23.2931 40.1912 22.3379 39.2359 22.3379 38.0577C22.3379 36.879 23.2932 35.9238 24.4714 35.9238C25.65 35.9238 26.6052 36.8791 26.6052 38.0577Z" fill="#01813B" />
                          <path d="M16.7617 9.90625H32.1793V14.8618H16.7617V9.90625Z" fill="#01813B" />
                          <path d="M16.7617 18.3037H32.1793V23.2593H16.7617V18.3037Z" fill="#01813B" />
                          <path d="M19.7207 28.4906C19.8585 28.8347 20.0648 29.1788 20.2026 29.5918L22.9557 30.4867V31.6568H32.11V26.7012H20.6849L19.7207 28.4906Z" fill="#01813B" />
                          <path d="M22.2687 34.1343V30.9681L19.6533 30.1421C19.447 29.5914 19.2403 29.0409 18.9651 28.4901L20.204 26.0122L17.9327 23.8098L15.4548 25.0487C14.904 24.7735 14.3536 24.5669 13.8028 24.3605L12.9768 21.7451H9.81064L8.98466 24.3605C8.43389 24.4983 7.88343 24.7735 7.33265 25.0487L4.85474 23.8098L2.58342 26.0122L3.82238 28.4901C3.54716 28.972 3.3405 29.5225 3.13417 30.1421L0.65625 30.9681V34.1343L3.27165 34.9603C3.40942 35.5111 3.68465 36.0615 3.95987 36.6123L2.72091 39.0902L4.99222 41.3615L7.47014 40.1226C7.95202 40.3978 8.50249 40.6044 9.12214 40.8108L9.94813 43.4262H13.1143L13.9403 40.8108C14.4911 40.6044 15.0415 40.3978 15.5923 40.1226L18.0702 41.3615L20.3415 39.0902L19.1026 36.6123C19.3778 36.0615 19.5844 35.5111 19.7908 34.9603L22.2687 34.1343ZM11.4621 36.1993C9.46598 36.1993 7.81406 34.5473 7.81406 32.5513C7.81406 30.5552 9.46606 28.9032 11.4621 28.9032C13.4582 28.9032 15.1101 30.5552 15.1101 32.5513C15.179 34.5473 13.527 36.1993 11.4621 36.1993Z" fill="#01813B" />
                        </svg>
                        <h6 className="icon-content mt-2 ms-3"  >UPS and power supply solutions</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mt-2">
                    <div className="d-flex flex-column gap-4 section7-svg">
                      <div className="d-flex mb-3 mb-lg-0 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="52" viewBox="0 0 30 52" fill="none">
                          <path d="M14.509 29.018C6.50961 29.018 0 22.5084 0 14.509C0 6.50961 6.50961 0 14.509 0C22.5084 0 29.018 6.50961 29.018 14.509C29.018 22.5084 22.5084 29.018 14.509 29.018ZM14.509 3.22422C8.28615 3.22422 3.22422 8.28615 3.22422 14.509C3.22422 20.7318 8.28615 25.7938 14.509 25.7938C20.7318 25.7938 25.7938 20.7318 25.7938 14.509C25.7938 8.28615 20.7318 3.22422 14.509 3.22422Z" fill="#01813B" />
                          <path d="M14.5082 19.3455C11.8418 19.3455 9.67188 17.1756 9.67188 14.5092C9.67188 11.8428 11.8418 9.67285 14.5082 9.67285C17.1746 9.67285 19.3445 11.8428 19.3445 14.5092C19.3445 17.1756 17.1746 19.3455 14.5082 19.3455ZM14.5082 12.8971C13.6215 12.8971 12.8961 13.6193 12.8961 14.5092C12.8961 15.3991 13.6215 16.1213 14.5082 16.1213C15.3949 16.1213 16.1203 15.3991 16.1203 14.5092C16.1203 13.6193 15.3949 12.8971 14.5082 12.8971Z" fill="#01813B" />
                          <path d="M14.509 51.5879C13.948 51.5879 13.4255 51.2946 13.1322 50.8174L0.267594 29.7633C-0.151628 29.0763 -0.000126705 28.1864 0.618804 27.6772C1.2345 27.1677 2.14064 27.1903 2.73076 27.7319C5.91325 30.6401 10.0983 32.2426 14.5093 32.2426C18.9232 32.2426 23.105 30.6401 26.2841 27.7319C26.8808 27.1903 27.78 27.1644 28.3993 27.6772C29.0183 28.1864 29.1698 29.0763 28.7505 29.76L15.8859 50.8141C15.5926 51.2945 15.0701 51.5878 14.5092 51.5878L14.509 51.5879ZM6.5902 33.9219L14.509 46.8833L22.4277 33.9219C17.4784 35.9435 11.5428 35.9435 6.59038 33.9219H6.5902Z" fill="#01813B" />
                        </svg>
                        <h6 className="icon-content mt-2 ms-3">GPS tracking devices</h6>
                      </div>
                      <div className="d-flex mb-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                          <path d="M11.7239 23.2125H12.5857V24.3615C12.5857 24.9963 13.0998 25.5105 13.7346 25.5105H16.607C17.2418 25.5105 17.756 24.9963 17.756 24.3615V23.2125H18.6177C19.8866 23.2125 20.9156 22.1835 20.9156 20.9146V4.82923C20.9156 3.56035 19.8866 2.53131 18.6177 2.53131V1.38236C18.6177 0.747557 18.1035 0.233398 17.4687 0.233398H12.8729C12.2381 0.233398 11.7239 0.747557 11.7239 1.38236V2.53131C10.4551 2.53131 9.42603 3.56035 9.42603 4.82923V20.9146C9.42603 22.1835 10.4551 23.2125 11.7239 23.2125ZM33.5541 32.4042H33.4615C35.6539 29.962 37.001 26.7456 37.001 23.2125C37.001 15.6093 30.8168 9.42506 23.2135 9.42506V14.0209C28.2819 14.0209 32.4052 18.1442 32.4052 23.2125C32.4052 28.2809 28.2819 32.4042 23.2135 32.4042H3.68125C1.77757 32.4042 0.234375 33.9474 0.234375 35.8511C0.234375 36.4859 0.748533 37 1.38333 37H35.8521C36.4869 37 37.001 36.4859 37.001 35.8511C37.001 33.9474 35.4578 32.4042 33.5541 32.4042ZM7.7026 30.1063H22.639C22.9564 30.1063 23.2135 29.8492 23.2135 29.5318V28.3829C23.2135 28.0655 22.9564 27.8084 22.639 27.8084H7.7026C7.3852 27.8084 7.12812 28.0655 7.12812 28.3829V29.5318C7.12812 29.8492 7.3852 30.1063 7.7026 30.1063Z" fill="#01813B" />
                        </svg>
                        <h6 className="icon-content mt-2 ms-3"  >Biomedical devices</h6>
                      </div>
                      <div className="d-flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="33" viewBox="0 0 46 33" fill="none">
                          <path d="M23.6623 16.08C23.6623 15.4818 23.1774 14.9968 22.5792 14.9968C21.981 14.9968 21.4961 15.4818 21.4961 16.08C21.4961 16.6782 21.981 17.1631 22.5792 17.1631C23.1774 17.1631 23.6623 16.6782 23.6623 16.08Z" fill="#01813B" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M8.49873 1.99995C4.56548 5.6565 2.23073 10.7151 2 16.0805C2.23073 21.446 4.56548 26.5046 8.49873 30.1611" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M12.8305 6.3329C10.1552 8.88223 8.59756 12.3868 8.49805 16.081C8.59756 19.7752 10.1552 23.2798 12.8305 25.8291" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M17.1629 10.6649L17.217 10.719C16.5129 11.4231 15.9544 12.2589 15.5733 13.1789C15.1922 14.0988 14.9961 15.0848 14.9961 16.0805C14.9961 17.0762 15.1922 18.0622 15.5733 18.9821C15.9544 19.902 16.5129 20.7379 17.217 21.4419L17.1629 21.4961" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M21.5173 16.0812C21.5173 16.6794 22.0023 17.1643 22.6005 17.1643C23.1987 17.1643 23.6836 16.6794 23.6836 16.0812C23.6836 15.483 23.1987 14.998 22.6005 14.998C22.0023 14.998 21.5173 15.483 21.5173 16.0812Z" fill="#01813B" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M36.681 30.1612C40.6142 26.5046 42.949 21.446 43.1797 16.0806C42.949 10.7152 40.6142 5.65655 36.681 2" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M32.3472 25.8282C35.0226 23.2789 36.5802 19.7743 36.6797 16.0801C36.5802 12.386 35.0226 8.88136 32.3472 6.33203" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M28.0168 21.4963L27.9626 21.4421C28.6668 20.7381 29.2253 19.9022 29.6064 18.9823C29.9875 18.0624 30.1836 17.0764 30.1836 16.0807C30.1836 15.0849 29.9875 14.0989 29.6064 13.179C29.2253 12.2591 28.6668 11.4232 27.9626 10.7192L28.0168 10.665" stroke="#01813B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h6 className="icon-content  ms-3"  >Wireless communication systems</h6>
                      </div>
                      <div className="d-flex mb-3 " >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="46" viewBox="0 0 32 46" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.6694C0 7.02892 7.02944 0 15.6694 0C24.3094 0 31.3388 7.02892 31.3388 15.6695C31.3388 21.4312 28.126 26.736 23.0694 29.4656V32.699C23.0694 33.6006 22.3386 34.3313 21.4371 34.3313H9.84778C8.94628 34.3313 8.21555 33.6005 8.21555 32.699V29.4612C3.19213 26.7207 0 21.4181 0 15.6694ZM19.8044 28.4552C19.8044 27.8153 20.1782 27.2348 20.7603 26.9698C25.2033 24.9459 28.0744 20.5101 28.0744 15.6694C28.0744 8.82925 22.5096 3.26446 15.6694 3.26446C8.82924 3.26446 3.26445 8.82925 3.26445 15.6694C3.26445 20.5024 6.11657 24.9394 10.5306 26.9725C11.1089 27.2386 11.48 27.818 11.48 28.4552V31.0668H19.8044V28.4552ZM11.1536 36.5075C10.2521 36.5075 9.52135 37.2382 9.52135 38.1397C9.52135 39.0413 10.252 39.772 11.1536 39.772H20.1852C21.0867 39.772 21.8175 39.0413 21.8175 38.1397C21.8175 37.2382 21.0867 36.5075 20.1852 36.5075H11.1536ZM12.1329 43.526C12.1329 42.6246 12.8637 41.8938 13.7652 41.8938H17.5736C18.4752 41.8938 19.2059 42.6246 19.206 43.526C19.206 44.4276 18.4752 45.1583 17.5737 45.1583H13.7652C12.8637 45.1583 12.1329 44.4276 12.1329 43.526Z" fill="#01813B" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.16016 15.9837C6.16016 21.4014 10.5678 25.8091 15.9856 25.8091C21.4035 25.8091 25.8111 21.4014 25.8111 15.9837C25.8111 10.5659 21.4035 6.1582 15.9856 6.1582C10.5678 6.1582 6.16016 10.5659 6.16016 15.9837ZM8.80615 15.9837C8.80615 12.0249 12.0268 8.8042 15.9856 8.8042C19.9445 8.8042 23.1651 12.0249 23.1651 15.9837C23.1651 19.9424 19.9444 23.1631 15.9856 23.1631C12.0269 23.1631 8.80615 19.9424 8.80615 15.9837Z" fill="#01813B" />
                        </svg>
                        <h6 className="icon-content mt-2 ms-3"  >Smart lighting control systems</h6>
                      </div>
                      <div className="d-flex mb-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44" viewBox="0 0 48 44" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.173828 38.4505H5.82978V0.60325C5.82978 0.272808 6.10259 0 6.43303 0H25.591C25.9215 0 26.1943 0.272808 26.1943 0.60325V14.7931H43.1468C43.4772 14.7931 43.75 15.0659 43.75 15.3963V38.4466H47.3887V43.4379H0.173828V38.4505ZM10.6712 5.69438H14.5904C14.7095 5.69438 14.8094 5.79428 14.8094 5.91339V10.6625C14.8094 10.7817 14.7095 10.8816 14.5904 10.8816H10.6712C10.552 10.8816 10.4521 10.7817 10.4521 10.6625V5.91339C10.4521 5.79428 10.552 5.69438 10.6712 5.69438ZM17.3107 29.3172H21.23C21.3491 29.3172 21.449 29.4171 21.449 29.5362V34.2854C21.449 34.4045 21.3491 34.5044 21.23 34.5044H17.3107C17.1916 34.5044 17.0917 34.4045 17.0917 34.2854V29.5362C17.0917 29.4133 17.1916 29.3172 17.3107 29.3172ZM10.6712 29.3172H14.5904C14.7095 29.3172 14.8094 29.4171 14.8094 29.5362V34.2854C14.8094 34.4045 14.7095 34.5044 14.5904 34.5044H10.6712C10.552 34.5044 10.4521 34.4045 10.4521 34.2854V29.5362C10.4521 29.4133 10.552 29.3172 10.6712 29.3172ZM17.3107 21.4404H21.23C21.3491 21.4404 21.449 21.5403 21.449 21.6594V26.4085C21.449 26.5277 21.3491 26.6276 21.23 26.6276H17.3107C17.1916 26.6276 17.0917 26.5277 17.0917 26.4085V21.6632C17.0917 21.5403 17.1916 21.4404 17.3107 21.4404ZM10.6712 21.4404H14.5904C14.7095 21.4404 14.8094 21.5403 14.8094 21.6594V26.4085C14.8094 26.5277 14.7095 26.6276 14.5904 26.6276H10.6712C10.552 26.6276 10.4521 26.5277 10.4521 26.4085V21.6632C10.4521 21.5403 10.552 21.4404 10.6712 21.4404ZM17.3107 13.5674H21.23C21.3491 13.5674 21.449 13.6673 21.449 13.7864V18.5355C21.449 18.6547 21.3491 18.7546 21.23 18.7546H17.3107C17.1916 18.7546 17.0917 18.6547 17.0917 18.5355V13.7864C17.0917 13.6673 17.1916 13.5674 17.3107 13.5674ZM10.6712 13.5674H14.5904C14.7095 13.5674 14.8094 13.6673 14.8094 13.7864V18.5355C14.8094 18.6547 14.7095 18.7546 14.5904 18.7546H10.6712C10.552 18.7546 10.4521 18.6547 10.4521 18.5355V13.7864C10.4521 13.6673 10.552 13.5674 10.6712 13.5674ZM17.3107 5.69438H21.23C21.3491 5.69438 21.449 5.79428 21.449 5.91339V10.6625C21.449 10.7817 21.3491 10.8816 21.23 10.8816H17.3107C17.1916 10.8816 17.0917 10.7817 17.0917 10.6625V5.91339C17.0917 5.79428 17.1916 5.69438 17.3107 5.69438ZM9.07657 2.81261H22.8783C23.1166 2.81261 23.3125 3.04699 23.3125 3.33133V36.3257C23.3125 36.61 23.1166 36.8444 22.8783 36.8444H9.07657C8.83835 36.8444 8.64239 36.61 8.64239 36.3257V3.33133C8.64239 3.04699 8.83835 2.81261 9.07657 2.81261ZM28.0732 20.5297H31.9924C32.1115 20.5297 32.2114 20.6296 32.2114 20.7487V25.4979C32.2114 25.617 32.1115 25.7169 31.9924 25.7169H28.0732C27.9541 25.7169 27.8542 25.617 27.8542 25.4979V20.7487C27.8542 20.6296 27.9541 20.5297 28.0732 20.5297ZM34.7128 29.3172H38.632C38.7511 29.3172 38.851 29.4171 38.851 29.5362V34.2854C38.851 34.4045 38.7511 34.5044 38.632 34.5044H34.7128C34.5937 34.5044 34.4938 34.4045 34.4938 34.2854V29.5362C34.4938 29.4133 34.5937 29.3172 34.7128 29.3172ZM28.0732 29.3172H31.9924C32.1115 29.3172 32.2114 29.4171 32.2114 29.5362V34.2854C32.2114 34.4045 32.1115 34.5044 31.9924 34.5044H28.0732C27.9541 34.5044 27.8542 34.4045 27.8542 34.2854V29.5362C27.8542 29.4133 27.9541 29.3172 28.0732 29.3172ZM34.7128 20.5297H38.632C38.7511 20.5297 38.851 20.6296 38.851 20.7487V25.4979C38.851 25.617 38.7511 25.7169 38.632 25.7169H34.7128C34.5937 25.7169 34.4938 25.617 34.4938 25.4979V20.7487C34.4938 20.6296 34.5937 20.5297 34.7128 20.5297ZM26.6323 17.6057H40.4341C40.6723 17.6057 40.8683 17.8401 40.8683 18.1244V36.3257C40.8683 36.61 40.6723 36.8444 40.4341 36.8444H26.6323C26.3941 36.8444 26.1981 36.61 26.1981 36.3257V18.1244C26.1981 17.8401 26.3941 17.6057 26.6323 17.6057Z" fill="#01813B" />
                        </svg>
                        <h6 className="icon-content mt-2 ms-3"  >Home Appliances</h6>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

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

      

      <section className="container-fluid position-relative py-5" id="section_10">
        <div className="container">
          <h6 className="section9-head pt-5">News And Updates</h6>
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

    </div >

  );
}

export default ProductTesting;
