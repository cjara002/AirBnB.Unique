import React from "react";
import "./landingPageStyle.css";
import uniqueLogo from "./images/UniqueLogo.jpg";
import HeaderDropDown from "./headerDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

class AirbnbUnique extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
            <nav id="navOverEverything">
              <div className="container">
                <div className="row">
                  <div className="col-3">
                  <span>
              {/* do on click */}
              <div className="brand-logo text-black">
                <img
                style={{"width": "10%", "borderRadius": "100%"}}
                  className="img-fluid"
                  src={uniqueLogo}
                  alt="App Logo"
                />
                <small className="ml-2 text-white"> Making every expierence 
                &nbsp;
                <span className="headerRainbow">UNIQUE</span>
                </small>
              </div>
            </span>
                  </div>
    
                   <div className="col-9">
                       <HeaderDropDown />
                    {/*<ul className="navButton">
                      <li>
                        {" "}
                        <a href="#about" className="largeTextNav">
                          About
                        </a>
                        <a href="#about" className="smallTextNav">
                          <em
                            className="fa-1x mr-2 fas fa-laptop"
                            style={{ cursor: "pointer" }}
                            data-toggle="tooltip"
                            title="About Me"
                          ></em>
                        </a>
                      </li>
                      <li>
                        <a href="#techUsed" className="largeTextNav">
                          Technology
                        </a>
                        <a href="#techUsed" className="smallTextNav">
                          <em
                            className="fa-1x mr-2 fas fa-cog"
                            style={{ cursor: "pointer" }}
                            data-toggle="tooltip"
                            title="Technology"
                          ></em>
                        </a>
                      </li>
                      <li>
                        <a href="#myProjects" className="largeTextNav">
                          Recent Work
                        </a>
                        <a href="#myProjects" className="smallTextNav">
                          <em
                            className="fa-1x mr-2 fas fa-briefcase"
                            style={{ cursor: "pointer" }}
                            data-toggle="tooltip"
                            title="Recent Work"
                          ></em>
                        </a>
                      </li>
                      <li>
                        <a href="#formBorder" className="largeTextNav">
                          Contact
                        </a>
                        <a href="#formBorder" className="smallTextNav">
                          <em
                            className="fa-1x mr-2 fas fa-envelope-open-text"
                            style={{ cursor: "pointer" }}
                            data-toggle="tooltip"
                            title="Contact Me"
                          ></em>
                        </a>
                      </li>
                    </ul>
                    */}
                  </div> 
                </div>
              </div>
            </nav> 
        </div>
      </React.Fragment>
    );
  }
}

export default AirbnbUnique;
