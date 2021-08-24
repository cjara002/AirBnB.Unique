import React from "react";
import "./landingPageStyle.css";
import uniqueLogo from "./images/UniqueLogo.jpg";
import HeaderDropDown from "./headerDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

class AirbnbUnique extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-wrapper">
<header className="header-style header-custom">
             <div className="container">
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
                      </div> 
                    </div>
                  </div>
                </nav> 
             </div>
</header>
        </div>
      </React.Fragment>
    );
  }
}

export default AirbnbUnique;
