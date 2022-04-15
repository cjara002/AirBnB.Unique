import React from "react";
// import uniqueLogo from "../images/UniqueLogo.jpg";
import homeIcon from "../images/homeIcon.png";

const Header = () => {
  return (
    <React.Fragment>
      <header className="header-style header-custom">
        <div className="navbar-default">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <nav className="navbar navbar expand-lg navbar light p-0 d-flex justify-content-between">
                  <div id="nav">
                    <a href="/">
                      <img
                        className="navbar-brand xs-width-145px d-inline-block mr-lg-0"
                        src={homeIcon}
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="attr-nav ml-auto">
                      
                    <ul>
                      <li className="ml-2">
                      <li>
                      <a href="#!">SIGN IN</a>
                    </li>
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
                {/* <div className="navbar-header navbar-header-custom row"> */}
                {/* <div className="col-lg-3">
                      <a
                        href="#!"
                        className="navbar-brand xs-width-145 px d-inline-block no transition"
                      >
                        <img id="logo" src={uniqueLogo} alt="logo" />
                      </a>
                    </div> */}

                {/* <div className="col-lg-9 col-xl-8 offset-xl-1 offset-lg-0 d-none d-lg-block">
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
                    </div> */}
                {/* </div> */}

                {/* <div className="navbar-default">
                    <div className="menu_area alt-font bg-light">
                      <div className="container"> */}
                {/* <nav className="navbar navbar expand-lg navbar light p-0">
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
                        </nav> */}
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
