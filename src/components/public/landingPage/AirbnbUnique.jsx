import React from "react";
import "./landingPageStyle.css";
import uniqueLogo from "./images/UniqueLogo.jpg";
// import HeaderDropDown from "./headerDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Cleaning from "./images/cleaningBus.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Table from "./images/cleanTable.jpg";
import testimonials from "./content/testimonials";

class AirbnbUnique extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
      <React.Fragment>
        <div className="main-wrapper">
          <header className="header-style header-custom">
            <div className="container">
              <div className="navbar-header navbar-header-custom row">
                <div className="col-lg-3">
                  <a
                    href="#!"
                    className="navbar-brand xs-width-145 px d-inline-block no transition"
                  >
                    <img id="logo" src={uniqueLogo} alt="logo" />
                  </a>
                </div>

                <div className="col-lg-9 col-xl-8 offset-xl-1 offset-lg-0 d-none d-lg-block">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="media">
                        <i className="ti-time header-icon3 text-primary"></i>
                        <div className="media-body ml-3">
                          <span className="font-weight-600 d-bloack display-30 text-white">
                            EMAIL
                          </span>
                          <span className="font-weight-500 display-30 d-block text-white">
                            info@mockemail.com
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="navbar-default">
              <div className="menu_area alt-font bg-light">
                <div className="container">
                  <nav className="navbar navbar expand-lg navbar light p-0">
                    <ul>
                      <li>
                        <a href="#!">Services</a>
                      </li>
                      <li>
                        <a href="#!">FAQ</a>
                      </li>
                      <li>
                        <a href="#!">Log In</a>
                      </li>
                      <li>
                        <a href="#!">Sign In</a>
                      </li>
                    </ul>

                    <div className="attr-nav ml-auto">
                      <ul>
                        <li className="ml-2">
                          <a href="#!" className="butn appointment">
                            <i className="far fa-calendar-plus mr-1 align-middle display-28"></i>
                            <span className="alt-font align-middle d-none d-lg-inline-block">
                              Book Cleaning
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          {/* Banner Start */}
          <section
            className="bg-img cover-background left-overlay pt-10 pb-8 pt-lg-20 pb-lg-14"
            data-overlay-dark="8"
            // data-background={Cleaning}
            style={{ backgroundImage: `url(${Cleaning})` }}
          >
            <div className="container py-2 py-md-5">
              <div className="row align-items-center">
                <div className="col-lg-8 mb-5 mb-lg-0">
                  <h6 className="text-primary">
                    Let's make you into a SUPER host
                  </h6>
                  <h1 className="text-primary display-16 display-md-9 display-lg-7 display-xl-4 mb-1-6 font-weight-700 text-shadow">
                    The Best COVID-19 Complaint Cleaning Company in Southern
                    California
                  </h1>
                  <p className="mb-2-2 w-95 w-md-75 display-29 display-md-28 text-primary alt-font">
                    We are here to make sure that your AirBnB remains clean and
                    safe. Let us handle the hassles of running a rental place.
                  </p>
                  <a href="#!" className="butn white-hover">
                    get started now
                  </a>
                </div>
                <div className="col-lg-4 text-left text-lg-center">
                  <a
                    className="popup-social-video video_btn small"
                    href="https://www.youtube.com/watch?v=WX34STX0Zqw"
                  >
                    <i className="fas fa-play"></i>
                  </a>
                  <div className="d-inline-block align-middle pl-2-5 text-white text-left font-weight-600">
                    Watch
                    <span className="text-uppercase d-block">intro video</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Banner End */}
          {/* testimonials start */}
          <section className="pb-0 overflow-visible bg-light">
            <div className="container">
              <div className="mb-5 text-center">
                <span class="text-uppercase text-primary small font-weight-700 letter-spacing-1 mb-2 d-block">
                  testimonial
                </span>
                <h2 class="h1 mb-0">What our clients rave about</h2>
              </div>
              <div
                class="bg-img cover-background py-5 py-lg-8 px-4 testimonial-style3 rounded"
                data-overlay-light="9"
                style={{ backgroundImage: `url(${Table})` }}
              >
                <div class="owl-carousel owl-theme" id="testmonials-carousel">
                  <Slider {...settings}>
                    {testimonials.map((test, index) => (
                      <div className="testmonial-single text-center" key={index}>
                        <img
                          src={test.img}
                          alt="..."
                          className="rounded-circle"
                        />
                        <span className="h1 align-top d-block my-4">
                          <i className="ti-quote-left"></i>
                        </span>
                        <p className="display-29 display-md-28 mb-4 w-lg-85 w-xl-70 mx-auto">
                          {test.recommedation}
                        </p>
                        <h6 className="letter-spacing-1 text-primary">
                          {test.name}
                        </h6>
                        <span className="mb-0  letter-spacing-2">{test.title}</span>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </section>
          {/* testimonials end */}
        </div>
      </React.Fragment>
    );
  }
}

export default AirbnbUnique;
